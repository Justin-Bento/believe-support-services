import React from "react";
import NavigationTop from "./components/NavigationTop";
import NavigationBottom from "./components/NavigationBottom";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <>
      <NavigationTop />
      <main className="container mx-auto min-h-dvh my-24 space-y-32">
        <section className="lg:text-balance lg:text-center space-y-12">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="shadow-none rounded-full border-netural-400"
            >
              <Link href="/#" className="relative">
                Upcomming Events at Believe &nbsp;
                <span className="font-semibold text-neutral-600 dark:text-neutral-300 space-nowrap">
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
          <div className="w-full aspect-square lg:aspect-video bg-neutral-300 rounded-lg overflow-hidden">
            <p className="opacity-0">hello world</p>
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
      </main>
      <NavigationBottom />
    </>
  );
}
