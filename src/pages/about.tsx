import Head from "next/head";
import Image from "next/image";
import { CompanyValues } from "@/lib/data";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Believe Support Services</title>
        <meta
          name="description"
          content="Helping individuals with complex needs to help them be the best version on themselves and their community."
        />
      </Head>
      <main className="container p-4 mx-auto my-32 space-y-32">
        <section className="">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <h2 className="display-medium font-bold capitalize">Our mission</h2>
            <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="prose-lg dark:text-slate-100">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <div className="max-w-xl mt-10 prose dark:text-slate-300">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-10">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
         * End of Mission Section
         */}
        <section className="aspect-[5/2] w-full relative">
          <Image
            fill
            quality={50}
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="object-cover object-center "
          />
        </section>
        {/*
         * End of Company Media Section
         */}
        <section className="">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="font-extrabold capitalize headline-large dark:text-white">
              Our values
            </h2>
            <p className="mt-6 prose dark:text-slate-300">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {CompanyValues.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold capitalize title-medium dark:text-slate-300">
                  {value.name}
                </dt>
                <dd className="mt-1 prose-sm text-slate-600 dark:text-slate-300">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        {/*
         * End of Values Section
         */}
        <section className="py-24 bg-theme sm:py-32 rounded-2xl">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <figure className="flex flex-col justify-between flex-auto mt-10">
                  <blockquote className="prose dark:text-slate-300">
                    <p>
                      “Amet amet eget scelerisque tellus sit neque faucibus non
                      eleifend. Integer eu praesent at a. Ornare arcu gravida
                      natoque erat et cursus tortor consequat at. Vulputate
                      gravida sociis enim nullam ultricies habitant malesuada
                      lorem ac. Tincidunt urna dui pellentesque sagittis.”
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center mt-10 gap-x-6">
                    <div className="relative h-14 w-14">
                      <Image
                        fill
                        className="rounded-full "
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="body-medium">
                      <div className="font-semibold">Judith Black</div>
                      <div className="mt-1">CEO of Tuple</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col pt-10 border-t border-gray-900/10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                <figure className="flex flex-col justify-between flex-auto mt-10">
                  <blockquote className="prose dark:text-slate-300">
                    <p>
                      “Excepteur veniam labore ullamco eiusmod. Pariatur
                      consequat proident duis dolore nulla veniam reprehenderit
                      nisi officia voluptate incididunt exercitation
                      exercitation elit. Nostrud veniam sint dolor nisi
                      ullamco.”
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center mt-10 gap-x-6">
                    <div className="relative h-14 w-14">
                      <Image
                        fill
                        className="rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="body-medium">
                      <div className="font-semibold ">Joseph Rodriguez</div>
                      <div className="mt-1">CEO of Reform</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/*
         * End of Testimonal Section
         */}
      </main>
    </>
  );
}
