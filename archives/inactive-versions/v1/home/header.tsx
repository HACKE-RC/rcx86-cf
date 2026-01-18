"use client"
import { home_page_data } from '@/data/home'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const data = home_page_data
const Header = () => {
   const {theme} = useTheme()
    
  return (
    <div className="head flex items-center w-full  py-10 justify-between">
       <img src="/rc.avif" alt="rc" className='w-20 h-20 rounded-full' />
        <p className='font-bold text-2xl tracking-tight mr-auto pl-5'>
            {data.name}
        </p>
       <Link title='x page' href={'https://x.com/rcx86'}>
        <Image width={20} height={20} alt='x logo' src={'/x.avif'} className={`invert mix-blend-difference`}/></Link>
      </div>
  )
}

export default Header
