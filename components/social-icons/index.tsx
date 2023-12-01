import {
  Mail,
  Github,
  Youtube,
  Linkedin,
  Twitter,
  Mastodon,
  Orcid,
  Plausible,
  Exercism,
  CreativeCommons,
  CreativeCommonsBy,
  RSSIcon,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  orcid: Orcid,
  plausible: Plausible,
  exercism: Exercism,
  rss_icon: RSSIcon,
  creative_commons: CreativeCommons,
  creative_commons_by: CreativeCommonsBy,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
