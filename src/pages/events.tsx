import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

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
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-900 font-bold dark:text-primary-50 dark:hover:bg-primary-700"
              >
                All Events
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-900 font-bold dark:text-primary-50 dark:hover:bg-primary-700"
              >
                Upcomming Events
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className="rounded bg-transparent ring-2 px-3 py-1.5 text-xs font-mono uppercase text-primary-900 font-bold dark:text-primary-50 dark:hover:bg-primary-700"
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
                className="grid gap-8 grid-cols-12 bg-primary-50 dark:bg-primary-900 xs:rounded-t-lg rounded-lg ring"
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
                <li className="col-span-8 p-6 space-y-2">
                  <button
                    type="button"
                    className="rounded bg-primary-400 dark:bg-primary-950/50 px-3 py-1.5 text-xs font-mono uppercase text-primary-50 dark:hover:bg-primary-700"
                  >
                    Event Type
                  </button>
                  <h2 className="text-xl font-bold dark:text-white">
                    Event Topic Goes Here
                  </h2>
                  <p className="text-base leading-6 dark:text-white max-w-[100ch] text-balance">
                    Give a brief overview of the purpose of this campaign and
                    why this campaign is happening. Having a good summary and
                    reason is great to help engage your audience and build up
                    your community for the long term.
                  </p>
                  <ul className="text-base leading-6 opacity-70 dark:text-white list-disc list-inside">
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
        <section className="">
          <nav className="flex items-center justify-between px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-200"
              >
                <RiArrowLeftLine
                  aria-hidden="true"
                  className="mr-3 size-5 text-gray-400 dark:text-gray-200"
                />
                Previous
              </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
              >
                1
              </a>
              {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-500 hover:border-gray-300" */}
              <a
                href="#"
                aria-current="page"
                className="inline-flex items-center border-t-2 border-primary-500 dark:border-gray-300 px-4 pt-4 text-sm font-medium text-gray-600 dark:text-gray-200"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
              >
                3
              </a>
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
              >
                8
              </a>
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
              >
                9
              </a>
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
              >
                10
              </a>
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
              <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-200"
              >
                Next
                <RiArrowRightLine
                  aria-hidden="true"
                  className="ml-3 size-5 text-gray-400 dark:text-gray-200"
                />
              </a>
            </div>
          </nav>
        </section>
      </main>
    </>
  );
}
