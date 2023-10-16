import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = genPageMetadata({ title: 'Privacy - Newsletter' })

export default function Page() {
  return (
    <>
      <div className="pt-5">
        <Breadcrumbs />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Newsletter
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            My newsletter is managed through{' '}
            <Link
              href="https://buttondown.email/"
              className="text-violet-400 transition hover:text-violet-600 dark:text-violet-200 dark:hover:text-violet-400"
            >
              Buttondown
            </Link>
            , a privacy-focused newsletter provider. To view the privacy policy of this vendor,
            please visit{' '}
            <Link
              href="https://buttondown.email/legal/privacy"
              className="text-violet-400 transition hover:text-violet-600 dark:text-violet-200 dark:hover:text-violet-400"
            >
              this page
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
