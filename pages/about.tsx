import Head from "next/head";
import { HiTrendingUp } from "react-icons/hi";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Believe Support Services</title>
      </Head>
      <main className="space-y-[4rem] mb-[4rem]">
        <section className="py-24 bg-gray-600">
          <div className="p-4 md:container md:mx-auto">
            <h1 className="mt-2 font-serif text-gray-200">Our Mission</h1>
            <p className="text-2xl italic font-medium leading-10 text-gray-100 capitalize max-w-prose">
              We Believe all individuals should embrace who they are, define
              their future and can change the world.
            </p>
          </div>
        </section>
        <section className="p-4 md:container md:mx-auto">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <h2 className="text-2xl font-semibold leading-none text-gray-900 capitalize">
              Who is Believe Support Services?
            </h2>
            <aside className="space-y-4 leading-7 max-w-prose">
              <p>
                Believe Support Services provide a wide variety of programs to
                support individuals with complex needs. We offer programs such
                as life skills, recreation and social groups. Our programs are
                designed to encourage individuals to achieve life goals and
                build independence. Whether you are looking to join us for our
                day, after school or weekend programs, we have a program
                suitable for your needs.
              </p>
              <p>
                We are a fee-for-service company established that became
                established in October 2006. We provide specialized services for
                children, youth and adult individuals experiencing behavioral,
                complex needs and social difficulties to help them get through
                various challanges in life.
              </p>
              <p>
                As each individual as the right trot voluntariy access and
                benifit from these services. We will commit our time and enegry
                to make sure thier access is properlyu implimented and
                maintained throughout their stay.
              </p>
            </aside>
          </div>
        </section>
        <section className="p-4 md:container md:mx-auto">
          <h3 className="text-2xl font-semibold leading-none text-gray-900 capitalize">
            Our Metreics
          </h3>
          <p className="max-w-2xl mt-2.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            sapiente quas labore, aspernatur modi ratione voluptatibus omnis
            magni mollitia quo?
          </p>
        </section>
        <section className="p-4 md:container md:mx-auto">
          <h4 className="text-2xl font-semibold leading-none text-gray-900 capitalize">
            Company Values
          </h4>
          <p className="max-w-2xl mt-2.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum
            in voluptas dignissimos error cumque minus nobis, perferendis harum
            odio!
          </p>
          <article className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 lg:gap-8">
            <div className="px-4 border border-gray-900 rounded lg:py-8 lg:px-12">
              <span className="w-10 h-10 bg-gray-800">
                <HiTrendingUp size="1.8rem" className="text-gray-700" />
              </span>
              <h4 className="mt-4 text-lg font-medium leading-none text-gray-900 capitalize">
                Social Inclusion
              </h4>
              <p className="mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                accusantium.
              </p>
            </div>
            <div className="px-4 border border-gray-900 rounded lg:py-8 lg:px-12">
              <span className="w-10 h-10 bg-gray-800">
                <HiTrendingUp size="1.8rem" className="text-gray-700" />
              </span>
              <h4 className="mt-4 text-lg font-medium leading-none text-gray-900 capitalize">
                Individual Choice
              </h4>
              <p className="mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                accusantium.
              </p>
            </div>
            <div className="px-4 border border-gray-900 rounded lg:py-8 lg:px-12">
              <span className="w-10 h-10 bg-gray-800">
                <HiTrendingUp size="1.8rem" className="text-gray-700" />
              </span>
              <h4 className="mt-4 text-lg font-medium leading-none text-gray-900 capitalize">
                Independencae
              </h4>
              <p className="mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                accusantium.
              </p>
            </div>
            <div className="px-4 border border-gray-900 rounded lg:py-8 lg:px-12">
              <span className="w-10 h-10 bg-gray-800">
                <HiTrendingUp size="1.8rem" className="text-gray-700" />
              </span>
              <h4 className="mt-4 text-lg font-medium leading-none text-gray-900 capitalize">
                Individual Rights
              </h4>
              <p className="mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                accusantium.
              </p>
            </div>
          </article>
        </section>
        <section className="p-4 md:container md:mx-auto">
          <h5 className="text-2xl font-semibold leading-none text-gray-900 capitalize">
            In the press
          </h5>
          <p className="max-w-2xl mt-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            similique nostrum repellat dicta sapiente consequatur illo ipsa
            officia alias aspernatur.
          </p>
        </section>
        <section className="p-4 md:container md:mx-auto">
          <h6 className="text-2xl font-semibold leading-none text-gray-900 capitalize">
            Office Location
          </h6>
          <p className="max-w-2xl mt-2.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            fugiat amet animi illo illum consequatur quas delectus possimus
            repellat iusto?
          </p>
          <div className="w-full mt-8 bg-gray-200 rounded h-96"></div>
        </section>
      </main>
    </>
  );
}
