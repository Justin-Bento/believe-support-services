import React from "react";
import NavigationTop from "@/components/NavigationTop";
import NavigationBottom from "@/components/NavigationBottom";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <>
      <main className="container mx-auto min-h-dvh my-24 space-y-32">
        <section className="lg:text-balance lg:text-center space-y-12">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="shadow-none rounded-full border-foreground/20"
            >
              <Link href="/#" className="relative">
                Upcomming Events at Believe &nbsp;
                <span className="font-semibold text-primary space-nowrap">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Button>
            <h1 className="scroll-m-20 sm:text-6xl/18 font-bold tracking-tight">
              A Strong Community Starts With Beliving!
            </h1>
            <p className="text-lg">
              We help individuals with complex needs, by offering programs
              focused on life skills, personal development, recreational
              activities, and social support groups, to help them be the best
              version on themselves.
            </p>
            <div className="space-x-4">
              <Button>Get In Touch With A Representative</Button>
              <Button variant="secondary" className="shadow-none">
                View Available Programs
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-video bg-neutral-300 rounded-lg overflow-hidden">
            <Image
              fill
              src="/media/hero-image.webp"
              alt="Hodges Bay Club garnished with our Island Microgreens"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Program Name</CardTitle>
                <CardDescription>
                  Program Description Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae inventore adipisci cumque rem dolorem
                  temporibus earum aperiam provident assumenda tenetur.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Link To Program &rarr;
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Program Name</CardTitle>
                <CardDescription>
                  Program Description Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae inventore adipisci cumque rem dolorem
                  temporibus earum aperiam provident assumenda tenetur.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Link To Program &rarr;
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Program Name</CardTitle>
                <CardDescription>
                  Program Description Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae inventore adipisci cumque rem dolorem
                  temporibus earum aperiam provident assumenda tenetur.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Link To Program &rarr;
                </CardAction>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* <...> End Of Hereo Section <...> */}
        <section className="">
          <Card className="bg-primary/10 text-center border-none shadow-none">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Say notified when we launch programs.
              </h2>
              <p className="">
                Reprehenderit ad esse et non officia in nulla. Id proident
                tempor incididunt nostrud nulla et culpa.
              </p>
              <div className="flex w-full max-w-sm lg:mx-auto items-center lg:justify-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-foreground/20 shadow-none"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-y-24 lg:gap-x-12">
          <div className="w-full order-first space-y-3 flex flex-col justify-center items-start">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Become The Superstar You Want To Be, While With Our Interactive
              Prograsms!
            </h3>
            <p className="text-lg/7 text-foreground">
              We work to build a community where everyone is included and
              respected. We understand that everyone has different views and try
              to create a place where people can talk openly and work..
            </p>
            <Button variant="link" className="pl-0">
              View Our Program &rarr;
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded bg-foreground/30 rounded-lg">
            <Image
              fill
              src="/media/believe-support-services--images.webp"
              alt="Hodges Bay Club garnished with our Island Microgreens"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="lg:order-last flex flex-col justify-center items-start gap-4">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Become The Superstar You Want To Be, While With Our Interactive
              Prograsms!
            </h3>
            <p className="text-lg/7 text-foreground">
              We work to build a community where everyone is included and
              respected. We understand that everyone has different views and try
              to create a place where people can talk openly and work..
            </p>
            <Button variant="link" className="pl-0">
              View Our Program &rarr;
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded bg-foreground/30 rounded-lg">
            <Image
              fill
              src="/media/believe-support-services--life-skills.webp"
              alt="Hodges Bay Club garnished with our Island Microgreens"
              className="object-cover object-center rounded-xl"
            />
          </div>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
        <section className="">
          <Card className="bg-primary/10 text-center border-none shadow-none">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Start Believing In Yourself Today.
              </h2>
              <p className="">
                Reprehenderit ad esse et non officia in nulla. Id proident
                tempor incididunt nostrud nulla et culpa.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="shadow-none">Sign Up With A Trial</Button>
                <Button variant="secondary" className="shadow-none">
                  Learn More About Our Program &rarr;
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
      </main>
    </>
  );
}
