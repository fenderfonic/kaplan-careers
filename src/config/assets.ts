/**
 * assets.ts — Kaplan International Careers
 * Single source of truth for every image, video, and static asset path.
 *
 * All paths mirror the original site's /dist/ structure exactly.
 * When replacing assets from Brandfolder, update the path here — one change
 * propagates everywhere in the site.
 *
 * The heroVideo value is the extensionless base path; Vide.js appends
 * .mp4 / .webm / .ogv automatically.
 */
export const ASSETS = {
  // ─── Logos ───────────────────────────────────────────────────────────────────
  kiLogo: '/dist/images/ki-logo.svg',
  kLogo:  '/dist/images/k-logo.svg',

  // ─── Hero video ─────────────────────────────────────────────────────────────
  /**
   * Extensionless base path — Vide.js appends .mp4 / .webm / .ogv.
   * NO leading slash: matches original site exactly so Vide.js path
   * resolution works correctly (relative to document root).
   */
  heroVideo: 'dist/video/ki-career',

  // ─── Business Areas ──────────────────────────────────────────────────────────
  businessAreas: {
    languages:     'dist/images/business-kaplan-int-english.jpg',
    professionals: 'dist/images/business-professionals-vocational.jpg',
    higherEd:      'dist/images/business-higher-education.jpg',
  },

  // ─── Career Areas ────────────────────────────────────────────────────────────
  careerAreas: {
    teaching:        'dist/images/area-teaching-academic.jpg',
    operations:      'dist/images/area-operations.jpg',
    technology:      'dist/images/area-technology.jpg',
    sales:           'dist/images/area-sales.jpg',
    customerService: 'dist/images/area-customer-service.jpg',
    admissions:      'dist/images/area-admissions.jpg',
    marketing:       'dist/images/area-marketing.jpg',
    finance:         'dist/images/area-finance.jpg',
    humanResources:  'dist/images/area-human-resources.jpg',
  },

  // ─── Staff / Testimonials ────────────────────────────────────────────────────
  staff: {
    william: 'dist/images/ki-staff-william.jpg',
    ersilia: 'dist/images/ki-staff-ersilia.jpg',
    rachel:  'dist/images/ki-staff-rachel.jpg',
  },

  // ─── Sub-pages ───────────────────────────────────────────────────────────────
  pages: {
    genderPayGapHero: 'dist/images/gender-pay-gap.jpg',
  },
} as const;
