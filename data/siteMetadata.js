/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Mark Pitblado',
  author: 'Mark Pitblado',
  headerTitle: 'Mark Pitblado',
  description: 'My personal site, mostly a blog of my random thoughts.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.markpitblado.me',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'website@layer404.com',
  github: 'https://github.com/arcticFox-git',
  linkedin: 'https://www.linkedin.com/mark-pitblado',
  orcid: 'https://orcid.org/0000-0002-8786-5167',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
