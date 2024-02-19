interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Understanding a Fracking Site',
    description:
      'A simple react site to better understand hydraulic fracturing in British Columbia.',
    imgSrc: 'https://cdn.markpitblado.me/understanding-a-fracking-site-screenshot.png',
    href: 'https://showcase2.markpitblado.me',
  },
  {
    title: 'Hazard x Outrage',
    description:
      'Another react app, this time as a single page, to understand the Hazard x Outrage risk communication framework in public health.',
    imgSrc: 'https://cdn.markpitblado.me/hazard-x-outrage-screenshot.png',
    href: 'https://showcase1.markpitblado.me',
  },
  {
    title: 'Never Monetize',
    description:
      'A jekyll site that can be linked to from other websites to communicate monetization intent with users',
    imgSrc: 'https://cdn.markpitblado.me/never-monetize-screenshot.png',
    href: 'https://nevermonetize.com',
  },
  {
    title: 'Miniflux Catppuccin Theme',
    description: 'A css theme for the miniflux rss reader.',
    imgSrc: 'https://cdn.markpitblado.me/catppuccin-miniflux.png',
    href: 'https://github.com/mark-pitblado/miniflux-catppuccin',
  },
]

export default projectsData
