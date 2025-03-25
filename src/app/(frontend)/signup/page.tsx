import React from "react";
import { RiFile2Fill } from "react-icons/ri";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function signup() {
  return (
    <>
      <main className="p-4 py-24 container mx-auto">
        <section>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Work With Believe
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We provide a safe, friendly, and positive environment to help
            individuals develop a healthy lifestyle. We do this by creating
            opportunities for young adults.
          </p>
        </section>
        {/*
         * End of Header Section
         */}
        <form>
          <div className="space-y-24">
            <div className="pb-12 border-b border-foreground/10">
              <div className="grid grid-cols-1 mt-10 gap-12 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Label
                    htmlFor="first-name"
                    className="font-semibold capitalize"
                  >
                    First name
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label
                    htmlFor="last-name"
                    className="font-semibold capitalize"
                  >
                    Last name
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="email" className="font-semibold capitalize">
                    Email address
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="email" className="font-semibold capitalize">
                    Phone Number
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="phoneNumber"
                      autoComplete="phoneNumber"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="country" className="font-semibold capitalize">
                    Country
                  </Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border border-foreground/60 rounded-md px-4 py-2 w-full mt-4 text-start">
                      Show Options
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuItem>Canada</DropdownMenuItem>
                      <DropdownMenuItem>
                        United States of America
                      </DropdownMenuItem>
                      <DropdownMenuItem>United Kingdom</DropdownMenuItem>
                      <DropdownMenuItem>Portugal</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="country" className="font-semibold capitalize">
                    What job are you looking for?
                  </Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border border-foreground/60 rounded-md px-4 py-2 w-full mt-4 text-start">
                      Show Job Options
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuItem>Voulenteer</DropdownMenuItem>
                      <DropdownMenuItem>Parttime</DropdownMenuItem>
                      <DropdownMenuItem>Open</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="col-span-full">
                  <Label
                    htmlFor="street-address"
                    className="font-semibold capitalize"
                  >
                    Street address
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Label htmlFor="city" className="font-semibold capitalize">
                    City
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="region" className="font-semibold capitalize">
                    State / Province
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label
                    htmlFor="postal-code"
                    className="font-semibold capitalize"
                  >
                    ZIP / Postal code
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="shadow-none border-foreground/60"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <Label
                    htmlFor="cover-photo"
                    className="font-semibold capitalize"
                  >
                    Resume
                  </Label>
                  <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-foreground">
                    <div className="text-center">
                      <RiFile2Fill
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-hidden focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <Input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-12 border-b border-gray-900/10">
              <h2 className="text-xl font-bold text-foreground">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-foreground/50">
                We&#39;ll always let you know about important changes, but you
                pick what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-base/6 text-foreground font-semibold">
                    By Email
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <Input id="comments" name="comments" type="checkbox" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="comments">Comments</label>
                        <p className="text-foreground/50">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <Input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <Label htmlFor="candidates">Candidates</Label>
                        <p className="text-foreground/50">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <Input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="w-4 h-4 border-foreground/60 rounded-sm text-foreground focus:ring-foreground"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <Label htmlFor="offers">Offers</Label>
                        <p className="text-foreground/50">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-base/6 font-semibold leading-6 text-foreground">
                    Push Notifications
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-foreground/75">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <Input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-foreground/60 text-foreground focus:ring-foreground"
                      />
                      <Label
                        htmlFor="push-everything"
                        className="font-semibold capitalize"
                      >
                        Everything
                      </Label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-foreground/60 text-foreground focus:ring-foreground"
                      />
                      <Label
                        htmlFor="push-email"
                        className="font-semibold capitalize"
                      >
                        Same as email
                      </Label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-foreground/60 text-foreground focus:ring-foreground"
                      />
                      <Label
                        htmlFor="push-nothing"
                        className="font-semibold capitalize"
                      >
                        No push notifications
                      </Label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start mt-6 gap-12">
            <Button type="submit" className="w-32">
              Save
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
