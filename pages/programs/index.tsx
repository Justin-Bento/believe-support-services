import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../../sanity";
import imageUrlBuilder from '@sanity/image-url'
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

function urlFor(source: any) {
  return builder.image(source)
}


export default function index({ programs }: any) {
  return (
    <>
      <Head>
        <title>Programs - Believe Support Services</title>
      </Head>
      <main className="p-4 my-16 space-y-8 wrapper">
        <section className="">
          <h1 className="type-headline-large">
            The Key Components to Believe!
          </h1>
          <p className="max-w-3xl my-2 type-body-large">
            We offer special camps for those with special needs or disabilities.
            Our camps will be a great way for individuals to have fun, learn new
            skills, make new friends, and have a great time.
          </p>
          <cite className=" type-body-small">
            Checkout our events page to see what programs are running at different  <Link href="/events"  className="type-link">times of the year</Link>.
          </cite>
          <hr className="w-full mt-8 border border-stone-300" />
        </section>
        {/* End of Program Headline */}
        <section className="flex flex-col gap-8">
          {programs.map((data: any) => {
            return (
              <>
                <Link key={data._id} href={`/programs/${data.slug.current}`}>
                  <div className="relative">
                    <div className="relative w-full px-8 py-24 overflow-hidden transition-all bg-stone-800/80 hover:bg-stone-800/60 rounded-xl h-72 hover:-translate-y-1">
                      <div className="absolute inset-0 transition-all opacity-50 mix-blend-multiply saturate-0 hover:saturate-100 filter">
                        <Image fill src={`/media/support-kampus-production.jpg`} alt={data.title} className="absolute object-cover w-full rounded-xl h-72" quality={60} />
                      </div>
                      <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-white type-title-large">{data.title}</h3>
                        <p className="text-white max-w-prose type-body-large">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const query = `*[_type == "programs"]{_id, title, description, slug, mainImage { asset->{ url }}}`;
  const programs = await sanityClient.fetch(query);
  return {
    props: {
      programs,
    }, // will be passed to the page component as props
  };
}