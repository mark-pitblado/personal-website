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
          <SocialIcon kind="plausible" href={siteMetadata.plausible} size={6} />
          <SocialIcon kind="orcid" href={siteMetadata.orcid} size={6} />
          <SocialIcon kind="datacamp" href={siteMetadata.datacamp} size={6} />
          <SocialIcon kind="exercism" href={siteMetadata.exercism} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <Link href="/privacy">Privacy and Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
