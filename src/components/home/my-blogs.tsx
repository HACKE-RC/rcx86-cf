import React from "react"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"
import { blogs } from "@/data/blogs"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react"

const font = Playfair_Display({ subsets: ["latin"] })

const MyBlogs = () => {
  return (
    <div className="w-full py-6 pt-10">
     <div className="header pb-3">
   <p className={"text-sm text-muted-foreground"}>
          My Blogs.
      </p>
    
     </div>
      <div className="bolgs w-full flex flex-col gap-4">
        {blogs.map((b,i)=>{
            return(
                <React.Fragment key={i}>
                  <Link title={b.topic} href={b.url} className="w-full relative ">
                    <div className="flex cursor-pointer items-center  gap-2 w-full group">
                        <div className="flex-1 line-clamp-1  py-3 px-2   text-muted-foreground text-sm  ">
                          <p className="line-clamp-1">
                              {b.title}
                          </p>
                        </div>
                                                <div className='absolute w-full h-[0.5px] opacity-70 -bottom-0.5 scale-x-0 group-hover:scale-x-100 duration-300 transition-all origin-left left-0  bg-muted-foreground'/>

                        <Button title="visit blog" aria-label="visit blog" size={"icon-sm"} variant={"ghost"} className="text-muted-foreground opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit px-0 group-hover:px-2 transition-all duration-300">
                            <ArrowUpRightIcon/>
                        </Button>
                    </div>
                     </Link>
                </React.Fragment>
            )
        })}
      </div>
    </div>
  )
}

export default MyBlogs
