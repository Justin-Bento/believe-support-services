import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function index() {
  return (
    <main className="container p-4 mx-auto space-y-32">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <>
      <section className="">
        <div className="my-8 space-y-6">
          <div className="justify-start hidden sm:flex sm:justify-center">
            <div className="relative px-3 py-1 rounded-full body-medium text-primary-950 dark:text-primary-50 ring-1 ring-primary-900/10 dark:ring-primary-100/30 hover:ring-primary-900/20 dark:hover:ring-primary-100/30">
              Upcomming Events At Believe. &nbsp;
              <a
                href="#"
                className="font-semibold text-primary-600 dark:text-primary-300 primary-950 space-nowrap"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="font-bold display-medium md:text-center">
            A Strong Community Starts With Beliving!
          </h1>
          <p className="text-lg body-large text-start sm:text-center lg:max-w-[70ch] lg:mx-auto">
            We Help individuals with complex needs, by offering programs focused
            on life skills, personal development, recreational activities, and
            social support groups, to help them be the best version on
            themselves.{" "}
          </p>
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-center">
            <Link
              href="/signup"
              className="px-3 py-2 text-sm font-semibold rounded-md text-primary-50 bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get In Touch With A Representative
            </Link>
            <Link
              href="/programs"
              className="rounded-md bg-primary-50 px-2.5 py-1.5 body-medium inline-flex items-center font-semibold text-primary-600 shadow-sm hover:bg-primary-100"
            >
              View Available Programs
            </Link>
          </div>
        </div>
        {/* END: Hero :: Actions */}
        <div className="overflow-hidden bg-transparent ">
          <div className="px-4 py-5 sm:p-6 w-full h-[420px] md:h-[640px] relative z-10">
            <Image
              fill
              quality={40}
              src="/media/hero-image.webp"
              alt="Hodges Bay Club garnished with our Island Microgreens"
              className="object-cover object-center rounded-xl"
            />
          </div>
        </div>
        {/* END: Hero :: Media */}
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          {/* END: Hero :: 01 Core Programs */}
          <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
            <div className="px-4 py-5 space-y-1.5 sm:p-6">
              <h2 className="px-2 font-bold title-medium">Day Programs</h2>
              <p className="px-2 body-medium">
                Semi-Independent program designed to cater to adults with
                complex needs duirng their stay.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2 py-1.5 text-sm font-semibold text-primary-600 "
              >
                <AiOutlineLink />
                Button text
              </button>
            </div>
          </div>
          {/* END: Hero :: 02 Core Programs */}
          <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
            <div className="px-4 py-5 space-y-1.5 sm:p-6">
              <h2 className="px-2 font-bold title-medium">
                Fitness & Health Programs
              </h2>
              <p className="px-2 body-medium">
                Semi-Independent program designed to cater to adults with
                complex needs duirng their stay.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2 py-1.5 text-sm font-semibold text-primary-600 "
              >
                <AiOutlineLink />
                Button text
              </button>
            </div>
          </div>
          {/* END: Hero :: 03 Core Programs */}
          <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
            <div className="px-4 py-5 space-y-1.5 sm:p-6">
              <h2 className="px-2 font-bold title-medium">
                Residential Programs
              </h2>
              <p className="px-2 body-medium">
                Semi-Independent program designed to cater to adults with
                complex needs duirng their stay.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2 py-1.5 text-sm font-semibold text-primary-600 "
              >
                <AiOutlineLink />
                Button text
              </button>
            </div>
          </div>
        </div>
        {/* END: Hero :: Core Programs */}
      </section>
    </>
  );
}
