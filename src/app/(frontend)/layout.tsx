import NavigationBottom from "@/components/NavigationBottom";
import NavigationTop from "@/components/NavigationTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Believe Support Services",
  description:
    "Our wide variety of programs were designed to encourage individuals with complex needs build life skills, participate in recreational activities, and be part of a community.",
};

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationTop />
      {children}
      <NavigationBottom />
    </>
  );
}
