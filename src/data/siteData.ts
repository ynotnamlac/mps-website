/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'TBD',
  tagline: 'TBD',
  description: 'TBD',
  url: 'https://example.com',
  locale: 'en_US',

  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'TBD',
  phoneForTel: 'TBD',
  phoneFormatted: 'TBD',
  address: {
    lineOne: 'TBD',
    lineTwo: '',
    city: 'TBD',
    state: 'TBD',
    zip: 'TBD',
    country: 'AU',
    mapLink: '',
  },
  hours: [
    { days: 'Monday - Friday', time: 'TBD' },
  ],
  emergencyService: '',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: '',
    instagram: '',
    google: '',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'TBD',
      description: 'TBD',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: 'TBD', name: 'TBD', location: 'TBD', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'TBD',
    ],
    team: [
      { name: 'TBD', role: 'TBD', image: '' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'TBD' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;