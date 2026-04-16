// Central site config — edit here to update across all pages.
export const SITE = {
  name: 'Immersion Education Partners',
  shortName: 'IEP',
  url: 'https://immersionedpartners.com',
  tagline: 'Transforming education through immersion.',
  description:
    'Immersion Education Partners helps districts design, launch, and sustain world-class dual language and immersion programs.',
  email: 'immersionedpartners@gmail.com',
  phone: '+1 (414) 405-4162',
  phoneRaw: '+14144054162',
  city: 'Milwaukee',
  region: 'WI',
  country: 'US',
  calendlyUrl: 'https://calendly.com/kaneneubauer/30min',
  socials: {
    linkedin: 'https://www.linkedin.com/',
  },
  // TODO: Swap placeholders for real endpoints before launch.
  // 1. Create a SECOND Formspree form for the newsletter and paste its URL here.
  // 2. Keep the contact form endpoint as-is or create a dedicated one.
  formspree: {
    contact: 'https://formspree.io/f/mykwwyya',
    newsletter: 'https://formspree.io/f/REPLACE_WITH_NEWSLETTER_ID',
  },
  gaId: 'G-GT8C5V9LDG',
} as const;
