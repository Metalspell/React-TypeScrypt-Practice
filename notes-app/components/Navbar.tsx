import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <h1 className='mb-8 text-3xl font-bold text-[color:white]'>Home page</h1>
      <Link
        className="mb-4 text-3xl font-bold text-fuchsia-600"
        href="/notes"
      >
        Go to notes
      </Link>
    </>
  )
}

export default Navbar