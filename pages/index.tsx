import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
        <meta name="title" content="Believe Support Services" />
        <meta name="description" content="We believe that everyone has the right to be heard and respected. We work to empower individuals to reach their goals and to find their purpose. " />
      </Head>
      <main className="mb-16 space-y-16">
        <Hero />
        <section className="wrapper">2</section>
        <section className="wrapper">3</section>
        <section className="wrapper">4</section>
        <section className="wrapper">5</section>
        <section className="wrapper">6</section>
      </main>
    </>
  )
}

