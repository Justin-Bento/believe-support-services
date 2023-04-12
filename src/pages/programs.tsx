import Head from "next/head";
// End of Next.js Specifc Calls
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { app_programs } from "@/lib/data";

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
      <div className="container p-4 mx-auto mt-16 mb-32 space-y-16">
        <h1 className="">Programs To Keep Stay Beliving</h1>
        {app_programs.map((data:any) => {
          return (
            <>
              <h2 className="headline-msmalledium">{data.title}</h2>
              <p className="body-large">{data.subtitle}</p>
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}
