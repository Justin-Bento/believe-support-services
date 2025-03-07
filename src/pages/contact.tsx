import Head from "next/head";
// End of Next.js Specifc Calls
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Head>
        <title>Contact - Believe Support Services</title>
        <meta
          name="description"
          content="Helping individuals with complex needs to help them be the best version on themselves and their community."
        />
      </Head>
      <main className="container p-4 mx-auto my-16 space-y-16">
        <section className="">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-base font-semibold leading-7 text-yellow-600">
              Get the help you need
            </p>
            <h2 className="mt-2 font-bold display-medium">Support center</h2>
            <p className="mt-3 body-large">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </section>
        {/*
         * Contact Center
         */}
        <form action="#" method="POST" className="">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="body-medium">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md  bg-transparent dark:bg-primary-950   border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="body-medium">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="bg-transparent  dark:bg-primary-950  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="body-medium">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="bg-transparent dark:bg-primary-950 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="body-medium">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="bg-transparent  dark:bg-primary-950  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="body-medium">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 text-gray-400 bg-transparent border-0 rounded-md dark:bg-primary-950 bg-none pr-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full bg-transparent  dark:bg-primary-950  rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="body-medium">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="bg-transparent  dark:bg-primary-950  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex items-center h-6">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-indigo-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="body-small">
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold text-gray-950 dark:text-yellow-600"
                >
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Let&#39;s talk
            </button>
          </div>
        </form>
        {/*
         * Contact Form
         */}
        <section className="">
          <div className="">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="font-bold headline-medium">Our offices</h2>
              <p className="mt-3 body-large">
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div>
                <h3 className="pl-6 title-medium">Los Angeles</h3>
                <address className="pt-2 pl-6 not-italic border-l border-gray-200 body-medium dark:border-gray-500">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div>
                <h3 className="pl-6 title-medium">New York</h3>
                <address className="pt-2 pl-6 not-italic border-l border-gray-200 body-medium dark:border-gray-500">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div>
                <h3 className="pl-6 title-medium">Toronto</h3>
                <address className="pt-2 pl-6 not-italic border-l border-gray-200 body-medium dark:border-gray-500">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div>
                <h3 className="pl-6 title-medium">London</h3>
                <address className="pt-2 pl-6 not-italic border-l border-gray-200 body-medium dark:border-gray-500">
                  <p>114 Cobble Lane</p>
                  <p>London N1 2EF</p>
                </address>
              </div>
            </div>
          </div>
        </section>
        {/*
         * Company Offices
         */}
      </main>
    </>
  );
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
