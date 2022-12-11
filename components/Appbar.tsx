import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiChevronDown } from 'react-icons/hi';

export default function Appbar() {
  return (
    <header className="shadow">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link href="/">
          <Image src="/brand/logo.png" alt="believe support services company logo" width={200} height={200} />
        </Link>
        <nav className="items-center hidden space-x-2 text-sm font-medium text-gray-800 md:flex">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-3 py-2 transition bg-white rounded hover:bg-gray-100"
          >
            Programs
            <HiChevronDown />
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 transition bg-white rounded hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 transition bg-white rounded hover:bg-gray-100"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 transition bg-white rounded hover:bg-gray-100"
          >
            Blog
          </Link>
        </nav>
        <button className="flex p-1 text-gray-500 appearance-none md:hidden">
        <HiMenu size="1.6rem" />
        </button>
      </div>
    </header>
  );
}
