import Logo from "@/components/Logo"
import {footer_navigation} from "@/lib/data"


export default function Footer() {
  return (
    <footer className="bg-theme" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
          <Logo fill={`fill-primary-900 dark:fill-primary-50`} />
            <p className="body-medium">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {footer_navigation.social.map((item:any) => (
                <a key={item.name} href={item.href} className="text-primary-900 hover:text-primary-950">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold title-medium">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer_navigation.solutions.map((item:any) => (
                    <li key={item.name}>
                      <a href={item.href} className="body-medium">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold title-medium">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer_navigation.support.map((item:any) => (
                    <li key={item.name}>
                      <a href={item.href} className="body-medium">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold title-medium">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer_navigation.company.map((item:any) => (
                    <li key={item.name}>
                      <a href={item.href} className="body-medium">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold title-medium">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer_navigation.legal.map((item:any) => (
                    <li key={item.name}>
                      <a href={item.href} className="body-medium">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24">
          <p className="body-small">&copy; {new Date().getFullYear()} Believe Support Services, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
