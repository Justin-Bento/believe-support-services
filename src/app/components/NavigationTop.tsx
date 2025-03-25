import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavigationLink {
  name: string;
  href: string;
}

export default function NavigationTop() {
  const navigationLinks: NavigationLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Events", href: "#events" },
    { name: "Questions", href: "#faq" }, // More semantic than "questions"
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Card className="rounded-none border-none shadow-sm">
        <CardContent className="container mx-auto px-4">
          <nav className="flex flex-col items-start gap-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Logo */}
            <Link
              href="#home"
              aria-label="Home"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <Image
                src="/next.svg"
                alt="Company Logo"
                width={120}
                height={24}
                priority
                className="h-6 w-auto" // Better responsive sizing
              />
            </Link>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start lg:w-auto"
                  >
                    <Link
                      href={link.href}
                      className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none"
                    >
                      <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-primary transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </header>
  );
}
