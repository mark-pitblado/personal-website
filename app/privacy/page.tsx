import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export const metadata = genPageMetadata({ title: 'Privacy' })

export default function Privacy() {
  return (
    <>
      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-text leading-7">
          <p className="text-peach font-semibold leading-">We should all care about</p>
          <h1 className="mt-2 text-3xl text-lavender font-bold tracking-tight sm:text-4xl">
            Privacy
          </h1>
          <blockquote className="mt-6 text-yellow"> Last reviewed: 2023-12-11</blockquote>
          <p className="mt-6 text-text leading-8">
            In this section, I will cover the details of both how I handle privacy on this site, and
            how I handle privacy in general in a <em>personal</em> capacity. The text on this page
            should not be taken as a contract or agreement, or supersede any existing agreements or
            contracts that I have with you or your organization.
          </p>
          <h2 className="mt-6 text-2xl text-lavender font-bold tracking-tight sm:text-3xl">
            Interactions with this website
          </h2>
          <ul className="mt-3 leading-16 list-disc list-inside">
            <li className="mt-3">
              This site is not monetized in any capacity, and I do not sell any data that I collect
              to third-parties, nor would I in the future.
            </li>
            <li className="mt-3">
              This site is hosted on Vercel. I have disabled analytics and site performance
              monitoring on the platform, however keep logs for debugging purposes. These logs are
              available to me for a maximum of one hour. Vercel's privacy policy can be found{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-green hover:text-teal"
              >
                here
              </a>
              .
            </li>
            <li className="mt-3">
              The full source code of this site is available on Github. This can be found in{' '}
              <a
                href="https://github.com/mark-pitblado/personal-website"
                className="text-green hover:text-teal"
              >
                this repository.
              </a>
            </li>
            <li className="mt-3">
              I use Cloudflare to proxy requests to this site and as a DNS provider. SSL mode is set
              to Full (strict), and so Cloudflare is unable to decrypt any traffic. Cloudflare's
              privacy policy can be found{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                className="text-green hover:text-teal"
              >
                here
              </a>
              .
            </li>
          </ul>
          <h2 className="mt-6 text-2xl text-lavender font-bold tracking-tight sm:text-3xl">
            Interactions with me
          </h2>
          <p className="mt-3 leading-8">
            When receiving communications and sending communications to others, I strive to be as
            privacy respecting as possible.{' '}
            <b>
              The best way to reach me is through the email address listed in the footer of this
              website
            </b>
            . In the email, please write a brief description of who you are and what you are looking
            to discuss. I will respond via email with my public key attached, which you may use to
            encrypt your response if you wish. If you do not wish to use encryption, that is fine as
            well.
          </p>
          <h3 className="mt-3 text-xl font-bold text-lavender">Emailing Responsibly</h3>
          <p className="mt-3">
            Except in a few rare instances, I will not have insight into the legal, ethical, or
            regulations that may apply to you or your organization. It is your responsibility to
            ensure that you are not violating any laws, regulations, or ethical protocols when
            contacting me or sharing files through email. If I feel that data shared with me is
            highly sensitive, I may request that you use an alternative method of sharing the data,
            or confirm that you intended to share such information and are authorized to do so.
            Examples of highly sensitive data include, but are not limited to:
          </p>
          <ul className="mt-3 leading-16 list-disc list-inside">
            <li className="mt-3 ">Personal health information</li>
            <li className="mt-3 ">Personal financial information</li>
            <li className="mt-3">
              Security-related information (such as credentials for accounts that are not going to
              be imminently reset)
            </li>
            <li className="mt-3">Information under embargo</li>
          </ul>
          <p className="mt-3">
            Especially note that my email is hosted in Switzerland. If you are a Canadian
            researcher, you may have requirements that prohibit the release of data outside of
            Canada. If you are unsure, please contact your institution's research ethics board for
            clarification. Gmail would present the same problem, as it is hosted in the United
            States.
          </p>
          <h3 className="mt-3 text-xl font-bold text-lavender">Direct Messages</h3>
          <p className="mt-3">
            In general, I do not respond to direct messages on third-party platforms. If you wish to
            message me, please use the email address mentioned above. It can be found in the footer
            of this site. If you do not wish to use email to communicate, you can propose an
            alternative method of communication in your initial email and I will certainly consider
            it for future communications.
          </p>
        </div>
      </div>
    </>
  )
}
