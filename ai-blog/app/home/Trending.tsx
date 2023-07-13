import Link from 'next/link'
import React from 'react'
import { TrendingCardProps } from '../types'

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className='relative z-0 w-full h-full bg-wh-500'></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-gradual"></div>
      <div className="absolute top-0 bottom-0 w-full h-full z-1 bg-gradient-gradual"></div>
    </Link>
  )
}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
      <div className='flex items-center gap-3'>
        <div className='px-8 py-2 text-sm font-bold bg-wh-900 text-wh-10'>
          Trending
        </div>
        <p className='text-sm'>
          Some different text
        </p>
      </div>
      <div className='flex justify-between gap-3 my-3'>
        <div className='basis-1/2 bg-wh-500 h-96'></div>
        <div className='flex flex-col gap-3 basis-1/2 h-96'>
          <div className='basis-1/2 bg-wh-500'></div>
          <div className='flex gap-3 basis-1/2'>
            <div className='basis-1/2 bg-wh-500'></div>
            <div className='basis-1/2 bg-wh-500'></div>
          </div>
        </div>
      </div>
      <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
        <div className='col-span-2 row-span-2 bg-wh-500 h-96'></div>
        <div className='col-span-2 row-span-1 bg-wh-500 h-96'></div>
        <div className='col-span-1 row-span-1 bg-wh-500 h-96'></div>
        <div className='col-span-1 row-span-1 bg-wh-500 h-96'></div>
      </div>
      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </section>
  )
}

export default Trending