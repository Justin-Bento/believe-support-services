<<<<<<< HEAD
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineLink } from "react-icons/ai"
=======
import Head from "next/head";
// End of Next.js Specifc Calls
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { app_programs } from "@/lib/data";
import Link from "next/link";
>>>>>>> 3e1eb3fc5bd0702b5e1b88a2397f5f78df589c3e

export default function programs() {
  return (
    <>
<<<<<<< HEAD
      <Appbar />
      <main className="container p-8 mx-auto space-y-8 md:py-32">
        <section className="" aria-label="programs-headline">
          <h1 className="font-bold headline-large">Programs Offered By Believe Support Services </h1>
        </section>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="believe-support-services-programs--all">
          {programs_iinfo.map((data: any) => {
            return <ProgramCard key={data.title.toString()} URL={`/programs/${data.title.toString().replace(/\s+/g, '-').toLowerCase()}`} Headline={data.title} Description={data.description} />
          })}
        </section>
      </main>
=======
      <Head>
        <title>Programs - Believe Support Services</title>
        <meta name="description" content="Helping individuals with complex needs to help them be the best version on themselves and their community." />
      </Head>
      <Appbar />
      <div className="container p-4 mx-auto my-32 mt-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Programs To Keep Stay Beliving</h1>
        <div className="flex flex-col gap-8">
          {app_programs.map((data: any) => {
            return (
              <>
                <Link href={`/programs/${data.title.toString().toLowerCase().split(' ').join('-')}`} className="flex flex-col gap-2 p-12 rounded-2xl bg-primary-900">
                  <h2 className="title-medium">{data.title}</h2>
                  <p className="max-w-2xl prose-sm text-slate-900 dark:text-slate-300">{data.subtitle}</p>
                </Link>
              </>
            )
          })}
        </div>
      </div>
>>>>>>> 3e1eb3fc5bd0702b5e1b88a2397f5f78df589c3e
      <Footer />
    </>
  )
}
<<<<<<< HEAD

function ProgramCard(props: any) {
  return (
    <>
      <Link href={props.URL} className="overflow-hidden transition-all rounded-lg drop-shadow-sm hover:drop-shadow-none bg-theme hover:bg-primary-100/70">
        <div className="relative h-48 px-4 py-5 sm:p-6">
          <Image fill quality={60} src="/media/hero-image.webp" alt="Hello World" className="object-cover object-center rounded-t-lg" />
        </div>
        <div className="flex flex-col gap-1.5 p-4 sm:px-6">
          <h2 className="font-bold title-medium">{props.Headline || "Card Title For Programs"}</h2>
          <p className="body-medium">{props.Description}</p>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-2 py-1.5 text-sm font-semibold text-primary-600 "
          >
            <AiOutlineLink />
            Button text
          </button>
        </div>
      </Link>
    </>
  )
}

const programs_iinfo = [
  {title: "Day Program", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  {title: "Fitness & Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  {title: "Residential Program", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." },
  {title: "Vocational Camp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non officia placeat." }
]
=======
>>>>>>> 3e1eb3fc5bd0702b5e1b88a2397f5f78df589c3e
