import React, { useState } from "react";
import Head from "next/head";

export default function events() {
  return (
    <>
      <Head>
        <title>Events - Believe Support Services</title>
      </Head>
      <main className="min-h-screen xl:container xl:mx-auto py-24">
        <h1 className="scroll-m-20 font-extrabold tracking-normal text-4xl dark:text-primary-100">
          Join Us for Upcoming Events
        </h1>
        <p className="leading-7 tracking-wider dark:text-primary-100 mt-4">
          Stay connected with Believe Support Services through our exciting and
          enriching events. From workshops and seminars to community gatherings
          and celebrations, our events are designed to promote learning, social
          interaction, and a sense of belonging.
        </p>
        <section className="mt-12"></section>
      </main>
    </>
  );
}
