# Kaplan International Careers — Deep Recon Report

**Scraped:** 2026-03-06  
**Target:** https://careers.kaplaninternational.com/  
**Architect use:** This document is intended to be a complete specification for rebuilding the site from scratch without revisiting the original.

---

## Executive Summary

`careers.kaplaninternational.com` is a **single-page scrolling microsite** — not a true careers platform. It is a brand/employer-value-proposition page that routes candidates to **five separate external ATS/job-board platforms** depending on region. The main site has no job search, no listing, no filtering. It is purely a content and brand awareness page.

The site was last updated in **2021** (copyright footer), uses **jQuery 1.11.1 + Bootstrap 3**, and is showing its age. It is served via **Cloudflare CDN** with no detectable CMS behind it.

---

## 1. Tech Stack Detection

### Server / Infrastructure

| Layer | Technology |
|---|---|
| CDN / DDoS | **Cloudflare** (cf-ray header, `__cf_bm` cookie, NEL reporting) |
| HTTP Protocol | HTTP/2 |
| Cache | `public, max-age=0, must-revalidate` (effectively no caching) |
| Origin Server | Unknown (obscured by Cloudflare) — likely static file host |
| Detected CMS | **None** — raw static HTML |
| Server header | `server: cloudflare` |
| X-Powered-By | Not present (masked by Cloudflare) |
| Cookies | `__cf_bm` (Cloudflare Bot Management only) |

### HTML/JS Framework

| Layer | Technology |
|---|---|
| HTML Framework | Bootstrap 3.x (grid, navbars, modals, collapse) |
| JavaScript | jQuery 1.11.1 (loaded from Google CDN) |
| Scroll Animations | ScrollReveal.js (classes: `sr-hero-1`, `sr-overview-2`, etc.) |
| Video Background | jQuery Vide plugin (`data-vide-bg="dist/video/ki-career"`) |
| Accordion/Grid | Custom `mgSpace` plugin (career area expand/collapse) |
| IE Polyfills | HTML5 Shiv, Respond.js (IE8), IE10 viewport workaround |

**Age indicator:** jQuery 1.11.1 was released in 2014. Bootstrap 3 was superseded by Bootstrap 4 in 2018. The site has not been meaningfully updated in many years.

### Analytics / Tag Management

| Tool | Details |
|---|---|
| **Google Tag Manager** | Container ID: `GTM-T7R98LC` |
| **Optimizely** | Project ID: `4238035597` — A/B testing on the careers page |
| *No Google Analytics directly* | GA likely fired via GTM |
| *No Hotjar/FullStory/etc.* | Not detected in source |
| *No chat widget* | No Intercom, Zendesk, LiveChat, Drift detected |

### robots.txt / sitemap.xml

Both `/robots.txt` and `/sitemap.xml` return the **same full homepage HTML** — indicating either:
1. No robots.txt or sitemap exists and the server returns the homepage as a catch-all fallback, or
2. Cloudflare is serving the homepage for all unknown paths

**Conclusion:** There is effectively no robots.txt or sitemap for this domain.

---

## 2. Page Inventory

### careers.kaplaninternational.com — Single Page Structure

The entire site is **one HTML file** with anchor-linked sections. There are no sub-pages. The gender-pay-gap route (`/gender-pay-gap`) returns the same HTML — CSS contains body class `.gpg-report` styles suggesting it once existed or is rendered client-side (JS not executing in curl scrape).

#### Section Map (in scroll order)

| Section | ID | Content |
|---|---|---|
| Header/Nav | `.sr-header` | Logo + 4 anchor nav links + "Current opportunities" CTA button |
| Hero | `.hero` | Full-screen video background, H1, single CTA button |
| Overview | `#overview` | Strapline + intro paragraph |
| Business Areas | `#business-area` | 3 image-card tiles |
| Career Areas | `#career-area` | 9 accordion cards with expand-to-fullwidth behaviour |
| Our People | `#ki-staff` | 3 employee testimonial cards |
| Locations | `#ki-location` | Geographic grid (4 continents) |
| Footer | `footer` | Country partner directory + copyright |
| Modal: Location Picker | `.ki-location-popup` | 5 region buttons linking to external ATS systems |
| Modal: Contact | `.ki-contact-popup` | Address, phone, email |

