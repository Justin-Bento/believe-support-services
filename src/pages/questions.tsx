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
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl capitalize dark:text-primary-50">
            Frequently asked questions
          </h1>
          <p className="text-lg max-w-[120ch] text-balance">
            After sending a survey we pulled some of the most frequently asked
            questions asked by our customers. We received and compiled them all
            into one place for your convenience. Have more questions? Please
            reach out!
          </p>
        </section>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {frequently_asked_questions.map((faq, index) => (
            <div
              key={index}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5 dark:text-primary-50">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600 dark:text-primary-50 dark:opacity-70">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </main>
    </>
  );
}
