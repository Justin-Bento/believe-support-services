import React from "react";
import ProgramsList from "@/components/ProgramsList";

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
      <section className="">
        <ProgramsList />
      </section>
      {/*
       * End of Company Programs
       */}
    </main>
  );
}
