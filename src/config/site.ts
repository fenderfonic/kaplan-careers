/**
 * site.ts — Kaplan International Careers
 *
 * SITE object — convenience bag consumed by BaseLayout, index.astro,
 * Footer.astro, ContactModal.astro.
 */
export const SITE = {
  // SEO / meta
  title: 'Join our Global Team | Kaplan International',
  description:
    'Join our Global Team. Learn more about our education business to see where you could apply your skills | Kaplan International',
  url: 'https://careers.kaplaninternational.com',

  // Contact modal fields (ContactModal.astro)
  contactAddress: 'Recruitment team, Palace House, 3 Cathedral Street, London SE1 9DE, United Kingdom',
  contactPhone: '+44 (0)20 8727 3500',
  contactEmail: 'kaplanstaff.recruitment@kaplan.com',

  // Footer legal fields (Footer.astro)
  legalEntity: 'Aspect International Language Academies Ltd',
  legalRegNo: '2162156',
  legalVatNo: '152088224',
  legalAddress: 'Palace House, 3 Cathedral Street, London SE1 9DE, United Kingdom',
} as const;

/**
 * REGION_ATS — shape consumed by LocationModal.astro.
 * Provides icon emoji, label, desc and url for the 5 ATS regions.
 * Keep in sync with ATS_REGIONS below (same URLs, same order).
 */
export const REGION_ATS = [
  {
    label: 'UK, Ireland and Rest of EMEA',
    desc: 'HireHive — Jobs in UK, Ireland and Europe, Middle East & Africa',
    icon: '🇬🇧',
    url: 'https://my.hirehive.io/kaplan-international/',
  },
  {
    label: 'USA and Canada',
    desc: 'Workday — Jobs in the USA and Canada',
    icon: '🇺🇸',
    url: 'https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers',
  },
  {
    label: 'Australia and New Zealand',
    desc: 'ApplyNow — Jobs in Australia and New Zealand',
    icon: '🇦🇺',
    url: 'https://kaplan.applynow.net.au/',
  },
  {
    label: 'Singapore',
    desc: 'Kaplan Singapore — Jobs in Singapore',
    icon: '🇸🇬',
    url: 'https://www.kaplan.com.sg/careers/',
  },
  {
    label: 'Hong Kong',
    desc: 'Kaplan Hong Kong — Jobs in Hong Kong',
    icon: '🇭🇰',
    url: 'https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php',
  },
] as const;

/**
 * All visible text content extracted from careers.kaplaninternational.com
 * Source of truth: kaplan-careers/_scrape/raw/index.html
 *
 * Rules:
 *   - No functions or logic — declarations only
 *   - No <img> src paths — those live in assets.ts (referenced via imageKey)
 *   - expandedHtml strings preserve the exact HTML from the accordion panels
 */

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_BUSINESS_AREAS = 'Business Areas';
export const NAV_CAREER_AREAS = 'Career Areas';
export const NAV_OUR_PEOPLE = 'Our People';
export const NAV_LOCATIONS = 'Locations';
export const NAV_CTA = 'Current opportunities';

// ─── SEO / Meta ────────────────────────────────────────────────────────────────

export const META_TITLE = 'Join our Global Team | Kaplan International';
export const META_DESCRIPTION =
  'Join our Global Team. Learn more about our education business to see where you could apply your skills | Kaplan International';
export const OG_TITLE = 'Join our Global Team | Kaplan International';
export const OG_DESCRIPTION = `We're Looking for People to Make a Difference. Start a New and exciting Career at Kaplan`;

// ─── Hero ──────────────────────────────────────────────────────────────────────

export const HERO_H1 = 'Join our global team';
export const HERO_H2 =
  'Learn more about our education business to see where you could apply your skills';
export const HERO_CTA = 'Current opportunities';

// ─── Overview ──────────────────────────────────────────────────────────────────

/**
 * The strapline displayed above the main heading (smaller text, uppercase style).
 */
export const OVERVIEW_SUB = 'Start a new and exciting career at Kaplan';

