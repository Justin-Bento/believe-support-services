import React from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

export default function programs() {
  return (
    <>
      <main className="min-h-screen lg:container lg:mx-auto lg:py-32 p-4 py-16">
        <h1 className="scroll-m-20 font-extrabold tracking-wide text-5xl dark:text-primary-100">
          Explore Our Programs
        </h1>
        <p className="leading-7 tracking-wider dark:text-primary-100 mt-6">
          We are dedicated to improving the lives of individuals with complex
          needs through a variety of thoughtfully designed programs. Each
          program is crafted to empower, educate, and foster a strong sense of
          community. Discover how our programs can make a difference in the
          lives of those we support.
        </p>
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 mt-12">
          {programs_iinfo.map((data: any) => {
            return (
              <ProgramCard
                key={data.title.toString()}
                URL={`/programs/${data.title
                  .toString()
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                Headline={data.title}
                Supporting={data.description}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

function ProgramCard(props: any) {
  return (
    <>
      <Link
        href={props.URL}
        className="hover:opacity-80 active:ring-1 transition-all"
      >
        <div className="bg-primary-50 dark:bg-primary-900 min-h-[430px] rounded-xl">
          <div className="w-full h-64 relative">
            <Image
              fill
              src="/media/hero-image.webp"
              alt={props.Headline}
              className="object-cover rounded-xl hover:grayscale-[10%]"
            />
          </div>
          <div className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {props.Headline}
            </h2>
            <p className="leading-7 line-clamp-3 tracking-wider text-opacity-75 text-slate-700/75 dark:text-slate-100/75">
              {props.Supporting}
            </p>
            <Button size="sm" variant="secondary" className="mt-4">
              View Program
            </Button>
          </div>
        </div>
      </Link>
    </>
  );
}

const programs_iinfo = [
  {
    title: "Recreation and Leisure",
    description:
      "Our Recreation and Leisure programs offer a range of engaging activities that promote physical fitness, creative expression, and social interaction. Participants can explore new interests, make friends, and experience the joy of shared experiences.",
  },
  {
    title: "Group Living",
    description:
      "From effective communication and problem-solving to time management and personal care, our comprehensive curriculum equips participants with the skills necessary to navigate life's challenges.",
  },
  {
    title: "Residential Program",
    description:
      "In the digital age, having strong technology skills is crucial. Our Technology and Digital Literacy program helps individuals navigate the digital world with confidence. Participants learn essential computer skills, online safety practices, and how to utilize technology to enhance their communication, learning, and daily activities.",
  },
  {
    title: "Respite Support",
    description:
      "Wellness and Mindfulness programs focus on promoting mental and emotional well-being, providing participants with tools to manage stress, anxiety, and emotional challenges. Through meditation, mindfulness practices, and psychoeducation, individuals can develop resilience and cultivate a positive sense of self.",
  },
  {
    title: "Vocational Camp",
    description:
      "Our Vocational Training and Employment program is designed to equip individuals with the skills and confidence needed to enter the workforce with pride and purpose. Through a combination of skill-building workshops, career exploration, and hands-on training, participants can develop valuable vocational skills that lead to meaningful employment opportunities.",
  },
  {
    title: "Social Group Engagement",
    description:
      "Building meaningful connections is at the core of our Social Group Engagement programs. We provide inclusive spaces where individuals can connect with peers who share similar interests and experiences. Through group discussions, collaborative activities, and shared experiences, participants can develop lasting friendships and strengthen their social skills..",
  },
];
