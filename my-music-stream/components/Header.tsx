"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import { HeaderProps } from '@/interfaces'

const Header = ({ className, children }: HeaderProps) => {
  const router = useRouter();
  const handleLogout = () => {

  }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className
    )}>
      <div className='flex items-center justify-between w-full mb-4'>
        <div className='items-center hissen md:flex gap-x-2'>
          <button
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
            onClick={() => router.forward()}
          >
            <RxCaretLeft
              className='text-white'
              size={35}
            />
          </button>
          <button
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
            onClick={() => router.forward()}
          >
            <RxCaretRight
              className='text-white'
              size={35}
            />
          </button>
        </div>
        <div className='flex items-center md:hidden gap-x-2'>
          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <HiHome
              className="text-black"
              size={20}
            />
          </button>
        </div>
        <div className='flex items-center md:hidden gap-x-2'>
          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <BiSearch
              className="text-black"
              size={20}
            />
          </button>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          <>
            <div>
              <Button
              onClick={()=>{}}
                className='font-medium bg-tranparent text-neutral-300'
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
              onClick={()=>{}}
                className='px-6 py-2 bg-white'
              >
                LogIn
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header