/**
 * The large H2 heading in the overview section.
 */
export const OVERVIEW_HEADING = `We're looking for people to make a difference`;

/**
 * Body copy below the overview heading.
 */
export const OVERVIEW_BODY =
  `International education is a vibrant sector which can offer interesting career paths to people who want a job that matters. ` +
  `Whether your talent is inspiring students, helping customers, building teams who can achieve great things together or finding new ways of solving old problems, we'd love to hear from you.`;

// ─── Business Areas section ─────────────────────────────────────────────────────

export const BUSINESS_AREAS_HEADING = 'Business Areas';
export const BUSINESS_AREAS_BODY =
  'Kaplan International operates across 4 continents and is divided into three main business areas below';

export const BUSINESS_AREAS = [
  {
    title: 'Kaplan International Languages',
    imageKey: 'languages',
    descriptionHtml: `<p><a href="//www.kaplaninternational.com" target="_blank">Kaplan International Languages</a> operates accredited schools offering English language courses, exam preparation, university pathways and junior programmes in highly desirable study locations across 4 continents. Through the latest teaching methods, learning technology and our own unique curriculum, students from more than 100 countries achieve their study goals whilst enjoying a culturally enriching study experience.</p>`,
    href: '//www.kaplaninternational.com',
  },
  {
    title: 'Professional and Vocational',
    imageKey: 'professionals',
    descriptionHtml: `<p>Kaplan International Professional &amp; Vocational offers professional courses in accounting and finance to individual and institutions throughout <a href="//www.kaplanfinancial.com.hk/kf/index.php" target="_blank">Hong Kong</a> and <a href="//www.kaplan.com.sg/professional" target="_blank">Singapore</a> as well as corporate training and workforce education in Australia covering vocational areas such as customer service, finance and compliance through <a href="//www.kaplanprofessional.edu.au/" target="_blank">Kaplan Professional Education</a>.</p>`,
    href: null,
  },
  {
    title: 'Higher Education',
    imageKey: 'higherEd',
    descriptionHtml: `<p>Kaplan International Higher Education offers university foundation programmes in the <a href="//www.kaplanpathways.com" target="_blank">UK</a>, Australia (<a href="//www.murdochinstitute.wa.edu.au/" target="_blank">Perth</a> and <a href="//www.bradford.adelaide.edu.au/" target="_blank">Adelaide</a>) and the <a href="//www.global-pathways.com/" target="_blank">US</a>, and degree programmes in <a href="//www.kaplan.com.sg/" target="_blank">Singapore</a>, <a href="//www.kbs.edu.au/" target="_blank">Australia</a> and <a href="//www.kaplan.com.hk/" target="_blank">Hong Kong</a>. Degrees span a range of career-related disciplines from accounting and business through to hospitality, IT and media.</p>`,
    href: null,
  },
] as const;

// ─── Career Areas ──────────────────────────────────────────────────────────────

export const CAREER_AREAS_HEADING = 'Career Areas';
export const CAREER_AREAS_BODY =
  'With roles across almost every discipline from teaching and operations through IT, Finance, Sales and Marketing, Kaplan International employs individuals with a wide range of professional backgrounds and are always on the lookout for talented people across the professional spectrum.';

/**
 * Each entry maps to one career area tile + its full expanded panel.
 *
 * - key        : stable identifier used to look up the image in assets.ts
 * - title      : display title (rendered as <h3> in both tile and panel)
 * - imageKey   : key path into ASSETS.careerAreas
 * - intro      : plain-text preview shown in the collapsed tile
 * - expandedHtml : full inner HTML of .area-content as it appears in the source
 */
