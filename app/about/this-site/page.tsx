import Image from 'next/image'

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
            The animated sun and moon icons to switch site theme in the header were created by{' '}
            <a href="https://github.com/cyberalien/line-md" className="text-green hover:text-teal">
              Vjacheslav Trushkin
            </a>{' '}
            and are under an MIT license.
          </p>
          <h4 className="mt-3 text-lg font-bold text-lavender">Footer</h4>
          <p className="mt-3 text-text leading-8">
            All icons are by{' '}
            <a
              href="https://github.com/simple-icons/simple-icons"
              className="text-green hover:text-teal"
            >
              Simple Icon Collaborators
            </a>{' '}
            and are under a CC0 1.0 license.
          </p>
          <h4 className="mt-3 text-lg font-bold text-lavender">Content</h4>
          <p className="mt-3 text-text leading-8">
            Unless otherwise noted, content on this site is licensed under a CC BY 4.0 license.
          </p>
          <p className="mt-3 text-text leading-8">
            Content on this site may have a badge on it, indicating how AI was used in the creation
            of the page (if it was used at all). These badges are from [ai-label.org](ai-label.org)
            and are licensed under CC-SA. Below are the three badges:
          </p>
          <div className="pt-3 flex flex-row justify-start space-x-10">
            <Image
              src="https://cdn.markpitblado.me/no-ai-used.png"
              alt="no ai used badge"
              width={150}
              height={100}
            />
            <Image
              src="https://cdn.markpitblado.me/assisted-by-ai.png"
              alt="assisted by ai badge"
              width={150}
              height={100}
            />
            <Image
              src="https://cdn.markpitblado.me/made-with-ai.png"
              alt="made with ai badge"
              width={150}
              height={100}
            />
          </div>
          <p className="mt-3 text-text leading-8">The creation of this page was assisted by AI.</p>
        </div>
      </div>
    </>
  )
}
