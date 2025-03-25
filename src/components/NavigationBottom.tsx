import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationBottomLinks } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";

export default function NavigationBottom() {
  return (
    <footer>
      <Card className="rounded-b-none shadow-none border-none">
        <CardContent className="container mx-auto lg:px-0 py-12 lg:py-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              {/* Logo */}
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Believe Support Services</span>
                <CompanyLogo fill={`fill-foreground`} />
              </Link>
              <p className="text-sm/6 text-balance text-foreground">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex gap-x-6">
                {NavigationBottomLinks.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/50"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-foreground/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-sm/6 text-foreground">
              &copy; {new Date().getFullYear()} Believe Support Services, Inc.
              All rights reserved.
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