export const CAREER_AREAS = [
  {
    key: 'teaching',
    title: 'Teaching & Academic',
    imageKey: 'teaching',
    intro: `When asked about their experience of studying at Kaplan International, it's so often the great teachers that our students remember - the teacher who spent extra time after class explaining a difficult concept, the teacher whose lessons stimulated their interest in learning or the teacher who offered advice when they were feeling homesick. Our teachers all share a passion for bringing learning alive and seeing their students develop and grow.`,
    expandedHtml: `<h3 class="title">Teaching &amp; Academic</h3>
<p class="desc">
  When asked about their experience of studying at Kaplan International, it's so often the great teachers that our students remember - the teacher who spent extra time after class explaining a difficult concept, the teacher whose lessons stimulated their interest in learning or the teacher who offered advice when they were feeling homesick. Our teachers all share a passion for bringing learning alive and seeing their students develop and grow.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'operations',
    title: 'Operations',
    imageKey: 'operations',
    intro: `Our schools and colleges around the world welcome students from over 100 countries. So whether it's helping on the student services desk with orientation, advising and assisting with accommodation questions, supporting the academic teams with scheduling and timetabling or helping students to enrol for the right exams, our teams get involved in all aspects of the student experience. The one thing that all our operations staff share is a genuine interest in helping students and a desire to deliver an exceptional customer service experience.`,
    expandedHtml: `<h3 class="title">Operations</h3>
<p class="desc">
  Our schools and colleges around the world welcome students from over 100 countries. So whether it's helping on the student services desk with orientation, advising and assisting with accommodation questions, supporting the academic teams with scheduling and timetabling or helping students to enrol for the right exams, our teams get involved in all aspects of the student experience. The one thing that all our operations staff share is a genuine interest in helping students and a desire to deliver an exceptional customer service experience.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'technology',
    title: 'Technology',
    imageKey: 'technology',
    intro: `Technology is at the heart of everything we do – from our global website in more than 15 languages and booking engines through to our operations management system and student portal delivering information to our customers around the world. Whether it's developing new systems to enhance our business or supporting our users across the different areas of the business, Kaplan International offers a stimulating work environment for a wide range of technology professionals.`,
    expandedHtml: `<h3 class="title">Technology</h3>
<p class="desc">
  Technology is at the heart of everything we do – from our global website in more than 15 languages and booking engines through to our operations management system and student portal delivering information to our customers around the world. Whether it's developing new systems to enhance our business or supporting our users across the different areas of the business, Kaplan International offers a stimulating work environment for a wide range of technology professionals.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'sales',
    title: 'Sales',
    imageKey: 'sales',
    intro: `We work with B2B customers including agents and corporates as well as individual travellers and students wanting to enrol on our programmes. Our salespeople are responsible for maintaining and growing existing markets and opening up new ones in places we may not have worked before. Salespeople who thrive in our business are those who really understand their customers, are endlessly curious about their markets and are alert to the new opportunities as or even before they emerge.`,
    expandedHtml: `<h3 class="title">Sales</h3>
<p class="desc">
  We work with B2B customers including agents and corporates as well as individual travellers and students wanting to enrol on our programmes. Our salespeople are responsible for maintaining and growing existing markets and opening up new ones in places we may not have worked before. Salespeople who thrive in our business are those who really understand their customers, are endlessly curious about their markets and are alert to the new opportunities as or even before they emerge.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'customerService',
    title: 'Customer Service',
    imageKey: 'customerService',
    intro: `Whether it's advising a German student on where they can learn English and enjoy the best beach life or counselling a Chinese high school student on the most suitable UK engineering degree programme , the quality of our customer service particularly before students enrol and travel is a cornerstone of our business. We employ multilingual staff with great interpersonal skills and a passion for helping people , ensuring high levels of loyalty from our B2B and B2C customers around the world.`,
    expandedHtml: `<h3 class="title">Customer Service</h3>
<p class="desc">
  Whether it's advising a German student on where they can learn English and enjoy the best beach life or counselling a Chinese high school student on the most suitable UK engineering degree programme , the quality of our customer service particularly before students enrol and travel is a cornerstone of our business. We employ multilingual staff with great interpersonal skills and a passion for helping people , ensuring high levels of loyalty from our B2B and B2C customers around the world.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'admissions',
    title: 'Admissions',
    imageKey: 'admissions',
    intro: `Admissions staff provide key support to students before and after enrolment onto our academic programmes. As well as being good at dealing with people, the role requires in-depth knowledge of our courses and locations and an awareness of immigration requirements. The admissions process can take a matter of months so there's a great opportunity to develop a strong rapport with our customers and become a key sounding board as they prepare for their study abroad journey.`,
    expandedHtml: `<h3 class="title">Admissions</h3>
<p class="desc">
  Admissions staff provide key support to students before and after enrolment onto our academic programmes. As well as being good at dealing with people, the role requires in-depth knowledge of our courses and locations and an awareness of immigration requirements. The admissions process can take a matter of months so there's a great opportunity to develop a strong rapport with our customers and become a key sounding board as they prepare for their study abroad journey.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'marketing',
    title: 'Marketing',
    imageKey: 'marketing',
    intro: `As a global marketer, where better to enjoy a career than at the world's largest global education provider which promotes its products and services in more than 100 countries? With a portfolio of products which are changing and evolving to meet the needs of our customers and a growing range of channels through which to communicate with our global audience, Kaplan International can provide a stimulating place to forge a career in international marketing.`,
    expandedHtml: `<h3 class="title">Marketing</h3>
<p class="desc">
  As a global marketer, where better to enjoy a career than at the world's largest global education provider which promotes its products and services in more than 100 countries? With a portfolio of products which are changing and evolving to meet the needs of our customers and a growing range of channels through which to communicate with our global audience, Kaplan International can provide a stimulating place to forge a career in international marketing.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'finance',
    title: 'Finance',
    imageKey: 'finance',
    intro: `As a multinational business operating across 4 continents, doing business in different currencies, we can offer excellent opportunities for a stimulating and varied career in Finance – whether it's working with our partners in the area of credit control, supporting the accounting for our schools and colleges or being part of our global financial control, planning and analysis team. Our accounting team is made up of staff across the experience and qualification spectrum and reflects the international mix found in other parts of the company.`,
    expandedHtml: `<h3 class="title">Finance</h3>
<p class="desc">
  As a multinational business operating across 4 continents, doing business in different currencies, we can offer excellent opportunities for a stimulating and varied career in Finance – whether it's working with our partners in the area of credit control, supporting the accounting for our schools and colleges or being part of our global financial control, planning and analysis team. Our accounting team is made up of staff across the experience and qualification spectrum and reflects the international mix found in other parts of the company.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
  {
    key: 'humanResources',
    title: 'Human Resources',
    imageKey: 'humanResources',
    intro: `As a company which is growing and changing, Kaplan International is a stimulating environment for HR professionals – whether it's facilitating training , supporting on recruitment and selection, providing information and advice on benefits or assisting a line manager with staff development or offering advice to employees on career development or ensuring that HR policies are applied appropriately across the business.`,
    expandedHtml: `<h3 class="title">Human Resources</h3>
<p class="desc">
  Kaplan International is a stimulating environment for HR professionals – whether it's facilitating training, supporting on recruitment and selection, assisting a line manager with staff development or offering advice to employees on career development. HR professionals who enjoy working at KI are those who blend solid knowledge of HR practice with a practical, commercial approach and a strong understanding of the business.
</p>
<p>
  <a href="#" target="_blank" class="btn btn-md btn-skyblue" data-toggle="modal" data-target=".ki-location-popup">Current opportunities</a>
</p>`,
  },
] as const;

