import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/Button";

export default function index() {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
        <meta
          name="description"
          content="Helping individuals with complex needs to help them be the best version on themselves and their community."
        />
      </Head>
      <main className="container p-4 mx-auto my-12 space-y-32">
        <section className="">
          <div className="my-8 space-y-6">
            <div className="justify-start hidden sm:flex sm:justify-center">
              <Link
                href="/events"
                className="relative px-3 py-1 rounded-full body-medium text-primary-950 dark:text-primary-50 ring-1 ring-primary-900/10 dark:ring-primary-100/30 hover:ring-primary-900/20 dark:hover:ring-primary-100/30"
              >
                Upcomming Events At Believe. &nbsp;
                <span className="font-semibold text-primary-600 dark:text-primary-300 primary-950 space-nowrap">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal text-slate-900 dark:text-primary-100 lg:text-5xl md:text-center">
              A Strong Community Starts With Beliving!
            </h1>
            <p className="text-xl tracking-wide max-w-[80ch] md:text-center md:mx-auto text-slate-600 dark:text-slate-300">
              We help individuals with complex needs, by offering programs
              focused on life skills, personal development, recreational
              activities, and social support groups, to help them be the best
              version on themselves.{" "}
            </p>
            <div className="flex flex-col items-start justify-start w-full gap-4 md:justify-center md:flex-row">
              <div>
                <Link href="/signup">
                  <Button className="w-full">
                    Get In Touch With A Representative
                  </Button>
                </Link>
              </div>
              <div>
                <Link href="/signup">
                  <Button className="w-full" variant="ghost">
                    View Available Programs
                  </Button>
                </Link>
              </div>
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
            <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 dark:bg-primary-900 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
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
            <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 dark:bg-primary-900 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
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
            <div className="overflow-hidden transition-all border rounded-lg bg-primary-200 dark:bg-primary-900 hover:bg-primary-300/30 hover:cursor-pointer border-primary-300">
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
        {/*
         *  End of Hereo Section.
         */}
        <section className="py-16s">
          <div className="relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal dark:text-primary-100">
              Get notified when we’re launching.
            </h2>
            <p className="max-w-xl mx-auto mt-2 leading-7 text-center tracking-wide dark:text-primary-200 ">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor
              incididunt nostrud nulla et culpa.
            </p>
            <form className="flex max-w-md mx-auto mt-10 gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 caret-primary-200 dark:placeholder:text-primary-100/50 capitalize bg-primary-900/10 px-3.5 py-2  placeholder-slate-900 ring-1 ring-inset ring-primary-400/50 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button variant="ghost">Subscribe</Button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#EEBC03" />
                  <stop offset={1} stopColor="#EEBC03" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </section>
        {/*
         * End of Newsletter Section.
         */}
        <section className="">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div>
              <h3 className="scroll-m-20 dark:text-primary-100 pb-2 text-3xl font-bold tracking-wide transition-colors first:mt-0">
                Become The Superstar You Want To Be, While With Our Interactive
                Prograsms!
              </h3>
              <p className="mb-5 prose text-slate-600 dark:text-white/75">
                We work to build a community where everyone is included and
                respected. We understand that everyone has different views and
                try to create a place where people can talk openly and work..
              </p>
              <Button variant="outline">
                <Link href="/programs">View Our Programs</Link>
              </Button>
            </div>
            <div className="relative w-full h-full py-48 ">
              <Image
                fill
                quality={50}
                src="/media/believe-support-services--images.webp"
                alt="community comming togther"
                className="object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h3 className="scroll-m-20 dark:text-primary-100 pb-2 text-3xl font-bold tracking-wide transition-colors first:mt-0">
                Grow by learning and experiencing new things and moving. With
                our Interactive programs!!
              </h3>
              <p className="mb-5 prose text-slate-600 dark:text-white/75">
                We work to build a community where everyone is included and
                respected. We understand that everyone has different views and
                try to create a place where people can talk openly and work
                together.
              </p>
              <Button variant="outline">
                <Link href="/signup">Signup To Events</Link>
              </Button>
            </div>
            <div className="relative w-full h-full py-48 ">
              <Image
                fill
                quality={50}
                src="/media/believe-support-services--life-skills.webp"
                alt="community comming togther"
                className="object-center rounded-2xl"
              />
            </div>
          </div>
        </section>
        {/*
         * End of Features Section.
         */}
        <section className="py-24 sm:py-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-[80ch] mx-auto text-center">
              <h2 className="text-yellow-700 title-medium dark:text-yellow-300">
                Testimonials
              </h2>
              <p className="mt-2 scroll-m-20 pb-2 text-4xl leading-normal font-bold dark:text-primary-50 capitalize tracking-wide transition-colors first:mt-0">
                We have worked with thousands of amazing people supporting Us!
              </p>
            </div>
            <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author.handle}
                    className="pt-8 sm:inline-block sm:w-full sm:px-4"
                  >
                    <figure className="p-8 prose-sm rounded-2xl bg-theme">
                      <blockquote className="text-primary-900 dark:text-primary-100">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="flex items-center gap-x-4">
                        <div className="relative w-9 h-9">
                          <Image
                            fill
                            quality={50}
                            className="rounded-full bg-gray-50"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="prose-sm">
                          <div className="font-semibold text-primary-900 dark:text-primary-100">
                            {testimonial.author.name}
                          </div>
                          <div className="text-primary-600 dark:text-primary-300">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/*
         * End of Testimonial Section.
         */}
        <section className="bg-theme rounded-2xl">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="scroll-m-20 pb-2 text-4xl font-bold dark:text-primary-50 capitalize tracking-wide transition-colors first:mt-0">
                Boost your Knowledege.
                <br />
                Start Believing In Yourself Today.
              </h2>
              <p className="max-w-xl mx-auto mt-4 leading-7 tracking-wide text-opacity-75">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <Button>
                  <Link href="/signup">Get started</Link>
                </Button>
                <Button variant="ghost">
                  <Link href="/signup">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/*
         * End of Call To Action Section.
         */}
      </main>
    </>
  );
}
