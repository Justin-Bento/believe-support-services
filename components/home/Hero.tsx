import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-[38rem] bg-[url('../public/media/support-kampus-production.jpg')] bg-cover bg-center">
      <div className="w-full h-full md:flex md:items-center md:justify-center bg-yellow-900/60 backdrop-blur-sm backdrop-brightness-20">
        <div className="grid p-8 wrapper place-items-center place-content-center">
          <h1 className="font-bold text-white md:text-white type-display-medium md:type-display-large">
            A Strong Community&nbsp;<span className="inline md:block">Starts With Believing!</span>
          </h1>
          <p className="max-w-3xl mt-4 type-body-medium md:type-body-large text-gray-50 md:text-gray-50 text-start md:text-center">We show invidivuals with complex needs how to take ownership of their successes and failures. Working together to create a positive and supportive atmosphere helps to build trust and foster respect. </p>
          <div className="flex flex-col w-full gap-8 mt-8 md:flex-row md:items-center md:justify-center">
            <Link href="/programs" className="inline-flex items-start px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm md:items-center hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Checkout Our Programs</Link>
            <Link href="/blog" className="inline-flex items-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm md:items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Hear Peopels Stories</Link>
          </div>
        </div>
      </div>
    </section>
  )
}