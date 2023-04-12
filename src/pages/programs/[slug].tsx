import Head from "next/head";
import Image from "next/image";
// End of Next.js Specifc Calls
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function ProgramsSlug() {
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
      <main className="container p-4 mx-auto mt-16 mb-32 space-y-16">
        <section className="">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
            Believe Day Program
          </h1>
          <p className="mt-6 prose-xl text-gray-900 dark:text-gray-300 max-w-[70ch]">
            M.O.V.E for individuals with complex needs,
            provides programming developed to empower and encourage self growth.
            If you are looking for a fun way to learn and create new memories
            with old and new friends, this program is for you.
          </p>
        </section>
        <section className="">
          <div className="relative w-full h-96">
            <Image fill quality={40} src="/media/support-services-small.jpg" alt="We're better when we're united" className="object-cover object-center rounded-2xl" />
          </div>
        </section>
        <section className="mt-6 prose-xl text-gray-900 dark:text-gray-300 max-w-[70ch]">
          <p>
            M.O.V.E for individuals with complex needs,
            provides programming developed to empower and encourage self growth.
            If you are looking for a fun way to learn and create new memories
            with old and new friends, this program is for you.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
