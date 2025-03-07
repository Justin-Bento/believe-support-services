import React from "react";
import Head from "next/head";
import { frequently_asked_questions } from "@/lib/data";

export default function questions() {
  return (
    <>
      <Head>
        <title>FAQ - Believe Support Services</title>
        <meta
          name="programs"
          content=" individuals with complex needs to help them be the best version on themselves and their community."
        />
      </Head>
      <main className="p-4 my-32 lg:container lg:mx-auto lg:p-0">
        <section className="space-y-2">
          <h1 className="display-medium font-bold">
            Questions With Believe Support Services
          </h1>
          <p className="text-lg max-w-[120ch] text-balance">
            After sending a survey we pulled some of the most frequently asked
            questions asked by our customers. We received and compiled them all
            into one place for your convenience. Have more questions? Please
            reach out!
          </p>
        </section>
        {/*
         * End Of Page Header
         */}
        <section className="my-8 grid grid-cols-12 gap-6">
          {frequently_asked_questions.map((data: any) => {
            return (
              <>
                <div className="col-span-12 lg:col-span-6 p-6 bg-primary-50 dark:bg-primary-900 dark:border-opacity-0 rounded-xl">
                  <h2 className="font-semibold tracking-wider text-md capitalize dark:text-primary-100">
                    {data.question}
                  </h2>
                  <p className="leading-7 text-sm tracking-wider dark:text-primary-100/75">
                    {data.awnser}
                  </p>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}
