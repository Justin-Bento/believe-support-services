import Head from "next/head";
import Link from "next/link";
import React from "react";
import { sanityClient } from "../../sanity";
import { Program } from "../../typings";

interface Props {
  programs: [Program];
}

export default function ProgramHome({ programs }: Props) {
  return (
    <>
      <Head>
        <title>Programs - Believe Support Services</title>
      </Head>
      <main className="container p-4 mx-auto my-20 max-w-7xl">
        <section className="">
          <h1 className="text-4xl font-bold text-gray-700">Program Home</h1>
          <p className="max-w-3xl mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quaerat eos sunt at? Tenetur, cum eligendi voluptates enim
            odit inventore adipisci at eos, commodi accusantium delectus, rerum!
          </p>
        </section>
        <section className="flex flex-col gap-8 mt-8">
          {programs.map((context) => {
            return (
              <Link
                key={context._id}
                href={`/programs/${context.slug.current}`}
                className=""
              >
                <article className="relative w-full h-64 transition-all bg-gray-900 rounded-lg hover:opacity-90">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-lg font-semibold leading-7 tracking-wide text-gray-100">
                      {context.title || "Program Name Goes Here"}
                    </h2>
                    <p className="max-w-4xl mt-1.5 text-base leading-6 tracking-[0.022rem] text-gray-200">
                      {context.description || "Program Name Goes Here"}
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

export async function getServerSideProps() {
  const query = `*[_type == "programs"]{_id, title, description, slug}`;
  const programs = await sanityClient.fetch(query);
  return {
    props: {
      programs,
    }, // will be passed to the page component as props
  };
}