---

## 3. Content Extraction

### Hero Section

- **H1:** "Join our global team"
- **H2:** "Learn more about our education business to see where you could apply your skills"
- **CTA Button:** "Current opportunities" → triggers `.ki-location-popup` modal
- **Video:** `dist/video/ki-career` (mp4/webm/ogv auto-detected by Vide.js)
- **Scroll indicator:** animated arrow → `#overview`

### Overview Section

- **Strapline (H2):** "Start a new and exciting career at Kaplan"
- **Sub-heading:** "We're looking for people to make a difference"
- **Body copy:** "International education is a vibrant sector which can offer interesting career paths to people who want a job that matters. Whether your talent is inspiring students, helping customers, building teams who can achieve great things together or finding new ways of solving old problems, we'd love to hear from you."
- **K logo icon** displayed above text

### Business Areas Section

**H2:** "Business Areas"  
**Intro:** "Kaplan International operates across 4 continents and is divided into three main business areas below"

Three equal-width image cards:

1. **Kaplan International Languages** — English language courses, exam prep, university pathways, junior programmes. 4 continents, 100+ student nationalities. Link: kaplaninternational.com
2. **Professional and Vocational** — Accounting/finance courses (Hong Kong, Singapore), vocational training in Australia via Kaplan Professional Education.
3. **Higher Education** — Foundation programmes (UK, Australia, US), degree programmes (Singapore, Australia, Hong Kong). Kaplan Pathways, KBS, etc.

### Career Areas Section

**H2:** "Career Areas"  
**Intro:** "With roles across almost every discipline from teaching and operations through IT, Finance, Sales and Marketing..."

Nine expandable career tiles — clicking a tile reveals a full-width panel with background image, expanded description, and "Current opportunities" CTA:

| Career Area | Background Image |
|---|---|
| Teaching & Academic | dist/images/area-teaching-academic.jpg |
| Operations | dist/images/area-operations.jpg |
| Technology | dist/images/area-technology.jpg |
| Sales | dist/images/area-sales.jpg |
| Customer Service | dist/images/area-customer-service.jpg |
| Admissions | dist/images/area-admissions.jpg |
| Marketing | dist/images/area-marketing.jpg |
| Finance | dist/images/area-finance.jpg |
| Human Resources | dist/images/area-human-resources.jpg |

Each tile has short teaser copy and an expand button ("Read more / less"). The expanded state shows full-width background image + longer description + CTA button.

### Our People Section

**H2:** "Hear from our staff"  
**Intro:** "Our team come from many walks of life and pursue a wide range of career paths at KI."

Three testimonial cards with circular staff photo, name, role, and multi-paragraph quote:

| Name | Role | Quote Theme |
|---|---|---|
| William | Admissions | International experience, career progression since 2012 |
| Ersilia | Customer Care | Rapid progression: Advisor → Team Manager, travel opportunities |
| Rachel | Teaching | No two days the same, cultural richness, international students |

### Locations Section

**H2:** "Our Locations"

#### North America
- **USA:** New York, Boston, Washington DC, Philadelphia, Chicago, Seattle, Miami, Portland, Berkeley, San Francisco, San Diego, Los Angeles, Huntington Beach, Golden West College
- **Canada:** Toronto, Vancouver

#### Europe
- **UK:** London, Manchester, Cambridge, Liverpool, Torquay, Nottingham, Glasgow, Bristol, Bath, Edinburgh, Oxford, Bournemouth, Salisbury, Brighton, York
- **Ireland:** Dublin
- **France:** Paris

#### Asia
- **China:** Beijing, Changchun, Changsha, Chengdu, Chongqing, Hangzhou, Kunming, Qingdao, Shenyang, Wuhan, Suzhou
- **Hong Kong, Singapore, Taiwan (Taipei), India (New Delhi), Vietnam (Hanoi), South Korea**

#### Oceania
- Australia: Sydney, Melbourne, Brisbane, Adelaide, Perth
- New Zealand: Auckland

### Footer

Massive country directory with a "View more countries" expand button. Lists partner test-centre countries linking to `kaptestglobal.com/kceps/{country}`.

