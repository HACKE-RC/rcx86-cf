"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";
import { home_page_data } from "@/data/home";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

const data = home_page_data;
const Header = () => {
  const { theme } = useTheme();

  return (
    <div className={cn(
      "head flex items-center w-full py-10 justify-between",
      theme === 'dark' 
        ? "selection:bg-zinc-300 selection:text-neutral-900"
        : "selection:bg-neutral-800 selection:text-white"
    )}>
      <img src="/rc.avif" alt="rc" className="w-40 h-40 rounded" />
      <div className="right flex items-start justify-start flex-col">
        <h1 className="font-bold text-2xl tracking-tight  leading-none">
          {data.name}
        </h1>

        <div className="socials flex items-center flex-wrap gap-2 w-full pb-4 pt-1 ">
          {socials.map((s, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  title={s.name}
                  href={s.url}
                  target="_blank"
                  className="group  relative text-xs text-bg dark:bg-zinc-300 p-1 rounded-sm bg-neutral-800  flex items-center gap-1.5"
                >
                  {typeof s.icon === "string" ? (
                    <Image
                      alt={s.name}
                      width={14}
                      height={14}
                      className="dark:mix-blend-difference invert"
                      src={s.icon}
                    />
                  ) : (
                    <s.icon
                      size={14}
                      className="text-zinc-100 dark:text-neutral-900"
                    />
                  )}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
