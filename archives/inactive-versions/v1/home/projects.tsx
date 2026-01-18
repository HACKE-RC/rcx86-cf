"use client"

import React, { useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"
import { ArrowUpRightIcon, GithubIcon, ChevronDown } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const font = Playfair_Display({ subsets: ["latin"] })

const Project = () => {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(true)
  const visible = open ? projects : projects.slice(0, 3)


  return (
    <div className="relative w-full py-6 pt-10 text-muted-foreground">
      <p className={font.className+" text-[24px] "}>
        <i>
          Projects.
        </i>
      </p>

      <div className="relative">
        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            open ? "max-h-[2000px]" : "max-h-[360px]"
          )}
        >
          {visible.map((p, i) => (
            <div
              key={i}
              style={{
                transitionDelay: mounted ? `${i * 80}ms` : "0ms",
              }}
              className={cn(
                "flex flex-col py-4 transition-all duration-500",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              )}
            >
              <div className="top flex w-full justify-between items-center gap-2 font-semibold">
                {p.name}
                <div className="text-muted-foreground flex items-center gap-2">
                {p.git && 
                <Link title={p.name+" github repo"}  href={p.git} className="flex items-center  gap-2">
                  <span className="text-[9px] tracking-wide uppercase">Github</span>  <GithubIcon size={14} className="cursor-pointer" />
                </Link>
                }
                 {p.url &&
                 <Link title={p.name+" website url"} href={p.url} className="flex items-center  gap-2">
                           <span className="text-[9px] tracking-wide uppercase">Live</span>
                   <ArrowUpRightIcon size={16} className="cursor-pointer" />
                 </Link>
                 }
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>

        {!open && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-zinc-100 dark:to-neutral-900" />
        )}

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <Button
          title="view all projects"
          aria-label="view app projects"
            variant="outline"
            size="icon-sm"
            onClick={() => setOpen(!open)}
            className="rounded-full border backdrop-blur bg-background/80"
          >
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                open && "rotate-180"
              )}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
