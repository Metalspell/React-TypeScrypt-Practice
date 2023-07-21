import React from 'react'
import AllPurposeItem from './AllPurposeItem'
import { OtherProps } from '../types'

const Other = ({ otherPosts }: OtherProps) => {
  return (
    <section className='mt-10'>
      <hr className='border-1' />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">
          Other
        </h4>
        <p className="text-2xl font-bold">Latest News in Technology</p>
      </div>
      <div className="grid-cols-2 gap-16 sm:grid">
        <AllPurposeItem
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <AllPurposeItem
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <AllPurposeItem
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <AllPurposeItem
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  )
}

export default Other