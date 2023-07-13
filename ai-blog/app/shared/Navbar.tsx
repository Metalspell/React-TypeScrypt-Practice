import React from 'react'
import Link from 'next/link'
import Image from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className="flex items-center justify-between w-full px-10 py-4 bg-wh-900 text-wh-10">
        <div className="hidden sm:block"></div>
        <div className='flex items-center justify-between gap-10'>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Trending</Link>
          <Link href={"/"}>About</Link>
        </div>
        <div>
          Sign In
        </div>
      </nav>
      <div className='flex justify-between gap-8 mx-10 mt-5 mb-4'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='text-3xl font-bold md:text-5xl'>
            My Blog
          </h1>
          <p className='mt-3 text-sm'>
            AI - is a future!
          </p>
        </div>
        <div className='relative w-auto h-32 basis-full bg-wh-500'>
          Image
        </div>
        <hr className='mx-10 border-1' />
      </div>
    </header >
  )
}

export default Navbar