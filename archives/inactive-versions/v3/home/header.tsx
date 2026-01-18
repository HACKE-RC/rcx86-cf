"use client"
import { home_page_data } from '@/data/home'
import { Playfair_Display } from "next/font/google"
const font = Playfair_Display({ subsets: ["latin"] })


const data = home_page_data
const Header = () => {
    
  return (
    <div className="head flex  flex-col gap-2 w-full  pt-10 pb-4 justify-between">
       <img src="/rc.avif" alt="rc" className='w-20 h-20 rounded-full' />
      <div className="right flex items-start justify-start flex-col">
          <h1 className={`' text-3xl pt-1 tracking-tight  leading-none' ${font.className}`}>
            <i>
                {data.name}
            </i>
        </h1>
 
    
      </div>
      </div>
  )
}

export default Header
