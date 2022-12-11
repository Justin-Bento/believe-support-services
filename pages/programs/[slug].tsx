import { sanityClient } from "../../sanity";
import PortableText from 'react-portable-text'
import Head from "next/head";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const query = `*[_type == "programs"]{_id, slug { current }}`;
  const programs = await sanityClient.fetch(query);
  const paths = programs.map((program) => ({
    params: {
      slug: program.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const query = `*[_type == "programs" && slug.current == $slug][0]{ _id, _createdAt, title, author -> {   name,   image }, slug { current }, description, mainImage, body }`;
  const program = await sanityClient.fetch(query, { slug: params?.slug });
  if (!program) {
    return notFound;
  }
  return {
    props: {
      program,
    },
    //after 60s it will updated the old cache.
    revalidate: 60,
  };
}

export default function ProgramSlug({ program }) {
  console.log(program);
  return (
    <>
      <main className="container p-4 mx-auto my-20 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 capitalize lead-ing-7 md:leading-tight md:text-4xl">{program.title}</h1>
        <p className="text-gray-700">{program.description}</p>
        <hr className="mt-2 mb-4" />
        <article className="leading-7 text-gray-500">
        <PortableText content={program.body} serializers />
        </article>
      </main>
    </>
  );
}
