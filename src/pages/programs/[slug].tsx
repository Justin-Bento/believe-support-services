"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const dummyPrograms = [
  { id: 1, title: "Believe Day Program" },
  { id: 2, title: "Believe Fitness & Health" },
  { id: 3, title: "Believe Residential" },
  { id: 4, title: "After School & Weekend" },
  { id: 5, title: "Social Groups" },
  { id: 6, title: "Life Skills" },
  { id: 7, title: "Day Program" },
  { id: 8, title: "Vocational Program:" },
  { id: 9, title: "Basketball Program:" },
];
type Program = {
  id: number;
  title: string;
};

export default function ProgramSlug() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <>
      <main className="pt-24 space-y-24">
        <section className="grid grid-cols-12 gap-12 container mx-auto min-h-[100dvh]">
          <div className="col-span-12 lg:block lg:col-span-3 lg:place-content-start p-8 pt-12 dark:bg-primary-900 rounded-lg">
            <h1 className="dark:text-blue-50 mb-4 font-semibold text-lg">
              Table Of Contents
            </h1>
            <hr className="my-4" />
            <ul
              role="list"
              aria-label="Table of Contents"
              className={`${
                showList ? "block" : "hidden"
              } lg:block flex flex-col items-start space-y-2 list-disc list-inside`}
            >
              {dummyPrograms.map((program: Program) => (
                <li
                  key={program.id}
                  className="w-full p-2 prose text-primary-900 hover:bg-primary-200/30 dark:text-white hover:cursor-pointer opacity-80"
                >
                  {program.title}
                </li>
              ))}
            </ul>
          </div>
          <article className="col-span-12 lg:col-span-8 lg:place-content-center">
            <div className="my-8 lg:my-0">
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-yellow-600">
                  Core Program
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl dark:text-primary-50">
                  Believe Day Progam
                </h1>
                <p className="text-xl leading-8">
                  Looking for a way to gain self-confidence, meet new friends,
                  and have fun all at the same time? Look no further than the
                  Believe Day Program (M.O.V.E)!
                </p>
                <figure className="space-y-6">
                  <div className="relative w-full h-96 aspect-video">
                    <Image
                      fill
                      quality={70}
                      className="object-cover object-center rounded-xl bg-gray-50"
                      src="/media/believe-day-program.webp"
                      alt=""
                    />
                  </div>
                  <figcaption className="flex text-gray-500 body-medium gap-x-2">
                    Faucibus commodo massa rhoncus, volutpat.
                  </figcaption>
                </figure>
                <div className="space-y-6">
                  <p>
                    Our program is specifically designed to empower individuals
                    with complex needs to achieve their goals and develop their
                    full potential. Our team of expert instructors provides
                    engaging programming to promote self-growth and teamwork,
                    while also creating new memories with old and new friends.
                  </p>
                  <p>
                    Throughout the week, participants will have the opportunity
                    to engage in a variety of exciting activities, including
                    arts and crafts, music, drama, and recreation. These
                    activities are not only fun and engaging, but also help to
                    improve social skills, self-esteem, and self-confidence.
                  </p>
                  <p>
                    Join us at the Believe Centre in Whitby, Ontario from Monday
                    to Friday, 8:00am to 4:00pm, for a transformative
                    experience. Our program is perfect for anyone looking to
                    connect with others and achieve their goals in a supportive
                    and fun environment. Let&#39;s M.O.V.E forward together!
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="bg-yellow-500/30">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-4 text-center">
              <h2 className="headline-medium">
                Help your Indivual Become The Supertar They Want To Be!
              </h2>
              <p className="max-w-xl mx-auto body-large">
                Sign up today to become part of our supportive community and
                start your journey towards self-growth and personal empowerment.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <Link
                  href="/signup"
                  className="capitalize rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Call Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
