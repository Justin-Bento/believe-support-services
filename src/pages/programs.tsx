import Head from "next/head";
// End of Next.js Specifc Calls
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { app_programs } from "@/lib/data";
import Link from "next/link";

export default function programs() {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
        <meta
          name="description"
          content="Helping individuals with complex needs to help them be the best version on themselves and their community."
        />
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
      <Footer />
    </>
  )
}