// ─── Our People / Testimonials ─────────────────────────────────────────────────

export const OUR_PEOPLE_HEADING = 'Hear from our staff';
export const OUR_PEOPLE_BODY =
  'Our team come from many walks of life and pursue a wide range of career paths at KI. Find out what some of our colleagues really enjoy about working at Kaplan International.';

export const TESTIMONIALS = [
  {
    name: 'William',
    role: 'Admissions',
    imageKey: 'william',
    quote: `From the people you work with to the students you help in gaining entry to higher education in the UK, Kaplan International Colleges is truly the international experience. The department I work in is full of lively and interesting characters with a real sense of being one team with one goal. What is more is that the company recognises your hard work and willingness to learn. This certainly was the case for me as I have made steady progress since joining as an Admissions Advisor back in 2012.`,
  },
  {
    name: 'Ersilia',
    role: 'Customer Care',
    imageKey: 'ersilia',
    quote: `Kaplan has given me the opportunity to grow and improve. I started as a Customer Care Advisor for direct students in Italy. One year later I was promoted to Client Relationship Executive. I progressed further to the role of Customer Care Team Manager for Italy and Spain, then for Western Europe and now ESL. My current role has involved building a strong relationship with a new partner with several offices all around Europe. This has meant more travelling, which has been such an adventure! I have found it very stimulating, and it has been great meeting lots of new colleagues. Waking up and being happy to go to work is priceless and this is what I feel working for Kaplan.`,
  },
  {
    name: 'Rachel',
    role: 'Teaching',
    imageKey: 'rachel',
    quote: `Everyday at Kaplan is different. Our school is an international hub of activity where everyone can feel free to be themselves and have the chance to learn about different cultures - and have fun sharing it! Everyday presents new challenges and successes. Since starting here two years ago, I have never had two days that are the same. A big part of what makes my job and the school what it is is our students and all the different, colourful and interesting things they bring.`,
  },
] as const;

