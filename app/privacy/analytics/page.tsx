import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export const metadata = genPageMetadata({ title: 'Privacy - Analytics' })

export default function Page() {
  return (
    <>
      <div className="pt-5">
        <Breadcrumbs />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Analytics
          </h1>
          <p className="mt-4 text-lg pb-5">
            This website uses plausible analytics. Plausible is a lightweight and open-source web
            analytics tool. To read a full description of how Plausible works, which data is
            collected and how it is utilized, please visit{' '}
            <a
              href="https://plausible.io/privacy-focused-web-analytics"
              className="font-bold text-cyan-500 dark:text-lime-200 hover:text-cyan-600 dark:hover-text-lime-300"
            >
              plausible.io
            </a>
            .
          </p>
          <a href="https://plausible.io/markpitblado.me">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 dark:bg-lime-200 dark:text-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Public Dashboard
              <ArrowTopRightOnSquareIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </a>
          <p className="mt-4 text-lg pb-5 ">
            I use the hosted version of Plausible, and thus pay a monthly fee for their service
            (both for the trouble and because I like supporting open-source projects). If you feel
            so inclined, and would like to see a world with less google analytics, you can donate to
            the company{' '}
            <a
              href="https://github.com/sponsors/plausible"
              className="font-bold text-cyan-500 dark:text-lime-200 hover:text-cyan-600 dark:hover-text-lime-300"
            >
              here.
            </a>{' '}
          </p>
        </div>
      </div>
    </>
  )
}
