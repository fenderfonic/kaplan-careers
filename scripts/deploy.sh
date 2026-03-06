#!/usr/bin/env bash
set -euo pipefail

# Load .env if present
if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

: "${AWS_PROFILE:=kiro}"
: "${AWS_REGION:=eu-north-1}"
: "${S3_BUCKET:?S3_BUCKET must be set}"

echo "→ Building Astro site…"
npm run build

echo "→ Syncing hashed assets (long cache) to s3://${S3_BUCKET}…"
aws --profile "$AWS_PROFILE" --region "$AWS_REGION" \
  s3 sync dist/ "s3://${S3_BUCKET}/" \
  --delete \
  --exclude "*" \
  --include "_astro/*" \
  --cache-control "public,max-age=31536000,immutable"

echo "→ Syncing remaining files (no-cache) to s3://${S3_BUCKET}…"
aws --profile "$AWS_PROFILE" --region "$AWS_REGION" \
  s3 sync dist/ "s3://${S3_BUCKET}/" \
  --delete \
  --exclude "_astro/*" \
  --cache-control "no-cache"

# CloudFront invalidation
if [ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ] && [ "$CLOUDFRONT_DISTRIBUTION_ID" != "REPLACE_WITH_CREATED_ID" ]; then
  echo "→ Invalidating CloudFront distribution ${CLOUDFRONT_DISTRIBUTION_ID}…"
  aws --profile "$AWS_PROFILE" \
    cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*"
  echo "✓ Invalidation submitted."
else
  echo "→ CLOUDFRONT_DISTRIBUTION_ID not set — skipping invalidation."
fi

echo "✓ Deploy complete."
