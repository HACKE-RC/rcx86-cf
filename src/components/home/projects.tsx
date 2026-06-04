"use client";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

import { projects } from "@/data/projects";
import { useRepoStars } from "@/hooks/use-repo-stars";

const font = Playfair_Display({ subsets: ["latin"] });

const RepoStars = ({ url }: { url: string }) => {
  const { data, isPending } = useRepoStars({ url });

  if (!url.includes("github.com/")) return null;
  if (isPending) return null;
  if (typeof data !== "number" || data <= 50) return null;

  return (
    <span className="text-[10px] gap-1 text-muted-foreground flex items-center">
      <StarIcon size={10} fill="currentColor" />
      {data}
    </span>
  );
};
const Project = () => {
  const visible = projects.filter((p) => p.name !== "ttyl");

  return (
    <div className="relative w-full py-6 pt-10 ">
      <p className={"text-sm text-muted-foreground"}>Things I have built</p>

      <div className="relative">
        <div className="overflow-hidden flex gap-2 flex-wrap transition-all duration-500">
          {visible.map((p) => (
            <div
              key={p.git || p.url || p.name}
              className="flex flex-col py-4  w-full sm:max-w-[49%] transition-all duration-500"
            >
              <div className={` top flex   items-center gap-2 `}>
                <i className={`${font.className}`}>{p.name}</i>
                <RepoStars url={p.git} />
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>

              <div className="text-muted-foreground flex pt-2 items-center gap-2">
                {p.git && (
                  <Link
                    title={`${p.name} github repo`}
                    href={p.git}
                    className="flex items-center  gap-2"
                  >
                    <span className="text-[9px] tracking-wide uppercase">
                      Github
                    </span>
                  </Link>
                )}
                {p.url && (
                  <Link href={p.url} className="flex items-center  gap-2">
                    <span className="text-[9px] tracking-wide uppercase">
                      Live
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 rounded px-1.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:hover:bg-zinc-900/40 dark:hover:text-zinc-50"
          >
            See all projects
            <ArrowUpRightIcon size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
