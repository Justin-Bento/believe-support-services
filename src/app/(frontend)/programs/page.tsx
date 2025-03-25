"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs_info } from "@/lib/data";
import { CreateSlug } from "@/lib/utils";

interface programs_info_interface {
  title: string;
  description: string;
}

export default function page() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
      <section className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 mt-12">
        {programs_info.map((data: programs_info_interface) => {
          return (
            <>
              <Link
                key={data.title}
                href={`/programs/${CreateSlug(data.title)}`}
                className={`group transition-all rounded-xl border-2 border-primary-100 active:bg-primary-100 dark:border-primary-800 bg-primary-50 hover:border-primary-200 hover:bg-primary-50 dark:bg-primary-900 dark:hover:bg-primary-800 dark:active:bg-primary-700 ${
                  hoveredCard && hoveredCard !== data.title ? "opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredCard(data.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-64 relative overflow-hidden">
                  <Image
                    fill
                    src="/media/hero-image.webp"
                    alt={data.title}
                    className="object-cover rounded-t-xl group-hover:contrast-125"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-lg font-bold leading-none tracking-tight">
                    {data.title}
                  </p>
                  <p className="text-sm leading-5 opacity-80 line-clamp-3">
                    {data.description}
                  </p>
                  <button
                    type="button"
                    className="rounded-md bg-transparent pr-2.5 py-1 text-xs font-medium capitalize text-gray-900 group-hover:underline dark:text-white dark:opacity-70"
                  >
                    Read About The Program &rarr;
                  </button>
                </div>
              </Link>
            </>
          );
        })}
      </section>
      {/*
       * End of Company Programs
       */}
    </main>
  );
}
