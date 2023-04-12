import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { testimonials } from "@/lib/data"

export default function index() {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
        <meta name="description" content="Helping individuals with complex needs to help them be the best version on themselves and their community." />
      </Head>
      <Appbar />
      <main className="container p-4 mx-auto mt-16 mb-32 space-y-32">
        <Hero />
        <Newsletter />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
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
          <p className="prose-lg max-w-prose text-start md:text-center md:mx-auto text-slate-600 dark:text-slate-300">
            We Help individuals with complex needs, by offering programs focused
            on life skills, personal development, recreational activities, and
            social support groups, to help them be the best version on
            themselves.{" "}
          </p>
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-center">
            <Link
              href="/signup"
              className="px-3 py-2 font-semibold rounded-md body-medium text-primary-50 bg-primary-600 dark:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get In Touch With A Representative
            </Link>
            <Link
              href="/programs"
              className="rounded-md bg-primary-100 px-2.5 py-1.5 body-medium inline-flex items-center font-semibold text-primary-600 hover:bg-primary-100"
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
    </>
  );
}


function Newsletter() {
  return (
    <div className="py-16s">
      <div className="relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="max-w-2xl mx-auto text-3xl font-extrabold text-center headline-large">
          Get notified when we’re launching.
        </h2>
        <p className="max-w-xl mx-auto mt-2 text-center body-large ">
          Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
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
            className="min-w-0 flex-auto rounded-md border-0 bg-primary-900/10 px-3.5 py-2  placeholder-slate-900 ring-1 ring-inset ring-primary-400/50 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </form>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
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
    </div>
  )
}

function Features() {
  return (
    <>
      <section className="">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h3 className="mb-4 font-extrabold tracking-tight capitalize headline-large">Become The Superstar You Want To Be, While With Our Interactive Prograsms!</h3>
            <p className="mb-5 prose text-slate-600 dark:text-slate-300">
              We work to build a community where everyone is included and respected. We understand that everyone has different views and try to create a place where people can talk openly and work..
            </p>
            <button
              type="button"
              className="rounded-md bg-primary-50 px-2.5 py-1.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-100"
            >
              Button text
            </button>          </div>
          <div className="relative w-full h-full py-48 ">
            <Image fill quality={50} src="/media/believe-support-services--images.webp" alt="community comming togther" className="object-cover object-center rounded-2xl" />
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h3 className="mb-4 font-extrabold tracking-tight capitalize headline-large">Grow by learning and experiencing new things and moving. With our Interactive programs!!</h3>
            <p className="mb-5 prose text-slate-600 dark:text-slate-300">
              We work to build a community where everyone is included and respected. We understand that everyone has different views and try to create a place where people can talk openly and work together.
            </p>
            <button
              type="button"
              className="rounded-md bg-primary-50 px-2.5 py-1.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-100"
            >
              Button text
            </button>
          </div>
          <div className="relative w-full h-full py-48 ">
            <Image fill quality={50} src="/media/believe-support-services--life-skills.webp" alt="community comming togther" className="object-center rounded-2xl" />
          </div>
        </div>
      </section>

    </>
  )
}

function CallToAction() {
  return (
    <div className="bg-theme rounded-2xl">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold display-small">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="max-w-xl mx-auto mt-6 body-large">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-primary-950">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="title-medium text-primary-700 dark:text-primary-300">Testimonials</h2>
          <p className="mt-2 font-extrabold capitalize headline-large">
            We have worked with thousands of amazing people supporting Us!
          </p>
        </div>
        <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="p-8 prose-sm rounded-2xl bg-theme">
                  <blockquote className="text-primary-900 dark:text-primary-100">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4">
                    <div className="relative w-9 h-9">
                      <Image fill quality={50} className="rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    </div>
                    <div className="prose-sm">
                      <div className="font-semibold text-primary-900 dark:text-primary-100">{testimonial.author.name}</div>
                      <div className="text-primary-600 dark:text-primary-300">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}