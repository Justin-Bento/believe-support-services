import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineLink } from "react-icons/ai"

export default function programs() {
  return (
    <>
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
      <Footer />
    </>
  )
}

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
