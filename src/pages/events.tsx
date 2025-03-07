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
            Join Us for Upcoming Events
          </h1>
          <p className="text-lg max-w-[120ch] text-balance">
            Stay connected with Believe Support Services through our exciting
            and enriching events. From workshops and seminars to community
            gatherings and celebrations, our events are designed to promote
            learning, social interaction, and a sense of belonging.
          </p>
        </section>
        <section className="mt-12"></section>
      </main>
    </>
  );
}
