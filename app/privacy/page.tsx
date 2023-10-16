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
        Privacy
      </h1>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-gray-800'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm">{action.description}</p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
