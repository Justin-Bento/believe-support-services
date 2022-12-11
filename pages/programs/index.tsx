import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function ProgramHome() {
  const programName = [
    { id: 1, Headline: "Day Program" },
    { id: 2, Headline: "Fitness & Health Program" },
    { id: 3, Headline: "Residential Program" },
    { id: 4, Headline: "Summer Camp" },
    { id: 5, Headline: "Program" },
  ];
  return (
    <>
      <Head>
        <title>Programs - Believe Support Services</title>
      </Head>
      <main className="container p-4 mx-auto my-20 max-w-7xl">
        <section className="">
          <h1 className="text-2xl font-semibold">Program Home</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quaerat eos sunt at? Tenetur, cum eligendi voluptates enim
            odit inventore adipisci at eos, commodi accusantium delectus, rerum
            ut officiis!
          </p>
        </section>
        <section className="flex flex-col gap-8 mt-8">
          {programName.map((context: any) => {
            return (
              <Link
                key={context.id}
                href={`/programs/${context.id}`}
                className=""
              >
                <article className="relative w-full h-64 transition-all bg-gray-900 rounded-lg hover:opacity-90">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-lg font-semibold leading-7 tracking-wide text-gray-100">
                      {context.Headline || "Program Name Goes Here"}
                    </h2>
                    <p className="max-w-4xl mt-1.5 text-base leading-6 tracking-[0.022rem] text-gray-200">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus dicta quaerat eos sunt at? Tenetur, cum eligendi
                      voluptates enim odit inventore adipisci at eos, commodi
                      accusantium delectus, rerum ut officiis!
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
}
