import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export default function SiteDetails() {
  return (
    <>
      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-text leading-7">
          <h1 className="mt-2 text-3xl text-lavender font-bold tracking-tight sm:text-4xl">
            Site Details
          </h1>
          <blockquote className="mt-6 text-yellow"> Last reviewed: 2023-12-11</blockquote>
          <h2 className="mt-6 text-2xl text-lavender font-bold tracking-tight sm:text-3xl">
            Licensing
          </h2>
          <h3 className="mt-3 text-xl font-bold text-lavender">Icons</h3>
          <h4 className="mt-3 text-lg font-bold text-lavender">Header</h4>
          <p className="mt-3 text-text leading-8">
            The animated sun and moon icons were created by{' '}
            <a href="https://github.com/cyberalien/line-md" className="text-green hover:text-teal">
              Vjacheslav Trushkin
            </a>{' '}
            and are under an MIT license.
          </p>
          <h4 className="mt-3 text-lg font-bold text-lavender">Footer</h4>
          <p className="mt-3 text-text leading-8">
            Mail and Github and Mastodon icon were created by{' '}
            <a href="https://github.com/cyberalien/line-md" className="text-green hover:text-teal">
              Vjacheslav Trushkin
            </a>{' '}
            and are under an MIT license.
          </p>
          <p className="mt-3 text-text leading-8">
            RSS icon is by Github and under an MIT license. Plausible, Orcid and Exercism icon are
            by{' '}
            <a
              href="https://github.com/simple-icons/simple-icons"
              className="text-green hover:text-teal"
            >
              Simple Icon Collaborators
            </a>{' '}
            and are under a CC0 1.0 license.
          </p>
        </div>
      </div>
    </>
  )
}
