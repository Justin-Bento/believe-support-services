import React from 'react'
import Head from 'next/head';
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function events() {
  return (
    <>
      <Head>
        <title>Events - Believe Support Services</title>
      </Head>
      <Appbar />
      <main className="h-[100vh]"></main>
      <Footer />
    </>
  )
}
