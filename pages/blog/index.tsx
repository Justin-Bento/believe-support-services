import Head from "next/head";
import React from "react";

export default function blog() {
  return (
    <>
      <Head>
        <title>Blog | Believe Support Services</title>
      </Head>
      <main className="container p-4 mx-auto my-20 space-y-20 max-w-7xl">
        <section className="space-y-20">
          <Card Path="1" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
          <Card Path="2" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
          <Card Path="3" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
          <Card Path="4" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
          <Card Path="5" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
          <Card Path="6" Headline="Card Title Goes Here" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga nulla labore sed! Ex voluptas provident quae facere rem officia ut sint impedit magnam. Vitae quidem nam est adipisci corporis?" />
        </section>
      </main>
    </>
  );
}
interface BlogCardProps {
  Headline: string;
  Supporting: string;
  Path: string;
}
const Card = (props: BlogCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <div className="w-full h-64 bg-gray-200 lg:h-full lg:w-72"></div>
      <div className="col-span-1 md:col-span-3">
        <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
          April 16, 2020
        </p>
        <h2 className="mb-2 text-xl font-bold leading-7 text-gray-800">
          <a href="#" className="text-gray-900 hover:text-purple-700">
            {props.Headline || "Pattern Matching In Elixir"}
          </a>
        </h2>
        <p className="max-w-4xl text-base leading-7 text-gray-600">
          {props.Supporting ||
            "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!"}
        </p>
        <a href={`/blog/${props.Path}`} className="inline-flex px-6 py-2 mt-3 text-sm bg-gray-200">
          Read More
        </a>
      </div>
    </div>
  );
};
