import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = genPageMetadata({ title: 'Privacy - Email' })

export default function Page() {
  return (
    <>
      <div className="pt-5">
        <Breadcrumbs />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Email
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            <code className="text-violet-500 dark:text-yellow-200">Last Reviewed: 2023-09-15</code>
          </p>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            This page will cover details about communication with me via email or interactions with
            services that I run in a personal capacity (i.e. not related to any existing or future
            formal employment that I may be engaged in). This is for informational purposes only,
            and does not constitute a contract or agreement.
          </p>
          <header className="mt-8 flex items-center">
            <h3 className="text-xl font-bold dark:text-zinc-100">Proton Mail</h3>
          </header>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            I host my personal email through{' '}
            <Link
              href="https://proton.me/"
              className="text-violet-400 transition hover:text-violet-600 dark:text-violet-200 dark:hover:text-violet-400"
            >
              Proton
            </Link>
            , a privacy-focused email provider based in Switzerland. Emails that you send to me will
            be stored with zero-access encryption, meaning that they are not readable without access
            to the decryption key (i.e. a password). For more details about the difference between
            zero-access encryption and end-to-end encryption, please refer to their documentation{' '}
            <Link
              href="https://proton.me/blog/zero-access-encryption"
              className="text-violet-400 transition hover:text-violet-600 dark:text-violet-200 dark:hover:text-violet-400"
            >
              here.
            </Link>{' '}
            If you wish to contact me using PGP, please contact me and I will provide you with my
            public key.
          </p>
          <h3 className="pt-3 text-xl font-bold dark:text-zinc-100">Emailing Responsibly</h3>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Except in a few rare instances, I will not have insight into the legal, ethical, or
            regulations that may apply to you or your organization. It is your responsibility to
            ensure that you are not violating any laws, regulations, or ethical protocols when
            contacting me or sharing files through email. If I feel that data shared with me is
            highly sensitive, I may request that you use an alternative method of sharing the data,
            or confirm that you intended to share such information and are authorized to do so.
            Examples of highly sensitive data include, but are not limited to:
          </p>
          <ul className="mt-3 list-inside list-disc text-zinc-600 dark:text-zinc-400">
            <li className="mb-2 ">Personal health information</li>
            <li className="mb-2 ">Personal financial information</li>
            <li className="mb-2">
              Security-related information (such as credentials for accounts that are not going to
              be imminently reset)
            </li>
            <li className="mb-2">Information under embargo</li>
          </ul>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Especially note that my email is hosted in Switzerland. If you are a Canadian
            researcher, you may have requirements that prohibit the release of data outside of
            Canada. If you are unsure, please contact your institution's research ethics board for
            clarification. Gmail would present the same problem, as it is hosted in the United
            States.
          </p>
        </div>
      </div>
    </>
  )
}