// ─── Locations ─────────────────────────────────────────────────────────────────

export const LOCATIONS_HEADING = 'Our Locations';

/**
 * Regions and their countries/cities as displayed in the #ki-location section.
 * City lists are taken verbatim from the raw HTML (including layout duplicates
 * removed — Perth appeared twice due to two-column markup).
 */
export const LOCATIONS = {
  regions: [
    {
      name: 'North America',
      countries: [
        {
          name: 'United States',
          cities: [
            'New York',
            'Boston',
            'Washington, DC',
            'Philadelphia',
            'Chicago',
            'Seattle',
            'Miami',
            'Portland',
            'Berkeley',
            'San Francisco',
            'San Diego',
            'Los Angeles',
            'Huntington Beach',
            'Golden West College',
          ],
        },
        {
          name: 'Canada',
          cities: ['Toronto', 'Vancouver'],
        },
      ],
    },
    {
      name: 'Europe',
      countries: [
        {
          name: 'United Kingdom',
          cities: [
            'London',
            'Manchester',
            'Cambridge',
            'Liverpool',
            'Torquay',
            'Nottingham',
            'Glasgow',
            'Bristol',
            'Bath',
            'Edinburgh',
            'Oxford',
            'Bournemouth',
            'Salisbury',
            'Brighton',
            'York',
          ],
        },
        {
          name: 'Ireland',
          cities: ['Dublin'],
        },
        {
          name: 'France',
          cities: ['Paris'],
        },
      ],
    },
    {
      name: 'Asia',
      countries: [
        {
          name: 'China',
          cities: [
            'Beijing',
            'Changchun',
            'Changsha',
            'Chengdu',
            'Chongqing',
            'Hangzhou',
            'Kunming',
            'Qingdao',
            'Shenyan',
            'Wuhang',
            'Suzhou',
          ],
        },
        {
          name: 'Hong Kong',
          cities: [],
        },
        {
          name: 'Singapore',
          cities: [],
        },
        {
          name: 'TAIWAN',
          cities: ['Taipei'],
        },
        {
          name: 'India',
          cities: ['New Delhi'],
        },
        {
          name: 'Vietnam',
          cities: ['Hanoi'],
        },
        {
          name: 'S.Korea',
          cities: ['Seoul'],
        },
        {
          name: 'UAE',
          cities: ['Abu Dhabi'],
        },
        {
          name: 'Saudi Arabia',
          cities: ['Riyadh'],
        },
        {
          name: 'Thailand',
          cities: ['Bangkok'],
        },
        {
          name: 'Japan',
          cities: ['Tokyo'],
        },
      ],
    },
    {
      name: 'South America',
      countries: [
        {
          name: 'Colombia',
          cities: ['Bogota'],
        },
        {
          name: 'Venezuela',
          cities: ['Caracas'],
        },
      ],
    },
    {
      name: 'Africa',
      countries: [
        {
          name: 'Nigeria',
          cities: ['Lagos'],
        },
      ],
    },
    {
      name: 'Oceania',
      countries: [
        {
          name: 'Australia',
          cities: ['Melbourne', 'Sydney', 'Perth', 'Adelaide', 'Brisbane'],
        },
        {
          name: 'New Zealand',
          cities: ['Auckland'],
        },
      ],
    },
  ],
} as const;

