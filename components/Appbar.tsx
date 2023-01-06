import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from "next/image"
import Link from "next/link"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]


export default function Appbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="p-4 bg-white shadow">
    <div className='wrapper'>
      <nav className="flex items-center justify-between h-9" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image width={120} height={120} src="/brand/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-4">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="inline-flex items-center rounded bg-white md:px-2.5 md:py-1.5 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel onFocus={() => true} className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-white lg:hidden">
          <div className="flex items-center justify-between h-9">
            <div className="flex">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image width={120} height={120} src="/brand/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiX className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-3 text-sm text-gray-700 bg-white rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  </div>
  )
}
