import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Logo from "@/components/Logo"
import { appbar_navigation } from "@/lib/data"
import { Button } from './Button'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="border-b shadow-sm bg-primary-50/50 dark:bg-primary-900 border-primary-50/50 dark:border-primary-800">
      <nav className="container flex items-center justify-between p-6 mx-auto lg:px-8" aria-label="Global">
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Believe Support Services</span>
            <Logo fill={`fill-primary-900 dark:fill-primary-50`} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-700 dark:text-primary-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {appbar_navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button variant="link">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-theme sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Believe Support Services</span>
              <Logo fill={`fill-primary-900 dark:fill-primary-50`} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-700 dark:text-primary-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-primary-500/10 dark:divide-gray-100">
              <div className="py-6 space-y-2">
                {appbar_navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-3 py-2 -mx-3 body-large">
                    <Button variant="link">
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
