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
        <div className="overflow-hidden rounded-lg bg-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="w-full h-48 bg-foreground rounded-2xl"></div>
            <h2>The Believe Day Program</h2>
            <p className="line-clamp-4">
              This is for individuals with complex needs, providing programming
              that has been developed to empower and encourage self-growth. If
              you are looking for a fun way to learn and create new memories
              with old and new friends, this program is for you.
            </p>
            <Link
              href=""
              className="rounded-sm  py-1 text-xs font-semibold text-sky-600 "
            >
              View Program Information &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/*
       * End of Company Programs
       */}
    </main>
  );
}
