import Head from "next/head";
import React from "react";

let company = "Believe Support Services"
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact - {company}</title>
      </Head>
      <main className="">
        <section className="">
          <div>contact</div>
        </section>
      </main>
    </>
  );
}
