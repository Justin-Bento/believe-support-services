import React from "react";
import Image from "next/image";
import { CompanyValues } from "@/lib/data";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh my-24 space-y-32">
      <section className="">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h2 className="scroll-m-20 font-semibold tracking-tight text-5xl capitalize">
            Our mission
          </h2>
          <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-3xl text-balance lg:flex-auto space-y-8">
              <p className="text-xl">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className="text-foreground/70">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="text-foreground/70">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
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
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight capitalize first:pt-0 text-foreground">
            Our values
          </h2>
          <p className="mt-2 text-foreground text-base/6">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {CompanyValues.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold capitalize text-base text-foreground">
                {value.name}
              </dt>
              <dd className="mt-1 prose-sm text-foreground/60">
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      {/*
       * End of Values Section
       */}
      <section className="py-24 bg-primary/20 dark:bg-card sm:py-32 rounded-2xl">
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
                  <div className="text-base/6">
                    <div className="font-semibold">Judith Black</div>
                    <div>CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col pt-10 border-t border-gray-900/10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure className="flex flex-col justify-between flex-auto mt-10">
                <blockquote className="prose dark:text-slate-300">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
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
                  <div className="text-base/6">
                    <div className="font-semibold ">Joseph Rodriguez</div>
                    <div>CEO of Reform</div>
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
  );
}
