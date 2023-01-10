import Head from "next/head";
import Hero from "../components/home/Hero";
import Incentives from "../components/home/Incentives";
import PrimaryFeatures from "../components/home/PrimaryFeatures";
import SecondaryFeatures from "../components/home/SecondaryFeatures";
import CallToActionPrimary from "../components/home/CallToActionPrimary";
import CallToActionSecondary from "../components/home/CallToActionSecondary";
import CallToActionTertiary from "../components/home/CallToActionTertiary";
import CorePrograms from "../components/home/CorePrograms";

export default function Index() {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
        <meta name="title" content="Believe Support Services" />
        <meta
          name="description"
          content="We believe that everyone has the right to be heard and respected. We work to empower individuals to reach their goals and to find their purpose. "
        />
      </Head>
      <main className="">
        <div className="space-y-16">
          <Hero />
          <CorePrograms />
          <CallToActionPrimary />
          <Incentives />
          <CallToActionSecondary />
          <PrimaryFeatures />
          <CallToActionTertiary />
        </div>
        <SecondaryFeatures />
      </main>
    </>
  );
}

