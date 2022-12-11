import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col gap-1 p-4 px-8 py-12 mx-auto max-w-7xl lg:gap-4">
        <Link href="/" className="block">
          <Image src="/brand/logo.png" alt="believe support services company logo" width={200} height={200} />
        </Link>
        <nav className="flex gap-8 text-sm leading-5 text-gray-700">
          <Link href="/#" className="hover:text-black">
            Status
          </Link>
          <Link href="/#" className="hover:text-black">
            Twitter
          </Link>
          <Link href="/#" className="hover:text-black">
            Contact
          </Link>
          <Link href="/#" className="hover:text-black">
            Docs
          </Link>
          <Link href="/#" className="hover:text-black">
            API
          </Link>
          <Link href="/#" className="hover:text-black">
            Privacy
          </Link>
          <Link href="/#" className="hover:text-black">
            Terms
          </Link>
        </nav>
        <p className="max-w-2xl text-xs leading-5 text-gray-700 ">
          Campfire collects information about you when you use our Website to
          access our services, and other online products and services
          (collectively, the “Services”) and through other interactions and
          communications you have with us.
        </p>
      </div>
    </footer>
  );
}
