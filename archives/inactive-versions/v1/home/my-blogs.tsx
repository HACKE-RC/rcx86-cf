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
           <p className={font.className+" text-[24px] text-muted-foreground"}>
        <i>
          My Blogs.
        </i>
      </p>
      <p className="text-xs text-muted-foreground">
        These are my favorite blogs that I've written
      </p>
     </div>
      <div className="bolgs w-full flex flex-col gap-4">
        {blogs.map((b,i)=>{
            return(
                <React.Fragment key={i}>
                  <Link title={b.topic} href={b.url} className="w-full">
                    <div className="flex cursor-pointer items-center  gap-2 w-full group">
                        <div className="flex-1 line-clamp-1  py-3 px-2  dark:bg-neutral-800 bg-zinc-200 text-muted-foreground text-sm  ">
                          <p className="line-clamp-1">
                              {b.title}
                          </p>
                        </div>
                        <Button title="visit blog" aria-label="visit blog" size={"icon-sm"} variant={"ghost"} className="text-muted-foreground scale-0 w-0 group-hover:w-fit px-0 group-hover:px-2 group-hover:scale-100 transition-all duration-300">
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
