import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HiOutlineHeart, HiCheck } from "react-icons/hi";

export default function index() {
  return (
    <>
      <main className="mb-20 space-y-20">
        <section className="bg-slate-900">
          <div className="w-full h-[95vh] grid place-content-center">
            <div className="container p-4 mx-auto max-w-7xl text-start">
              <h1 className="max-w-2xl text-5xl font-medium leading-tight text-slate-50">
                A Strong Community Starts With Believing In You!
              </h1>
              <p className="max-w-2xl mt-4 mb-6 text-xl font-medium leading-7 tracking-wide text-slate-50">
                Besides working with us enterprises as a partner for
                digitalization, we have built enterprise products for common
                pain points that we have encountered in various products and
                projects.
              </p>
              <button className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Programs
              </button>
              <button className="inline-block px-6 py-2.5 bg-transparent text-secondary-600 font-medium text-xs leading-tight uppercase rounded hover:text-secondary-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">
                Programs
              </button>
            </div>
          </div>
        </section>
        <section className="container p-4 mx-auto max-w-7xl text-start">
          <p className=""></p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="p-8 border border-gray-700 rounded-lg">
              <HiOutlineHeart size="2rem" className="mb-4 text-secondary-500" />
              <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900 capitalize">Day Program</h3>
              <p className="text-base leading-relaxed text-gray-600">Manage all your online and offline sales in one place with a single integration.</p>
              <ul className="mt-2 mb-4 space-y-2 text-gray-600">
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
              </ul>
              <Link href="/programs/day-program" className="inline-block px-5 py-2 text-xs font-medium leading-tight uppercase transition duration-150 ease-in-out border-2 rounded text-secondary-600 border-secondary-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Learn More</Link>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg">
              <HiOutlineHeart size="2rem" className="mb-4 text-secondary-500" />
              <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900 capitalize">Residential Program</h3>
              <p className="text-base leading-relaxed text-gray-600">Manage all your online and offline sales in one place with a single integration.</p>
              <ul className="mt-2 mb-4 space-y-2 text-gray-600">
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
              </ul>
              <Link href="/programs/residential-program" className="inline-block px-5 py-2 text-xs font-medium leading-tight uppercase transition duration-150 ease-in-out border-2 rounded text-secondary-600 border-secondary-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Learn More</Link>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg">
              <HiOutlineHeart size="2rem" className="mb-4 text-secondary-500" />
              <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900 capitalize">Fitnes & Health Program</h3>
              <p className="text-base leading-relaxed text-gray-600">Manage all your online and offline sales in one place with a single integration.</p>
              <ul className="mt-2 mb-4 space-y-2 text-gray-600">
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore.</li>
              </ul>
              <Link href="/programs/fitness-and-health" className="inline-block px-5 py-2 text-xs font-medium leading-tight uppercase transition duration-150 ease-in-out border-2 rounded text-secondary-600 border-secondary-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Learn More</Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-secondary-700 text-secondary-50">
          <div className="container p-4 mx-auto max-w-7xl">
            <h3 className="text-3xl font-semibold text-start lg:text-center">Follow Us & Stay In The Loop.</h3>
            <p className="max-w-4xl mt-1.5 text-start lg:text-center lg:mx-auto">We want individuals with complex needs to feel better by being active, education, and empowerment. So they can work towards a healthy lifestyle unique to them. Join today and start learning new ways to stay healthy!</p>
            <span className="flex flex-col gap-4 mt-8 lg:flex-row lg:justify-center">
              <Link href="" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition-all">Facebook</Link>
              <Link href="" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition-all">Instagram</Link>
              <Link href="" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition-all">Twitter</Link>
            </span>
          </div>
        </section>
        <section className="container p-4 mx-auto max-w-7xl text-start">
          <h4 className="text-3xl font-semibold">About Autism Spectrum Disorder</h4>
          <p className="">Autism is a lifelong neurodevelopmental disorder that affects the way the brain works. While there is no cure for autism, people’s symptoms, abilities and experiences can improve over time with the help of evidence-based therapies and interventions.</p>
        </section>
        <section className="py-16 bg-primary-400">
          <div className="container p-4 mx-auto max-w-7xl text-start">
            <h5 className="text-3xl font-semibold">Learn More About Believe's Programs & Staff</h5>
            <p className="">Believe Support Services supports individuals with complex needs; to help them live a better life.  Our staff is made up of individuals who are passionate about helping others.</p>
          </div>
        </section>
        <section className="container p-4 mx-auto max-w-7xl text-start">
          <h6 className="text-3xl font-semibold">Become a Partner</h6>
          <p className="mt-2 mb-8 text-lg text-gray-700">Let$&#44;s put our heads together to build a successful partnership to benefit both your customers and your business.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
            <div className="flex items-start">
              <HiCheck className="flex-none w-5 h-5 mt-1 mr-2 text-primary" />
              <p className="text-lg text-gray-700">5 Days of Log Retention</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
