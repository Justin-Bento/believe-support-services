import React, { useState } from "react";
import Head from "next/head";

export default function events() {
  return (
    <>
      <Head>
        <title>Events - Believe Support Services</title>
      </Head>
      <main className="min-h-screen xl:container xl:mx-auto py-24">
        <section className="space-y-4">
          <h1 className="display-medium font-bold capitalize">
            Raise Awareness With Our Events
          </h1>
          <p className="text-lg max-w-[120ch] text-balance">
            Stay connected with Believe Support Services through our exciting
            and enriching events. From workshops and seminars to community
            gatherings and celebrations, our events are designed to promote
            learning, social interaction, and a sense of belonging.
          </p>
          <button
            type="button"
            className="rounded bg-primary-800 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
          >
            Events
          </button>
        </section>
        <section className="mt-12">
          <ul className="flex items-center gap-4">
            <li className="">
              <button
                type="button"
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
              >
                All Events
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
              >
                Upcomming Events
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
              >
                Previous Events
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