// ─── ATS Regions (location modal links) ────────────────────────────────────────

/**
 * Five ATS regions as displayed in the ki-location-popup modal.
 * URLs sourced from the raw HTML and confirmed against .env.example.
 */
export const ATS_REGIONS = [
  {
    name: 'Jobs in UK, Ireland and Rest of EMEA',
    url: 'https://my.hirehive.io/kaplan-international/',
  },
  {
    name: 'Jobs in the USA and Canada',
    url: 'https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers',
  },
  {
    name: 'Jobs in Australia and New Zealand',
    url: 'https://kaplan.applynow.net.au/',
  },
  {
    name: 'Jobs in Singapore',
    url: 'https://www.kaplan.com.sg/careers/',
  },
  {
    name: 'Jobs in Hong Kong',
    url: 'https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php',
  },
] as const;

// ─── Footer ────────────────────────────────────────────────────────────────────

/** Column region headings in the footer country directory */
export const FOOTER_REGION_AMERICAS = 'Americas';
export const FOOTER_REGION_EMEA = 'Europe, Middle East & Africa';
export const FOOTER_REGION_ASIA = 'Asia';

/** Sub-headings within footer columns */
export const FOOTER_COUNTRIES_HEADING = 'View more countries';

export const COPYRIGHT_TEXT =
  '© 2021 Aspect International Language Academies Ltd, Reg No: 2162156 / VAT No: 152088224 / Reg office: Palace House, 3 Cathedral Street, London SE1 9DE, United Kingdom';

/** Extra links row (below the footer country directory) */
export const EXTRA_LINKS = [
  { label: 'Kaplan Inc.', href: '//kaplan.com/' },
  {
    label: 'Submit your CV',
    href: '//my.hirehive.io/kaplan-international/jobs/22485/speculative-job-application-anywhere',
  },
  { label: 'Privacy Notice', href: '/kaplan-international-privacy-notice.html' },
  { label: 'Gender Pay Gap Report', href: '/kie-gender-pay-gap-report' },
  { label: 'Contact Us', href: '#', modalTarget: '.ki-contact-popup' },
] as const;

/** Social links */
export const SOCIAL_LINKS = [
  { platform: 'facebook', href: '//www.facebook.com/KIEGlobal' },
  { platform: 'twitter', href: '//twitter.com/kaplanintl' },
  { platform: 'linkedin', href: '//www.linkedin.com/company/kaplaninternationalenglish' },
] as const;

// ─── Modals ────────────────────────────────────────────────────────────────────

export const MODAL_LOCATION_TITLE = 'Pick your location';
export const MODAL_CONTACT_TITLE = 'Contact us';

/** Contact modal — address block (line-by-line as displayed in HTML) */
export const CONTACT_ADDRESS_LINES = [
  'Recruitment team',
  'Palace House',
  '3 Cathedral Street',
  'London',
  'SE1 9DE',
  'United Kingdom',
] as const;

export const CONTACT_PHONE = '+44 (0)20 8727 3500';

/**
 * Recruitment email — decoded from Cloudflare obfuscation in source HTML.
 * Confirmed via .env.example (PUBLIC_RECRUITMENT_EMAIL).
 */
export const CONTACT_EMAIL = 'kaplanstaff.recruitment@kaplan.com';
