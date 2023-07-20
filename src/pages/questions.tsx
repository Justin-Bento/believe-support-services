import React from 'react';
import Head from 'next/head';
import Appbar from "@/components/Appbar";
import Footer from '@/components/Footer';
import { frequently_asked_questions } from '@/lib/data';

export default function questions() {
  return (
    <>
    <Head>
      <title>Frequently Asked Questions </title>
    </Head>
    <Appbar />
      <main className="p-4 my-32 lg:container lg:mx-auto lg:p-0">
        <h1 className="headline-large">Questions With Believe Support Services</h1>
        <p className="mt-1.5 text-xl leading-7 tracking-wide">After sending a survey we pulled some of the most frequently asked questions asked by our customers. We received and compiled them all into one place for your convenience. Have more questions? Please reach out!</p>
        <section className='my-8 space-y-4'>
          {frequently_asked_questions.map((data: any) => {
            return (
              <>
                <div className="p-4 border rounded">
                  <h2 className="text-base font-bold opacity-70  capitalize [&[align=center]]:text-center [&[align=right]]:text-right">{data.question}</h2>
                  <p className="text-sm tracking-wide font-normal leading-7 [&[align=center]]:text-center [&[align=right]]:text-right">{data.awnser}</p>
                </div>
              </>
            )
          })}
        </section>
      </main>
    <Footer/>
    </>
  )
}
