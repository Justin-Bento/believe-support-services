import Head from "next/head";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Believe Support Services</title>
      </Head>
      <main className="mb-16 space-y-16">
        <section className="w-full py-12 bg-yellow-700">
          <div className="p-4 wrapper">
            <h1 className="font-serif text-white">Our Mission</h1>
            <h1 className="max-w-3xl text-xl italic text-gray-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, pariatur molestiae consectetur eius quas vel quos porro esse ullam iste?</h1>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 wrapper">
          <div className="flex flex-col items-start justify-center gap-4 md:ml-8">
            <h2 className="text-3xl font-bold leading-tight capitalize">A safe and supportive community that embraces individuals regardless of their background.</h2>
            <p className="">We strive to create an atmosphere of respect and acceptance, where everyone can feel comfortable being themselves and expressing their authentic identities.</p>
          </div>
          <div className="w-full h-[450px] relative">
            <Image src="/media/community.jpg" fill alt="Image Of Believe Community" className="object-cover rounded-t-xl" />
          </div>
          <div className="w-full h-[450px] relative">
            <Image src="/media/class-environment.jpg" fill alt="Image Of Believe Community" className="object-cover rounded-t-xl" />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 md:mr-8">
            <h3 className="text-3xl font-bold leading-tight capitalize ">Every Invididual Should Embrace Who They Are Nomatter Their Shortcommings!</h3>
            <p className="">We strive to create an atmosphere of respect and acceptance, where everyone can feel comfortable being themselves and expressing their authentic identities.</p>
          </div>
        </section>
        <section className="p-4 wrapper">
          <div className="grid grid-cols-1 gap-8 my-16 md:grid-cols-2">
            <div className="">
              <h4 className="text-3xl font-bold leading-tight capitalize">What Do We Do?</h4>
            </div>
            <div className="space-y-8 max-w-prose">
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia architecto facere officia quidem possimus nam? Illo cupiditate repudiandae unde tempore nemo sint, at consequatur error, numquam iste fugit excepturi nisi.</p>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia architecto facere officia quidem possimus nam? Illo cupiditate repudiandae unde tempore nemo sint, at consequatur error, numquam iste fugit excepturi nisi.</p>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia architecto facere officia quidem possimus nam? Illo cupiditate repudiandae unde tempore nemo sint, at consequatur error, numquam iste fugit excepturi nisi.</p>
            </div>
          </div>
        </section>
        <section className="p-4 wrapper">
          <h5 className="text-3xl font-bold leading-tight capitalize">Our Offices</h5>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            <div className="bg-gray-200 w-full rounded-t-xl h-[250px]">1</div>
            <div className="bg-gray-200 w-full rounded-t-xl h-[250px]">2</div>
          </div>
        </section>
      </main>
    </>
  )
}
