import { genPageMetadata } from 'app/seo'
import GitHubCalendar, { ThemeInput } from 'react-github-calendar'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'About' })

const minimalTheme: ThemeInput = {
  light: ['#313244', '#cba6f7'],
  dark: ['#313244', '#cba6f7'],
}

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-lavender sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="text-text prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          <p className="mb-3">
          Hi, I'm Mark! Thanks for stopping by my site. Here you will find a little bit about me,
          some posts that I have written, and links to other websites or services that I have a
          presence on. If you with to get in touch, please use the email logo in the footer, and
          I'll respond as soon as I can. I grew up loving to tinker with things, and never really
          stopped. If I were to describe what I do, I would summarize it as "using data to help
          solve problems for the public good". In my free time I love to read, and explore new and
          emerging open-source software.
          </p>
          <p>
          I am currently a member of the <a href="https://supporters.eff.org/donate/join-or-renew-your-membership" className="text-green">EFF</a> and <a href="https://join.codeberg.org/" className="text-green">Codeberg</a>. Click on either link to join as well!
          </p>
        </div>
        <Link href="/about/this-site">
          <button className="rounded-md bg-green px-3 py-2 text-sm font-semibold text-base shadow-sm hover:bg-blue">
            {' '}
            Site Details
          </button>
        </Link>
      </div>
      <div className="pt-10">
        <GitHubCalendar
          username="mark-pitblado"
          hideColorLegend={true}
          hideMonthLabels={true}
          hideTotalCount={true}
          blockRadius={5}
          theme={minimalTheme}
        />
      </div>
    </>
  )
}
