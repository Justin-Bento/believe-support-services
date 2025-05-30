import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen lg:container lg:mx-auto lg:py-24 p-4 py-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Explore Our Programs</h1>
        <p className="text-lg max-w-[100ch] text-balance">
          We are dedicated to improving the lives of individuals with complex
          needs through a variety of thoughtfully designed programs. Each
          program is crafted to empower, educate, and foster a strong sense of
          community. Discover how our programs can make a difference in the
          lives of those we support.
        </p>
      </section>
      {/*
       * End of Page Header
       */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative group isolate overflow-hidden rounded-lg bg-primary/20 hover:bg-primary/40 transition-all">
          <div className="px-4 py-5 sm:p-6 flex items-start flex-col gap-3">
            <div className="w-full h-48 relative">
              <Image
                fill
                src="/media/believe-day-program.webp"
                alt=""
                className="object-cover object-top rounded-xl"
              />
            </div>
            <h2 className="capitalize text-xl font-bold tracking-[0.01rem]">
              <Link href="#" className=" group-hover:underline">
                The Believe Day Program
                <span className="absolute inset-0"></span>
              </Link>
            </h2>
            <p className="line-clamp-4 text-base/[1.25] tracking-wide">
              This is for individuals with complex needs, providing programming
              that has been developed to empower and encourage self-growth. If
              you are looking for a fun way to learn and create new memories
              with old and new friends, this program is for you.
            </p>
            <button className="rounded-sm block py-1 text-xs font-semibold text-sky-800 ">
              View Program Information &rarr;
            </button>
          </div>
        </div>
      </section>
      {/*
       * End of Company Programs
       */}
    </main>
  );
}
