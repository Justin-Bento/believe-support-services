import React from 'react'
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function programs() {
  return (
    <>
      <Appbar />
      <main className="min-h-screen lg:container lg:mx-auto lg:py-32 p-4 py-16">
        <h1 className="scroll-m-20 font-extrabold tracking-wide text-5xl dark:text-primary-100">Explore Our Programs</h1>
        <p className="leading-7 tracking-wider dark:text-primary-100 mt-6">We are dedicated to improving the lives of individuals with complex needs through a variety of thoughtfully designed programs. Each program is crafted to empower, educate, and foster a strong sense of community. Discover how our programs can make a difference in the lives of those we support.</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {programs_iinfo.map((data: any) => {
            return <ProgramCard key={data.title.toString()} URL={`/programs/${data.title.toString().replace(/\s+/g, '-').toLowerCase()}`} Headline={data.title} Supporting={data.description} />
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

function ProgramCard(props: any) {
  return (
    <>
      <Link href={props.URL} className="hover:opacity-80 transition-all">
        <div className="bg-primary-50 dark:bg-primary-900 min-h-[430px] rounded-xl">
          <div className="bg-primary-300 dark:bg-primary-800 w-full h-64 rounded-xl"></div>
          <div className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{props.Headline}</h2>
            <p className="leading-7 tracking-wider text-opacity-75 text-slate-700/75 dark:text-slate-100/75">{props.Supporting}</p>
            <Button size="sm" variant="secondary" className="mt-4">View Program</Button>
          </div>
        </div>
      </Link>
    </>
  )
}

const programs_iinfo = [
  { title: "Day Program", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  { title: "Fitness & Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  { title: "Residential Program", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  { title: "Vocational Camp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." }
]
