import React from "react"
import Link from "next/link"
import { blogs } from "@/data/blogs"

import { Playfair_Display } from "next/font/google"
const font = Playfair_Display({ subsets: ["latin"] })

const MyBlogs = () => {
  return (
    <div className="w-full py-6 pt-10">
     <div className="header pb-3">
   <p className={`${font.className} text-sm text-muted-foreground `}>
       <i>
           My Blogs.
       </i>
      </p>
    
     </div>
      <ul className="bolgs w-full flex flex-col list-disc pl-6 gap-4">
        {blogs.map((b,i)=>{
            return(
                <React.Fragment key={i}>
                 <li className="w-full">
                   <Link title={b.topic} href={b.url} className="w-full relative ">
                    <div className="flex cursor-pointer items-center  gap-2 w-full group">
                        <div className="flex-1 line-clamp-1  py-3 px-2   text-muted-foreground text-sm  ">
                          <p className="line-clamp-1">
                              {b.title}
                          </p>
                        </div>

                      
                    </div>
                     </Link>
                 </li>
                </React.Fragment>
            )
        })}
      </ul>
    </div>
  )
}

export default MyBlogs
