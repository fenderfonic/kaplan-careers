/**
 * assets.ts — Kaplan International Careers
 * Single source of truth for every image and video path used by the site.
 *
 * Paths are declared as they will be served once files are under /public/dist
 * (Phase 1 plan). Actual files currently live in /public/images and /public/video.
 * Do NOT edit file content here — only declare paths.
 *
 * Every imageKey referenced in site.ts (BUSINESS_AREAS, CAREER_AREAS, TESTIMONIALS)
 * has a corresponding entry in this object.
 *
 * The heroVideo value is the extensionless base path; consumers append
 * .mp4 or .webm as appropriate.
 */
export const ASSETS = {
  // ─── Logos ───────────────────────────────────────────────────────────────────
  kiLogo: '/dist/images/ki-logo.svg',
  kLogo: '/dist/images/k-logo.svg',

  // ─── Hero video (Vide.js / native <video>) ───────────────────────────────────
  /** Extensionless base; append .mp4 or .webm at point of use */
  heroVideo: '/dist/video/ki-career',

  // ─── Business Areas ──────────────────────────────────────────────────────────
  /** Keys match the imageKey values in BUSINESS_AREAS (site.ts) */
  businessAreas: {
    languages:   '/dist/images/business-languages.jpg',
    professionals: '/dist/images/business-professional.jpg',
    higherEd:    '/dist/images/business-higher-ed.jpg',
  },

  // ─── Career Areas ────────────────────────────────────────────────────────────
  /** Keys match the imageKey values in CAREER_AREAS (site.ts) */
  careerAreas: {
    teaching:       '/dist/images/area-teaching.jpg',
    operations:     '/dist/images/area-operations.jpg',
    technology:     '/dist/images/area-technology.jpg',
    sales:          '/dist/images/area-sales.jpg',
    customerService: '/dist/images/area-customer-service.jpg',
    admissions:     '/dist/images/area-admissions.jpg',
    marketing:      '/dist/images/area-marketing.jpg',
    finance:        '/dist/images/area-finance.jpg',
    humanResources: '/dist/images/area-hr.jpg',
  },

  // ─── Staff / Testimonials ────────────────────────────────────────────────────
  /** Keys match the imageKey values in TESTIMONIALS (site.ts) */
  staff: {
    william: '/dist/images/ki-staff-william.jpg',
    ersilia: '/dist/images/ki-staff-ersilia.jpg',
    rachel:  '/dist/images/ki-staff-rachel.jpg',
  },

  // ─── Sub-pages ───────────────────────────────────────────────────────────────
  pages: {
    /** Hero image for the Gender Pay Gap Report page */
    genderPayGapHero: '/dist/images/gender-pay-gap.jpg',
  },
} as const;
