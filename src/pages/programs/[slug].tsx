import Head from "next/head";
<<<<<<< HEAD
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramSlug() {
  return (
    <>
      <Head>
        <title>Program</title>
      </Head>
      <Appbar />
      <main className="py-32">
        <div className="container grid gap-8 p-4 mx-auto lg:grid-cols-4">
          <div className="grid-cols-1 ">
            <TableOfContents programs={dummyPrograms} />
          </div>
          <div className="col-span-3">
            <ContentCentered />
          </div>
        </div>
      </main>
      <SignUpToProgram />
=======
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
>>>>>>> 3e1eb3fc5bd0702b5e1b88a2397f5f78df589c3e
      <Footer />
    </>
  );
}
<<<<<<< HEAD

type Program = {
  id: number;
  title: string;
};

type TableOfContentsProps = {
  programs: Program[];
};
const dummyPrograms = [
  { id: 1, title: "Believe Day Program" },
  { id: 2, title: "Believe Fitness & Health" },
  { id: 3, title: "Believe Residential" },
  { id: 4, title: "After School & Weekend" },
  { id: 5, title: "Social Groups" },
  { id: 6, title: "Life Skills" },
  { id: 7, title: "Day Program" },
  { id: 8, title: "Vocational Program:" },
  { id: 9, title: "Basketball Program:" },
];

function TableOfContents({ programs }: TableOfContentsProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <section className="w-full p-4 rounded bg-primary-100 ">
      <div className="flex flex-col gap-2 lg:flex-col lg:items-start lg:ml-4">
        <button className="text-primary-700 title-medium " onClick={toggleList}>
          Table Of Contents
          <span className="ml-2 lg:hidden">{showList ? "▲" : "▼"}</span>
        </button>
        <div className="flex flex-col items-start space-y-2 lg:items-stretch lg:flex-row lg:space-y-0 lg:w-auto">
          <ul
            role="list"
            aria-label="Table of Contents"
            className={`${showList ? "block" : "hidden"
              } lg:block flex flex-col items-start space-y-2`}
          >
            {programs.map((program) => (
              <li
                key={program.id}
                className="w-full p-2 prose text-primary-900 hover:bg-primary-200/30 hover:cursor-pointer active:opacity-80"
              >
                {program.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// A Link
function ContentCentered() {
  return (
    <div className="my-8 lg:my-0">
      <div className="space-y-4 text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-yellow-600">
          Core Program
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Believe Day Progam
        </h1>
        <p className="text-xl leading-8">
          Looking for a way to gain self-confidence, meet new friends, and have
          fun all at the same time? Look no further than the Believe Day Program
          (M.O.V.E)!
        </p>
        <figure className="space-y-6">
          <div className="relative w-full h-96 aspect-video">
            <Image
              fill
              quality={70}
              className="object-cover object-center rounded-xl bg-gray-50"
              src="/media/believe-day-program.webp"
              alt=""
            />
          </div>
          <figcaption className="flex text-gray-500 body-medium gap-x-2">
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="space-y-6">
          <p>
            Our program is specifically designed to empower individuals with
            complex needs to achieve their goals and develop their full
            potential. Our team of expert instructors provides engaging
            programming to promote self-growth and teamwork, while also creating
            new memories with old and new friends.
          </p>
          <p>
            Throughout the week, participants will have the opportunity to
            engage in a variety of exciting activities, including arts and
            crafts, music, drama, and recreation. These activities are not only
            fun and engaging, but also help to improve social skills,
            self-esteem, and self-confidence.
          </p>
          <p>
            Join us at the Believe Centre in Whitby, Ontario from Monday to
            Friday, 8:00am to 4:00pm, for a transformative experience. Our
            program is perfect for anyone looking to connect with others and
            achieve their goals in a supportive and fun environment. Let's
            M.O.V.E forward together!
          </p>
        </div>
      </div>
    </div>
  );
}
function SignUpToProgram() {
  return (
    <div className="bg-yellow-500/30">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2 className="headline-medium">
            Help your Indivual Become The Supertar They Want To Be!
          </h2>
          <p className="max-w-xl mx-auto body-large">
            Sign up today to become part of our supportive community and start your journey towards self-growth and personal empowerment.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-white">
              Call Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
>>>>>>> 3e1eb3fc5bd0702b5e1b88a2397f5f78df589c3e
