import React from "react";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function signup() {
  let headline = "Work With Believe";
  let supporting = "We provide a safe, friendly, and positive environment to help individuals develop a healthy lifestyle. We do this by creating opportunities for young adults.";
  return (
    <>
      <Appbar />
      <main className="p-4 py-16 lg:container lg:mx-auto">
        <section>
          <h1 className="headline-large">{headline}</h1>
          <p className="mt-2 body-large">{supporting}</p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

function ContactForm() {
  return (
    <>
      <form action="" className="grid grid-cols-1 gap-8 p-4 my-8 md:grid-cols-2">
      </form>
    </>
  )

}