export default function Page() {
    return (
      <>
        <main className="relative isolate min-h-full">
          <img
            src="/static/images/thank-you.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top shadow-md rounded-lg brightness-50"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">Thank you</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">For subscribing to my blog</h1>
            <p className="mt-4 text-base text-white sm:mt-6">I hope that you find the content useful and insightful.</p>
            <div className="mt-10 flex justify-center">
              <a href="/" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to homepage
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  