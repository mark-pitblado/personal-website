/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Mark Pitblado',
  author: 'Mark Pitblado',
  headerTitle: 'Mark Pitblado',
  description: 'My personal site, mostly a blog of my random thoughts.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.markpitblado.me',
  siteLogo: '/static/images/main.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'website@layer404.com',
  github: 'https://github.com/mark-pitblado',
  mastodon: 'https://fosstodon.org/@markpitblado',
  linkedin: 'https://www.linkedin.com/in/mark-pitblado/',
  orcid: 'https://orcid.org/0000-0002-8786-5167',
  datacamp: 'https://www.datacamp.com/portfolio/markpitblado',
  exercism: 'https://exercism.org/profiles/mark-pitblado',
  rss: 'https://markpitblado.me/feed.xml',
  keyoxide: 'https://keyoxide.org/3375A34A0C102A83B1AD8049062D64188CBB9F70',
  locale: 'en-US',
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
