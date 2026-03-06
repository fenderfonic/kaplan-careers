// src/config/site.ts — Kaplan International Careers site configuration
// Reads from PUBLIC_* env vars (Astro exposes these at build time via import.meta.env)

const e = (key: string, fallback = '') =>
  (import.meta.env[key] as string | undefined) ?? fallback;

export const SITE = {
  name:         e('PUBLIC_SITE_NAME', 'Kaplan International Careers'),
  url:          e('PUBLIC_SITE_URL', 'https://careers.kaplaninternational.com'),
  title:        e('PUBLIC_SITE_TITLE', 'Join our Global Team | Kaplan International'),
  description:  e('PUBLIC_META_DESCRIPTION', 'Join our Global Team. Learn more about our education business to see where you could apply your skills | Kaplan International'),
  ogTitle:      e('PUBLIC_OG_TITLE', 'Join our Global Team | Kaplan International'),
  ogDescription:e('PUBLIC_OG_DESCRIPTION', "We're Looking for People to Make a Difference. Start a New and exciting Career at Kaplan"),
  ogImage:      e('PUBLIC_OG_IMAGE', 'https://careers.kaplaninternational.com/images/business-languages.jpg'),
  canonical:    e('PUBLIC_CANONICAL_URL', 'https://careers.kaplaninternational.com'),

  // Analytics
  gtmId:        e('PUBLIC_GTM_CONTAINER_ID', 'GTM-T7R98LC'),

  // Legal
  legalEntity:  e('PUBLIC_LEGAL_ENTITY', 'Aspect International Language Academies Ltd'),
  legalRegNo:   e('PUBLIC_LEGAL_REG_NO', '2162156'),
  legalVatNo:   e('PUBLIC_LEGAL_VAT_NO', '152088224'),
  legalAddress: e('PUBLIC_LEGAL_ADDRESS', 'Palace House, 3 Cathedral Street, London SE1 9DE, United Kingdom'),

  // Contact / Recruitment
  contactEmail:   e('PUBLIC_RECRUITMENT_EMAIL', 'kaplanstaff.recruitment@kaplan.com'),
  contactPhone:   e('PUBLIC_RECRUITMENT_PHONE', '+44 (0)20 8727 3500'),
  contactAddress: [
    e('PUBLIC_RECRUITMENT_ADDRESS_LINE1', 'Recruitment team'),
    e('PUBLIC_RECRUITMENT_ADDRESS_LINE2', 'Palace House'),
    e('PUBLIC_RECRUITMENT_ADDRESS_LINE3', '3 Cathedral Street'),
    e('PUBLIC_RECRUITMENT_ADDRESS_CITY', 'London'),
    e('PUBLIC_RECRUITMENT_ADDRESS_POSTCODE', 'SE1 9DE'),
    e('PUBLIC_RECRUITMENT_ADDRESS_COUNTRY', 'United Kingdom'),
  ].filter(Boolean).join(', '),

  // ATS URLs
  hirehiveUrl:  e('PUBLIC_ATS_EMEA_URL',  'https://my.hirehive.io/kaplan-international/'),
  workdayUrl:   e('PUBLIC_ATS_USA_URL',   'https://ghc.wd1.myworkdayjobs.com/Kaplan_International_Careers'),
  applynowUrl:  e('PUBLIC_ATS_ANZ_URL',   'https://kaplan.applynow.net.au/'),
  sgJobsUrl:    e('PUBLIC_ATS_SG_URL',    'https://www.kaplan.com.sg/careers/'),
  hkJobsUrl:    e('PUBLIC_ATS_HK_URL',    'https://www.kaplan.com.hk/careers-at-kaplan_join-our-team.php'),
} as const;

/** Region → ATS URL map used by the Location Picker Modal */
export const REGION_ATS = [
  {
    id:    'emea',
    label: 'UK, Ireland & EMEA',
    icon:  '🇬🇧',
    desc:  'Find roles in the UK, Ireland and across EMEA',
    url:   SITE.hirehiveUrl,
  },
  {
    id:    'usa',
    label: 'USA & Canada',
    icon:  '🇺🇸',
    desc:  'Find roles in the United States and Canada',
    url:   SITE.workdayUrl,
  },
  {
    id:    'anz',
    label: 'Australia & New Zealand',
    icon:  '🇦🇺',
    desc:  'Find roles in Australia and New Zealand',
    url:   SITE.applynowUrl,
  },
  {
    id:    'sg',
    label: 'Singapore',
    icon:  '🇸🇬',
    desc:  'Find roles in Singapore',
    url:   SITE.sgJobsUrl,
  },
  {
    id:    'hk',
    label: 'Hong Kong',
    icon:  '🇭🇰',
    desc:  'Find roles in Hong Kong',
    url:   SITE.hkJobsUrl,
  },
] as const;

export type RegionAts = typeof REGION_ATS[number];
