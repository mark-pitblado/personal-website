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
  linkedin: 'https://www.linkedin.com/in/mark-pitblado/',
  orcid: 'https://orcid.org/0000-0002-8786-5167',
  locale: 'en-US',
  analytics: {
    plausibleAnalytics: {
      plausibleDataDomain: 'markpitblado.me',
    },
  },
  newsletter: {

    provider: 'buttondown',
  },
  search: {
    provider: 'kbar', 
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
