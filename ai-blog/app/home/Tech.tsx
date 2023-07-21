import React from 'react'
import AllPurposeItem from './AllPurposeItem'
import { TechProps } from '../types'


const Tech = ({techPosts}: TechProps) => {
  return (
    <section>
      <hr className='border-1' />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">
          HOT
        </h4>
        <p className="text-2xl font-bold">Latest News in Technology</p>
      </div>

      <div className="grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8">
        <AllPurposeItem
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        />
        <AllPurposeItem
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallItem
        />
        <AllPurposeItem
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallItem
        />
        <AllPurposeItem
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallItem
        />
      </div>
    </section>
  )
}

export default Tech