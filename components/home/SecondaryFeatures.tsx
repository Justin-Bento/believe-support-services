import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SecondaryFeatures() {
  return (
    <section className="relative object-cover w-full h-[800px]">
      <Link href="https://goo.gl/maps/tBfavMN7bgA9sPcq7" className="">
        <Image src={`/media/believe-support-map.png`} fill alt="map loaction of building" quality={40} />
      </Link>
    </section>
  )
}
