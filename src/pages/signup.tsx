import React from "react";
import Head from "next/head";
import { RiFile2Fill } from "react-icons/ri";

export default function signup() {
  return (
    <>
      <Head>
        <title>Sign Up - Believe Support Services</title>
        <meta
          name="programs"
          content=" individuals with complex needs to help them be the best version on themselves and their community."
        />
      </Head>
      <main className="p-4 py-16 lg:container lg:mx-auto lg:max-w-[100ch]">
        <section>
          <h1 className="headline-large">Work With Believe</h1>
          <p className="mt-2 body-large">
            We provide a safe, friendly, and positive environment to help
            individuals develop a healthy lifestyle. We do this by creating
            opportunities for young adults.
          </p>
        </section>
        {/*
         * End of Header Section
         */}
        <form>
          <div className="space-y-12">
            <div className="pb-12 border-b border-gray-900/10">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="form-label">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="form-label">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="form-label">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="phoneNumber"
                      autoComplete="phoneNumber"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-transparent dark:text-white p-2"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="form-label">
                    What job are you looking for?
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-transparent dark:text-white p-2"
                    >
                      <option>Voulenteer</option>
                      <option>Parttime</option>
                      <option>FulL Time</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="form-label">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="form-label">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="input-text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="form-label">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="input-text"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="form-label">
                    Resume
                  </label>
                  <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25 dark:border-gray-50">
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
                          <input
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
              <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-50/50">
                We&#39;ll always let you know about important changes, but you
                pick what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    By Email
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded-sm text-primary-600 focus:ring-primary-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900 dark:text-gray-50"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500 dark:text-gray-50/50">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded-sm text-primary-600 focus:ring-primary-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900 dark:text-gray-50"
                        >
                          Candidates
                        </label>
                        <p className="text-gray-500 dark:text-gray-50/50">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center h-6">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded-sm text-primary-600 focus:ring-primary-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900 dark:text-gray-50"
                        >
                          Offers
                        </label>
                        <p className="text-gray-500 dark:text-gray-50/50">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    Push Notifications
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-50/50">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                      />
                      <label htmlFor="push-everything" className="form-label">
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                      />
                      <label htmlFor="push-email" className="form-label">
                        Same as email
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                      />
                      <label htmlFor="push-nothing" className="form-label">
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start mt-6 gap-x-6">
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-xs bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
