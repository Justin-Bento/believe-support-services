import Link from 'next/link'
import React from 'react'

export default function Error404() {
  return (
    <section className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center max-w-prose">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="mb-2 text-2xl font-medium leading-none tracking-tight text-gray-900 capitalize">Sorry, we couldn&apos;t find this page.</p>
          <p className="mt-4 mb-8 text-gray-700 whitespace-pre-line">But dont worry, you can find plenty of other things on our homepage.</p>
          <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-medium rounded ">Previous Session</Link>
          <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-medium rounded ">Home Page</Link>
        </div>
      </div>
    </section>
  )
}