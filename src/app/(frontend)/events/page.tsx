import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh my-24">
      <section className="space-y-6">
        <h1 className="scroll-m-20 font-semibold tracking-tight text-5xl">
          Raise Awareness With Our Events.
        </h1>
        <p className="max-w-[110ch] text-balance">
          Stay connected with Believe Support Services through our exciting and
          enriching events. From workshops and seminars to community gatherings
          and celebrations, our events are designed to promote learning, social
          interaction, and a sense of belonging.
        </p>
        <ul className="flex items-center gap-4">
          <li className="">
            <Button
              size="sm"
              variant="outline"
              className="shadow-none border-natural/70 font-mono uppercase text-xs"
            >
              All Events
            </Button>
          </li>
          <li className="">
            <Button
              size="sm"
              variant="outline"
              className="shadow-none border-natural/70 font-mono uppercase text-xs"
            >
              Upcomming Events
            </Button>
          </li>
          <li className="">
            <Button
              size="sm"
              variant="outline"
              className="shadow-none border-natural/70 font-mono uppercase text-xs"
            >
              Previous Events
            </Button>
          </li>
        </ul>
      </section>
    </main>
  );
}
