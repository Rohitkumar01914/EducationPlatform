import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <Link  href={"#All-Course"}>
    <Image
    className='h-auto w-full pt-12 '
    src={"/banner.png"}
    alt='banner'
    priority
    height={800}
    width={1800}

    />
</Link>

    
  )
}
