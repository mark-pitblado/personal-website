import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = genPageMetadata({ title: 'Privacy - Analytics' })

export default function Page() {
  return (
    <>
      <div className="pt-5">
        <Breadcrumbs />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Analytics
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Currently I am in the process of deciding on an analytics provider for this website.
            When I impliment one, I will update this page with the relevant details.
          </p>
        </div>
      </div>
    </>
  )
}