**Copyright:** `© 2021 Aspect International Language Academies Ltd, Reg No: 2162156 / VAT No: 152088224 / Reg office: Palace House, 3 Cathedral Street, London SE1 9DE, United Kingdom`

> ⚠️ The legal entity is **Aspect International Language Academies Ltd** (Kaplan's UK legal entity for international languages division), not "Kaplan International" as branded. Copyright year frozen at 2021.

### Location Picker Modal

On "Current opportunities" click, a modal asks users to "Pick your location":

| Region | ATS Platform | URL |
|---|---|---|
| Jobs in UK, Ireland and Rest of EMEA | **HireHive** | `https://my.hirehive.io/kaplan-international/` |
| Jobs in the USA and Canada | **Workday** | `https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers` |
| Jobs in Australia and New Zealand | **ApplyNow (PageUp)** | `https://kaplan.applynow.net.au/` |
| Jobs in Singapore | Kaplan.com.sg | `https://www.kaplan.com.sg/careers/` |
| Jobs in Hong Kong | Kaplan.com.hk | `https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php` |

### Contact Modal

- **Address:** Recruitment team, Palace House, 3 Cathedral Street, London, SE1 9DE, United Kingdom
- **Phone:** +44 (0)20 8727 3500
- **Email:** kaplanstaff.recruitment@kaplan.com *(obfuscated by Cloudflare email protection)*

---

## 4. ATS Systems — Full Detail

### EMEA/UK — HireHive

**Live URL:** https://kaplan-international.hirehive.com  
**ATS:** HireHive (hirehive.com) — Irish SaaS ATS platform  
**Tech:** ASP.NET MVC 5.2 + .NET 4.0 (revealed in x-aspnetmvc-version header), served via Azure App Service behind Cloudflare  
**Analytics on HireHive:** Microsoft Application Insights (InstrumentationKey: `72942265-ac27-47ac-8a4b-d106f86fc461`, North Europe data centre)  
**Company ID:** 7012 (used in CSS/image URLs: `/Company_7012/`)

**Page title:** "Careers | Jobs at Kaplan International"

**Job listing structure (HireHive card):**
- `hh-job-row` class per job
- `hh-job-row-title` — job title (h3, font-semibold text-xl)
- `hh-job-row-location` — location with map-pin SVG icon
- `hh-job-row-experience` — experience level with briefcase SVG icon
- Cards use Tailwind CSS utility classes

**Job URL pattern:** `/{job-title-slug}-{city}-{6charID}`

**Live jobs (as of scrape date):**

| Job Title | Location |
|---|---|
| Customer Service Advisor | Glasgow |
| Housekeeper | Glasgow |
| Associate Director (UKP) | Delhi |
| Night Facilities Officer | Brighton |
| Student Support Adviser | Remote |
| Digital Learning Product Manager | London |
| Client Services Executive (MENA) | Cairo |
| Academic Manager (Engineering & Computer Science) | London |
| Development Manager | London |
| Hourly Paid English Teacher | Bournemouth |
| Lead Analyst | Remote |
| Housekeeper | Brighton |
| Sessional Tutor (Mathematics & Statistics) | London |
| Hourly Paid English Teacher | Multiple UK/Ireland Locations |

**Additional partner-linked job boards on HireHive page:**
- `https://www.alpadia.com/en/work-for-us` (Alpadia — Kaplan's camp/junior brand)
- `https://www.esl.co.uk/en/about/jobs` (ESL — partner)

**Job Detail Page Structure (HireHive):**

```
<title>{Job Title} | Kaplan International | {City}</title>

Sections on job detail page:
- Job title (H1)
- Location
- Job description (rich HTML — paragraphs, bullet lists)
  - What you'll do / About the role
  - What you'll bring to the role (requirements/skills)
  - What we do (company description)
  - What we offer (benefits)
  - How to apply (instructions + deadline)
  - Application Support (email)
  - Disability Confident Scheme notice
  - Equal opportunities statement

Application form fields:
  - FirstName* (max 100 chars)
  - LastName* (max 100 chars)
  - Location
  - CurrentCompany*
  - CurrentTitle*
  - Email* (validated pattern)
  - Phone
  - CV upload
  - Cover letter
  - Right to work in UK (radio — required)
  - Custom screening questions (varies per role)
```

**Standard benefits package mentioned across roles:**
- 28 days annual leave (pro rata for part time)
- Big discounts on Kaplan courses for you and your family
- 24/7 confidential helpline (counselling and support)
- Company pension contributions
- Enhanced maternity, adoption, shared parental and paternity pay
- Medicash Health Cash Plan
- Hybrid/home working where possible
- Career progression paths

### USA/Canada — Workday

**URL:** https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers  
**Tenant:** `ghc` (Graham Holdings Company — Kaplan's parent group)  
**Career site slug:** `Kaplan_International_Careers`  
**Note:** Workday renders jobs via JavaScript — the 8KB curl response is a shell; actual jobs require browser JS execution.

### Australia/New Zealand — ApplyNow (PageUp)

**URL:** https://kaplan.applynow.net.au/  
**Platform:** ApplyNow — Ruby on Rails app hosted on AWS CloudFront  
**Analytics:** Google Analytics `G-830SMPP9XE`, Pendo (`cdn.pendo.io`)  
**CSP:** Microsoft Application Insights permitted, strict nonce-based CSP

### Singapore — Kaplan.com.sg

**URL:** https://www.kaplan.com.sg/careers/  
**Platform:** Embedded in main Kaplan Singapore website (not a standalone ATS)

### Hong Kong — Kaplan.com.hk

**URL:** https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php  
**Platform:** PHP-based Kaplan HK website

---

## 5. External Dependencies

### JavaScript

| Library | Version | Source | Purpose |
|---|---|---|---|
| jQuery | 1.11.1 | Google CDN | DOM manipulation, event handling |
| Bootstrap JS | 3.x | Local (`dist/js/bootstrap.min.js`) | Modal, collapse, navbar |
| jQuery Easing | 1.3 | Local | Smooth scroll animation easing |
| HTML5 Shiv | — | Local | IE8 HTML5 element support |
| Respond.js | — | Local | IE8 CSS3 media query support |
| IE10 Viewport Fix | — | Local | Surface tablet viewport bug workaround |
| jQuery Vide | — | Bundled in scripts.min.js | Full-screen video background |
| ScrollReveal | — | Bundled in scripts.min.js | On-scroll reveal animations (sr-* classes) |
| mgSpace | — | Bundled in scripts.min.js | Custom accordion/masonry expand-in-row plugin |
| Optimizely | Project 4238035597 | Optimizely CDN | A/B testing |
| Google Tag Manager | GTM-T7R98LC | Google CDN | Tag/analytics container |

### CSS

| Library | Source | Notes |
|---|---|---|
| Bootstrap | Local (`dist/css/bootstrap.min.css`) | Version 3.x |
| Custom styles | Local (`dist/css/style.css`) | 63KB minified — all site styles |

### Fonts

| Font | Source | Weights |
|---|---|---|
| **Lato** | Google Fonts | 100, 300, 400, 700, 900 (latin-ext subset) |
| **KIE Icon Font** | Local (embedded in CSS) | Custom Kaplan icon set (`icon-ki-*` classes) |

### Cookie Banner

| Tool | URL | Notes |
|---|---|---|
| Kaplan Custom Cookie Consent | `https://assetlibs.kaplaninternational.com/_assets/cookie-banner/js/cookieconsent.min.js` | Shared across all Kaplan properties. Configured via `var cookieLanguage = "en"` |

### Favicon

Loaded from a different subdomain: `https://study.kaplaninternational.com/favicon.ico`

### NOT present (notable absences)

- No Hotjar / FullStory / session recording
- No live chat widget (Intercom, Zendesk, LiveChat, Drift)
- No social media embeds (Twitter/LinkedIn widgets)
- No cookie consent popup from a third-party (e.g. OneTrust, CookieYes)
- No structured data / JSON-LD schema markup
- No `<link rel="preconnect">` performance hints

---

## 6. Visual / Design Audit

### Colour Palette

#### Primary Brand Colours

| Role | Hex | Usage |
|---|---|---|
| **Sky Blue / Primary** | `#00a5d9` | Buttons (`btn-skyblue`), links, highlights — main brand colour |
| **Dark Navy** | `#232f84` | Section backgrounds, deep headings |
| **Deeper Navy** | `#121b60` | Darker navy variation |
| **Darkest Navy** | `#1f223c` | Very dark nav/overlay elements |
| **Mid Blue-Purple** | `#414980` | Secondary navy tones |
| **Brand Blue (alt)** | `#007DB3` | GPG report section CTA |
| **Teal Blue** | `#0069aa` | Link underlines (GPG section) |
| **Dark Teal** | `#005773` | Hover states |
| **Bright Cyan** | `#00E4FF` | GPG report accent links |
| **Light Cyan** | `#CBFBFF` | Occasional highlight tint |
| **Deep Purple** | `#1D0C58` | Button hover states (GPG) |

#### Accent Colours

| Role | Hex | Usage |
|---|---|---|
| **Orange** | `#f47b20` | Accent (appears in icon/graphic contexts) |
| **Red / Coral** | `#ed174f` | Alert/highlight accent |
| **Dark Red** | `#930b2f` | Deeper red variant |
| **Lime Green** | `#c1d82f` | Occasional accent |

#### Neutral / Background

| Role | Hex | Usage |
|---|---|---|
| White | `#fff` / `#FFFFFF` | Dominant background |
| Near Black | `#02030a` | Darkest backgrounds |
| Dark Grey | `#2F353E` | Section dark backgrounds |
| Body Grey | `#202020` | Body text |
| Mid Grey Dark | `#404040` | Subheading text, GPG hero |
| Mid Grey | `#606060` | Secondary text |
| Muted Grey | `#747679` | GPG section background |
| Light Grey | `#f0f0f0` | Section backgrounds, dividers |
| Border Grey | `#eee`, `#ccc`, `#ddd` | Borders, rules |

### Typography

- **Primary typeface:** Lato (Google Fonts)
- **Weights in use:** 100 (Thin), 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- **Fallback stack:** `'Lato', 'Helvetica', 'Arial', sans-serif`
- **Icon font:** `'kie'` — custom Kaplan icon font (icons used: `icon-ki-close`, `icon-ki-cta-location`, `icon-ki-faci-phone`, `icon-ki-email`, `icon-ki-logo`)
- **Font smoothing:** antialiased (webkit + moz)
- **Text size scale:** 11px → 12px → 13px → 14px → 15px → 16px → 18px → 20px → 24px

### Layout Structure

**Framework:** Bootstrap 3 (12-column grid, `.container` max ~1170px)

**Section pattern:**
```
Full-width section
  └── .container (centred, max-width)
      └── .row
          └── .col-md-* (columns)
```

**Custom flex utilities:** `.flex-col-three`, `.flex-col-two`, `.equal-parent` / `.equal-child-item` (equal-height columns)

**Responsive breakpoints:**
- `< 568px` — mobile (xs): single column
- `568px+` — 2 columns (sm)
- `768px+` — Bootstrap md breakpoints kick in
- `992px+` — Bootstrap lg
- `1200px+` — xl

### Notable UI Patterns

#### 1. Full-screen Video Hero
- Video background via Vide.js (`data-vide-bg` attribute)
- Curtain overlay div fades out on video load
- Animated scroll-down arrow indicator
- Text centred on video with CTA

#### 2. Career Areas — Accordion with Row Expansion (mgSpace)
- 9 career tiles displayed in a masonry/CSS grid (1/2/3 columns responsive)
- Clicking a tile expands a full-viewport-width panel **below the row the item is in**
- The expanded panel shows: full-bleed background image (left half) + content text block (right half)
- Opening a second tile closes the first
- "Read more / less" toggle button on each tile

#### 3. Business Area Cards
- 3-column equal-height card layout
- Image header with title text overlaid centred
- Description text beneath

#### 4. Staff Testimonials
- 3-column grid
- Circular staff photo
- Name + role label
- Multi-paragraph quote text

#### 5. Location Grid
- 4 continent columns (responsive: stacks on mobile)
- Each column has: continent label, animated map-pin SVG, country boxes, city labels
- Expandable "View more countries" section below

#### 6. Location Picker Modal
- Bootstrap modal (`.ki-location-popup`)
- 5 equal-height flex tiles
- Each tile: regional map background image (CSS bg, classes: `emea`, `n-america`, `oceania`, `singapore`, `hongkong`) + text label
- Tapping any tile opens that region's ATS in a new tab

#### 7. Header / Navigation
- Fixed/sticky header that slides in on scroll (ScrollReveal class `sr-header`)
- Logo: KI SVG wordmark + "Careers" text label
- Hamburger collapse on mobile
- Right-aligned nav with ghost anchor links + filled sky-blue CTA button

### Colour Application Pattern

- **Light sections** (overview, locations): white background, dark text
- **Dark sections** (staff/Our People): dark navy/grey background image, white text
- **Business areas**: image tiles with dark overlay + white centred text
- **Career items**: dark background tiles with white text + white ghost buttons
- Buttons: `btn-skyblue` = `#00a5d9` filled (primary CTAs), `btn-white-ghost` = transparent white border (secondary/in-dark-sections)

---

## 7. Structural Observations for Rebuild

### What this site IS
A **brand microsite** (employer value proposition page) with zero dynamic functionality. Think of it as a one-page brochure with a jobs modal that points elsewhere.

### What it is NOT
- Not a job listing platform
- Not a CMS-driven site
- Not connected to any ATS directly (no API calls, no iFrames on the main page)

### Key Architectural Decisions to Note

1. **All "Apply" CTAs open the same modal** — the location picker. There is no per-job-category routing. The user always gets the same 5-region choice regardless of which career area they clicked.

2. **The site is essentially unmaintained** — 2021 copyright, jQuery 1.x, no sitemap, Optimizely still loading. It is a legacy static file.

3. **Job listings live on HireHive** (for UK/EMEA) — this is the primary active platform. HireHive uses ASP.NET MVC + Tailwind CSS for the job board UI.

4. **The gender pay gap report** (`/gender-pay-gap`) exists as a body class in the CSS with full styling, but curl returns the homepage HTML — it likely renders client-side via JavaScript routing or is accessible via a different mechanism.

5. **No pagination, no filters, no search** — the main site has none. HireHive has a simple flat list (14 jobs at time of scrape) with no filtering either.

6. **Footer country list** is an enormous static HTML list of country links to `kaptestglobal.com` — these are KCEPS (Kaplan Certified English Proficiency Schools) partner pages, not internal Kaplan pages.

### Assets to Source/Recreate

| Asset | Path | Status |
|---|---|---|
| Hero video | `dist/video/ki-career` (.mp4/.webm/.ogv) | Must source/recreate |
| KI Logo SVG | `dist/images/ki-logo.svg` | Must source |
| K Symbol SVG | `dist/images/k-logo.svg` | Must source |
| KIE Icon Font | `dist/css/style.css` embedded | Must source or recreate icons |
| Business area photos | `dist/images/business-*.jpg` (3 images) | Must source |
| Career area photos | `dist/images/area-*.jpg` (9 images) | Must source |
| Staff portraits | `dist/images/ki-staff-*.jpg` (3 images) | Must source |
| Location map backgrounds | CSS background images in modals | Must source or recreate |
| Gender pay gap image | `dist/images/gender-pay-gap.jpg` | Must source |

---

## 8. File Inventory (Raw Saved)

```
kaplan-careers/_scrape/
├── robots.txt                          (returns homepage HTML — no real robots.txt)
├── sitemap.xml                         (returns homepage HTML — no sitemap)
├── report.md                           (this file)
├── raw/
│   ├── index.html                      (72,285 bytes — main site homepage)
│   ├── style.css                       (63,226 bytes — all custom CSS)
│   ├── gender-pay-gap.html             (72,285 bytes — same as homepage)
│   ├── hirehive-jobs.html              (53,260 bytes — HireHive job listing page)
│   ├── workday-jobs.html               (8,072 bytes — Workday JS shell)
│   ├── job-customer-service-glasgow.html    (78,099 bytes — HireHive job detail)
│   ├── job-digital-learning-london.html     (81,308 bytes — HireHive job detail)
│   └── job-academic-manager-london.html     (83,934 bytes — HireHive job detail)
└── extracted/
    └── summary.json                    (full structured data extract)
```

---

## 9. Recommendations for Rebuild

Based on this recon, a rebuild should consider:

### Architecture
- **Astro or Next.js static site** for the main brand page (no CMS needed, fast build)
- **Integrate HireHive API** for EMEA job listings (or embed HireHive widget) rather than separate modal redirect
- Consider **unifying all regions** into a single job search with region filters
- Add proper **sitemap.xml** and **robots.txt**

### Tech Modernisation
- Replace Bootstrap 3 → Tailwind CSS or a modern design system
- Replace jQuery 1.x → Vanilla JS or React/Vue
- Replace Vide.js video background → native HTML5 `<video>` with `autoplay muted loop playsinline`
- Replace ScrollReveal → CSS `@keyframes` + Intersection Observer API
- Add Google Fonts `<link rel="preconnect">` for performance

### Content/UX
- Update copyright year from 2021 → current
- Fix the location modal UX — it's an extra click every time; surface regional jobs directly
- Add structured data (`JobPosting` schema) for SEO
- Replace the giant footer country list with a searchable component
- Add a proper `/gender-pay-gap` page as a real route

### Legal Entity
- Footer still shows "Aspect International Language Academies Ltd" — verify this is still correct legal entity for the site

---

## 10. Integration Config Reference

All configurable values live in `kaplan-careers/.env.example`. Every ATS URL, analytics ID, cookie banner URL and recruitment contact detail is parameterised there so a rebuild can swap environments without touching source code. Key variables:

| Variable | Value | Source |
|---|---|---|
| `PUBLIC_GTM_CONTAINER_ID` | `GTM-T7R98LC` | `<head>` GTM snippet |
| `PUBLIC_OPTIMIZELY_PROJECT_ID` | `4238035597` | `<script src="//cdn.optimizely.com/js/...">` |
| `PUBLIC_COOKIE_BANNER_URL` | `https://assetlibs.kaplaninternational.com/_assets/cookie-banner/js/cookieconsent.min.js` | `<script>` at body end |
| `PUBLIC_ATS_EMEA_URL` | `https://my.hirehive.io/kaplan-international/` | Location picker modal |
| `PUBLIC_ATS_EMEA_RESOLVED_URL` | `https://kaplan-international.hirehive.com` | After 301 redirect |
| `PUBLIC_ATS_EMEA_COMPANY_ID` | `7012` | HireHive asset paths |
| `PUBLIC_ATS_USA_URL` | `https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers` | Location picker modal |
| `PUBLIC_ATS_USA_TENANT` | `ghc` | Workday tenant (Graham Holdings Co.) |
| `PUBLIC_ATS_ANZ_URL` | `https://kaplan.applynow.net.au/` | Location picker modal |
| `PUBLIC_ATS_SG_URL` | `https://www.kaplan.com.sg/careers/` | Location picker modal |
| `PUBLIC_ATS_HK_URL` | `https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php` | Location picker modal |
| `PUBLIC_RECRUITMENT_EMAIL` | `kaplanstaff.recruitment@kaplan.com` | Contact modal |
| `PUBLIC_RECRUITMENT_PHONE` | `+44 (0)20 8727 3500` | Contact modal |
| `PUBLIC_GOOGLE_FONTS_URL` | `https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&subset=latin-ext` | `<link>` in CSS |
| `PUBLIC_FAVICON_URL` | `https://study.kaplaninternational.com/favicon.ico` | `<link rel="icon">` |
| `PUBLIC_HERO_VIDEO_PATH` | `dist/video/ki-career` | `data-vide-bg` on hero div |
| `PUBLIC_OG_IMAGE` | `https://careers.kaplaninternational.com/dist/images/business-kaplan-int-english.jpg` | OG meta tag |
| `PUBLIC_LEGAL_ENTITY` | `Aspect International Language Academies Ltd` | Footer copyright |
| `PUBLIC_LEGAL_REG_NO` | `2162156` | Footer copyright |
| `PUBLIC_LEGAL_VAT_NO` | `152088224` | Footer copyright |

The `.env.example` file also includes commented-out feature flags (`ENABLE_GTM`, `ENABLE_OPTIMIZELY`, `ENABLE_HIREHIVE_EMBED`, etc.) and placeholder variables for ATS API keys that would be needed if job listings are embedded directly rather than linked out.
