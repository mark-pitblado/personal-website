import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-6 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
          <SocialIcon kind="plausible" href={siteMetadata.plausible} size={6} />
          <SocialIcon kind="orcid" href={siteMetadata.orcid} size={6} />
          <SocialIcon kind="exercism" href={siteMetadata.exercism} size={6} />
          <SocialIcon kind="rss_icon" href={siteMetadata.rss} size={6} />
        </div>
        <div className="mb-3 text-green">
          <a href="https://nevermonetize.com" target="_blank">
            never<b>monetize</b>
          </a>{' '}
        </div>
      </div>
    </footer>
  )
}
