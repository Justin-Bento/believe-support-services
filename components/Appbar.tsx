import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiChevronDown } from "react-icons/hi";

export default function Appbar() {
  return (
    <header className="shadow">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link href="/">
          <Image src="/brand/logo.png" alt="believe support services company logo" width={200} height={200} />
        </Link>
        <nav className="items-center hidden space-x-2 text-sm font-medium text-gray-800 md:flex">
          <NavLinks Path="/" Label="Home" />
          <NavLinks Path="/about" Label="About" />
          <NavLinks Path="/programs" Label="Programs" />
          <NavLinks Path="/contact" Label="Contact" />
          <NavLinks Path="/blog" Label="Blog" />
        </nav>
        <button className="flex p-1 text-gray-500 appearance-none md:hidden">
          <HiMenu size="1.6rem" />
        </button>
      </div>
    </header>
  );
}

interface NavLink {
  Path: string;
  Label: string;
}

const NavLinks = (props: NavLink) => {
  return (
    <Link href={props.Path} className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">
      {props.Label}
    </Link>
  );
};