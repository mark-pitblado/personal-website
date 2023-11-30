import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
          <SocialIcon kind="plausible" href={siteMetadata.plausible} size={6} />
          <SocialIcon kind="orcid" href={siteMetadata.orcid} size={6} />
          <SocialIcon kind="exercism" href={siteMetadata.exercism} size={6} />
        </div>
        <div className="mb-2 mt-5 flex flex-col items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex space-x-2">
            <SocialIcon kind="creative_commons" href="https://creativecommons.org/licenses/by/4.0/" size={6} />
            <SocialIcon kind="creative_commons_by" href="https://creativecommons.org/licenses/by/4.0/" size={6} />
            <span>The content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" className="font-bold text-cyan-500 dark:text-lime-200 hover:text-cyan-600 dark:hover-text-lime-300">Creative Commons Attribution 4.0 license.</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
