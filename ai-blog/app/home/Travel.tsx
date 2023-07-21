import React from 'react'
import AllPurposeItemProps from './AllPurposeItem'
import { TravelProps } from '../types'

const Travel = ({ travelPosts }: TravelProps) => {
  return (
    <section className='mt-10'>
      <hr className='border-1' />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">
          TRAVEL
        </h4>
        <p className="text-2xl font-bold">Latest News in Travel</p>
      </div>
      <div className="justify-between gap-8 sm:flex">
        <AllPurposeItemProps
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={travelPosts[0]}
          isLongForm
        />
        <AllPurposeItemProps
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={travelPosts[1]}
          isSmallItem
        />
        <AllPurposeItemProps
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={travelPosts[2]}
          isSmallItem
        />
        <AllPurposeItemProps
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={travelPosts[3]}
          isSmallItem
        />
      </div>
    </section>
  )
}

export default Travel