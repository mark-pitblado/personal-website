import Link from '@/components/Link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BriefcaseIcon, UserCircleIcon, LockClosedIcon, RssIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'Blog',
    href: '/blog',
    description: 'The main blog of this site.',
    icon: RssIcon,
  },
  { name: 'About', href: '/about', description: 'A little bit about me.', icon: UserCircleIcon },
  {
    name: 'Projects',
    href: '/projects',
    description: 'Small projects that I am working on.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Privacy',
    href: '/privacy',
    description: 'Privacy details for this site.',
    icon: LockClosedIcon,
  },
]

export default function NotFound() {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 dark:text-lime-200">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            This page does not exist
          </h1>
          <p className="mt-4 text-base leading-7  sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, I don't have the page you are looking for. Below are the categories of the site.
          </p>
        </div>
        <div className="mx-auto mt-6 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon className="h-6 w-6 dark:text-lime-200" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6">
                    <a href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-6 dark:text-lime-200">
              <span aria-hidden="true">&larr;</span>
              Back to home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
