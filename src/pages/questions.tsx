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
        <h1 className="scroll-m-20 font-extrabold tracking-wide text-5xl dark:text-primary-100">Questions With Believe Support Services</h1>
        <p className="leading-7 text-xl tracking-wider dark:text-primary-100 mt-6">After sending a survey we pulled some of the most frequently asked questions asked by our customers. We received and compiled them all into one place for your convenience. Have more questions? Please reach out!</p>
        <section className='my-8 space-y-4'>
          {frequently_asked_questions.map((data: any) => {
            return (
              <>
                <div className="p-4 bg-theme dark:border-opacity-0 rounded-xl">
                  <h2 className="font-semibold tracking-wider text-md capitalize dark:text-primary-100">{data.question}</h2>
                  <p className="leading-7 text-sm tracking-wider dark:text-primary-100/75">{data.awnser}</p>
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
