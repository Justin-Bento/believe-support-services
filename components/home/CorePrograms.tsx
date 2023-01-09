import Link from 'next/link'
import React from 'react'

export default function CorePrograms() {
  return (
    <section className="p-4 wrapper">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="p-8 ring-2 rounded-t-xl ring-gray-700">
          <h2 className="font-bold type-title-large">Day Program</h2>
          <p className="type-body-large mt-1.5"> (M.O.V.E)  for individuals with complex needs, provides programming developed to empower and encourage self growth!</p>
          <ul className="m-4 space-y-4 list-disc type-body-large">
            <li>Meet new friends</li>
            <li>Improve social skills</li>
            <li>Improve self-esteem</li>
            <li>Develop self confidence</li>
            <li>Promote team work</li>
          </ul>
          <Link href="/programs/day-program" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Learn More</Link>
        </div>
        <div className="p-8 ring-2 rounded-t-xl ring-gray-700">
          <h2 className="font-bold type-title-large">Fitness & Health</h2>
          <p className="type-body-large mt-1.5">We work with individuals with complex needs to develop and nurture them to improve their level of self-independence.</p>
          <ul className="m-4 space-y-4 list-disc type-body-large">
            <li>Meet new friends</li>
            <li>Improve social skills</li>
            <li>Improve self-esteem</li>
            <li>Develop self confidence</li>
            <li>Promote team work</li>
          </ul>
          <Link href="/programs/fitness-and-health" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Learn More</Link>
        </div>
        <div className="p-8 ring-2 rounded-t-xl ring-gray-700">
          <h2 className="font-bold type-title-large">Residential Program</h2>
          <p className="type-body-large mt-1.5">We provide a one-on-one support staff to assist clients in completing daily task and build self improvements!</p>
          <ul className="m-4 space-y-4 list-disc type-body-large">
            <li>Meet new friends</li>
            <li>Improve social skills</li>
            <li>Improve self-esteem</li>
            <li>Develop self confidence</li>
            <li>Promote team work</li>
          </ul>
          <Link href="/programs/residential-program" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
