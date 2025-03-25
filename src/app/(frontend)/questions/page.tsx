import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh my-24">
      <section className="space-y-4">
        <h1 className="text-5xl capitalize font-semibold">
          Frequently asked questions.
        </h1>
        <p className="max-w-[100ch] text-lg/7 text-balance">
          After sending a survey we pulled some of the most frequently asked
          questions asked by our customers. We received and compiled them all
          into one place for your convenience. Have more questions? Please reach
          out!
        </p>
      </section>
      <section className="">
        <ul className="space-y-4 mt-8" role="list">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`$${index++}`}>
                  <AccordionTrigger className="text-lg font-semibold capitalize hover:cursor-pointer">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className="text-base max-w-[100ch] text-balance text-foreground/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet minima repudiandae illo! Aliquid natus ea nobis
                    eligendi ex voluptas corporis!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
