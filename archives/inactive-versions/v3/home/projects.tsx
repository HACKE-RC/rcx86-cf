"use client"
import React from "react"
import Link from "next/link"
import { StarIcon } from "lucide-react"
import { projects } from "@/data/projects"

import { Playfair_Display } from "next/font/google"
import { useRepoStars } from "@/hooks/use-repo-stars"
const font = Playfair_Display({ subsets: ["latin"] })

const RepoStars = ({ url }: { url: string }) => {
  const { data, isPending } = useRepoStars({ url })

  if (isPending) {
    return (
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <span className="h-[10px] w-[10px] rounded bg-muted animate-pulse" />
        <span className="h-[10px] w-[28px] rounded bg-muted animate-pulse" />
      </span>
    )
  }

  return (
    <span className="text-[10px] gap-1 text-muted-foreground flex items-center uppercase">
  
      {data} stars
    </span>
  )
}
const Project = () => {
  const visible =  projects

  return (
    <div className="relative w-full py-6 pt-10 ">
      <p className={`text-sm text-muted-foreground ${font.className}`}>
       <i>
         Things I&apos;ve built.
        </i>
      </p>

      <div className="relative">
        <div
          className="overflow-hidden border-l-3  mt-5 flex flex-col transition-all duration-500"
        >
          {visible.map((p, i) => (
            <div
              key={i}
       
              className= "flex flex-col pb-4 relative pl-2 w-full transition-all duration-500"
            >
              <div className="w-2 h-2 absolute rounded-full -translate-x-1/2 z-10 top-0 left-0 bg-border translate-y-1/2"/>
              <div className={` top flex   items-center gap-2 `}>
                  {p.name}
                 <RepoStars url={p.git}/>
              </div>
                            <p className="text-sm text-muted-foreground">{p.description}</p>

                <div className="text-muted-foreground flex pt-2 items-center gap-2">
                {p.git && 
                <Link title={p.name+" github repo"}  href={p.git} className="flex items-center  gap-2">
                  <span className="text-[9px] tracking-wide uppercase">Github</span>
                </Link>
                }
                 {p.url &&
                 <Link title={p.name+" website url"} href={p.url} className="flex items-center  gap-2">
                           <span className="text-[9px] tracking-wide uppercase">Live</span>
                 </Link>
                 }
                </div>

            </div>
          ))}
        </div>

    
    
      </div>
    </div>
  )
}

export default Project
