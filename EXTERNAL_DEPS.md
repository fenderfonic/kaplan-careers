# External & Proprietary Assets

This document lists every external or proprietary asset referenced by the
Kaplan International Careers microsite that is **not** committed to this repository.
Replace each placeholder with the real asset before deploying to production.

---

## 1. Hero Video

| Field        | Value |
|--------------|-------|
| Path         | `public/video/ki-career.mp4` |
| Current state | Zero-byte placeholder |
| Source       | Kaplan brand team — request from marketing/comms |
| Notes        | Original site used jQuery Vide plugin with `dist/video/ki-career.{mp4,webm,ogv}`. The rebuild uses native `<video autoplay muted loop playsinline>`. Provide an `.mp4` file; optionally also a `.webm` for better compression on modern browsers. |

---

## 2. Business Area Images

| Path | Description | Source |
|------|-------------|--------|
| `public/images/business-languages.jpg` | Kaplan International Languages hero | Brand team / original: `dist/images/business-kaplan-int-english.jpg` |
| `public/images/business-professional.jpg` | Professional & Vocational hero | Brand team / original: `dist/images/business-professionals-vocational.jpg` |
| `public/images/business-higher-ed.jpg` | Higher Education hero | Brand team / original: `dist/images/business-higher-education.jpg` |

---

## 3. Career Area Images

| Path | Description | Source |
|------|-------------|--------|
| `public/images/area-teaching.jpg` | Teaching & Academic | Brand team / original: `dist/images/area-teaching-academic.jpg` |
| `public/images/area-operations.jpg` | Operations | Brand team / original: `dist/images/area-operations.jpg` |
| `public/images/area-technology.jpg` | Technology | Brand team / original: `dist/images/area-technology.jpg` |
| `public/images/area-sales.jpg` | Sales | Brand team / original: `dist/images/area-sales.jpg` |
| `public/images/area-customer-service.jpg` | Customer Service | Brand team / original: `dist/images/area-customer-service.jpg` |
| `public/images/area-admissions.jpg` | Admissions | Brand team / original: `dist/images/area-admissions.jpg` |
| `public/images/area-marketing.jpg` | Marketing | Brand team / original: `dist/images/area-marketing.jpg` |
| `public/images/area-finance.jpg` | Finance | Brand team / original: `dist/images/area-finance.jpg` |
| `public/images/area-hr.jpg` | Human Resources | Brand team / original: `dist/images/area-human-resources.jpg` |

---

## 4. Staff Portrait Photos

| Path | Person | Source |
|------|--------|--------|
| `public/images/ki-staff-william.jpg` | William (Admissions) | Brand team / original: `dist/images/ki-staff-william.jpg` |
| `public/images/ki-staff-ersilia.jpg` | Ersilia (Customer Care) | Brand team / original: `dist/images/ki-staff-ersilia.jpg` |
| `public/images/ki-staff-rachel.jpg` | Rachel (Teaching) | Brand team / original: `dist/images/ki-staff-rachel.jpg` |

---

## 5. Logos

| Path | Description | Notes |
|------|-------------|-------|
| `public/images/ki-logo.svg` | Kaplan International wordmark | Inline text-based placeholder committed. Replace with official SVG from brand guidelines. |
| `public/images/k-logo.svg` | Kaplan "K" symbol used in Overview section | Inline placeholder committed. Replace with official SVG. |

---

## 6. Favicon

| Item | Value |
|------|-------|
| Current source | `https://study.kaplaninternational.com/favicon.ico` (loaded remotely) |
| Recommendation | Download and host locally at `public/favicon.ico` to avoid dependency on the study subdomain |

---

## 7. Third-party Scripts (loaded at runtime — no download required)

| Script | ID / URL | Notes |
|--------|----------|-------|
| Google Tag Manager | `GTM-T7R98LC` | Loaded in `<head>` via inline snippet. Set `PUBLIC_GTM_CONTAINER_ID` env var. |
| Google Fonts — Lato | `https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900` | Loaded via `<link>` in BaseLayout. No API key needed. |
| Kaplan Cookie Banner | `https://assetlibs.kaplaninternational.com/_assets/cookie-banner/js/cookieconsent.min.js` | **Not yet implemented** — add in Phase 2 if required for compliance. |
| Optimizely | `https://cdn.optimizely.com/js/4238035597.js` | **Not yet implemented** — add in Phase 2 if A/B testing is needed. |

---

## 8. ATS Platform URLs (configured via environment variables)

| Region | Platform | Env var | URL |
|--------|----------|---------|-----|
| EMEA (UK/Ireland) | HireHive | `PUBLIC_ATS_EMEA_URL` | `https://my.hirehive.io/kaplan-international/` |
| USA / Canada | Workday | `PUBLIC_ATS_USA_URL` | `https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers` |
| Australia / NZ | ApplyNow (PageUp) | `PUBLIC_ATS_ANZ_URL` | `https://kaplan.applynow.net.au/` |
| Singapore | Kaplan SG | `PUBLIC_ATS_SG_URL` | `https://www.kaplan.com.sg/careers/` |
| Hong Kong | Kaplan HK | `PUBLIC_ATS_HK_URL` | `https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php` |

---

## Acquisition checklist

- [ ] Request hero video (`ki-career.mp4`) from Kaplan brand/marketing team
- [ ] Obtain high-res business area images (3 JPEGs) from brand team
- [ ] Obtain career area background images (9 JPEGs) from brand team
- [ ] Obtain staff portrait photos (3 JPEGs: William, Ersilia, Rachel) from HR/comms
- [ ] Download official `ki-logo.svg` and `k-logo.svg` from brand guidelines portal
- [ ] Download `favicon.ico` from study subdomain or request from brand team
- [ ] Confirm GTM container ID (`GTM-T7R98LC`) is still active and correct for new domain
- [ ] Set up `.env` / `.env.local` from `.env.example` for each deployment environment
