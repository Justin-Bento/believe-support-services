import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import index from ".";

export default function events() {
  return (
    <>
      <Head>
        <title>Events - Believe Support Services</title>
      </Head>
      <main className="min-h-dvh container mx-auto py-24 space-y-12">
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
        <section className="">
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
        <section className="space-y-12">
          {Array.from({ length: 12 }, (_, index) => {
            return (
              <ul
                key={index}
                className="grid gap-8 grid-cols-12 bg-primary-900 xs:rounded-t-lg rounded-lg ring"
              >
                <li className="w-full aspect-square col-span-12 lg:col-span-4">
                  <div className="relative w-full h-96 lg:h-full rounded-t-lg lg:rounded-l-lg overflow-hidden">
                    <Image
                      fill
                      src="/media/support-services-small.jpg"
                      alt="Group of hands on the table going up and down"
                    />
                  </div>
                </li>
                <li className="col-span-8 p-6 space-y-4">
                  <button
                    type="button"
                    className="rounded bg-primary-950/50 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
                  >
                    Event Type
                  </button>
                  <h2 className="text-xl font-bold dark:text-white">
                    Event Topic Goes Here
                  </h2>
                  <p className="text-base leading-6 opacity-70 max-w-[100ch] text-balance">
                    Give a brief overview of the purpose of this campaign and
                    why this campaign is happening. Having a good summary and
                    reason is great to help engage your audience and build up
                    your community for the long term.
                  </p>
                  <ul className="text-white opacity-70 list-disc list-inside">
                    <li className="">Event Date:</li>
                    <li className="">Location:</li>
                    <li className="">Registration:</li>
                    <li className="">Live-Stream:</li>
                  </ul>
                </li>
              </ul>
            );
          })}
        </section>
      </main>
    </>
  );
}
