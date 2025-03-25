import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
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
      <section className="">
        <ul className="">
          {events.map((event, index) => (
            <li key={index} className="mb-8 last:mb-0">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Event Image */}
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={event.image}
                        alt={`${event.title} cover image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="p-4 lg:p-6 space-y-4">
                      <CardTitle className="text-xl lg:text-2xl">
                        {event.title}
                      </CardTitle>

                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>

                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CalendarDays className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">
                            <strong>Date:</strong> {event.date} |{" "}
                            <strong>Time:</strong> {event.time} | {event.format}
                          </span>
                        </li>

                        <li className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">
                            <strong>Location:</strong> {event.location}
                          </span>
                        </li>

                        <li className="flex items-start gap-2">
                          <ClipboardList className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">
                            <strong>Registration:</strong> {event.registration}
                          </span>
                        </li>

                        <li className="flex items-start gap-2">
                          <Monitor className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">
                            <strong>Live Stream:</strong>{" "}
                            <Link
                              href={event.livestream}
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Join on Discord
                            </Link>
                          </span>
                        </li>
                      </ul>

                      <Button asChild className="w-full lg:w-auto">
                        <Link href="#register">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
