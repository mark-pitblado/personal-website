import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

import {
  PencilSquareIcon,
  EnvelopeIcon,
  ChartBarSquareIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'

export const metadata = genPageMetadata({ title: 'Privacy' })

const actions = [
  {
    title: 'Email',
    href: '/privacy/email',
    icon: EnvelopeIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description:
      'This page covers details about responsible emailing and communications with me via email.',
  },
  {
    title: 'Analytics',
    href: '/privacy/analytics',
    icon: ChartBarSquareIcon,
    iconForeground: 'text-lime-700',
    iconBackground: 'bg-lime-50',
    description: 'This page covers details about analytics and tracking on this website.',
  },
  {
    title: 'Newsletter',
    href: '/privacy/newsletter',
    icon: PencilSquareIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
    description: 'This page covers details about the newsletter that I run.',
  },
  {
    title: 'Hosting',
    href: '/privacy/hosting',
    icon: ServerIcon,
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: 'This page covers details about the hosting provider that I use.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Privacy() {
  return (
    <>
      <h1 className="text-3xl mb-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Site Details
      </h1>
      <h2 className="text-2xl mb-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        Licensing
      </h2>
      <h3>Icons</h3>
      <h4>Header</h4>
      The animated sun and moon icons were created by [Vjacheslav
      Trushkin](https://github.com/cyberalien/line-md) and are under an MIT license.
      <h4>Footer</h4>
      Mail and Github and Mastodon icon were created by [Vjacheslav
      Trushkin](https://github.com/cyberalien/line-md) and under an MIT license. RSS icon is by
      Github and under an MIT license. Plausible, Orcid and Exercism icon are by [Simple Icon
      Collaborators](https://github.com/simple-icons/simple-icons) and are under a CC0 1.0 license.
    </>
  )
}
