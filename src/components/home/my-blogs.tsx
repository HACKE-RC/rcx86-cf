import Link from "next/link";
import { blogs } from "@/data/blogs";

const MyBlogs = () => {
  return (
    <div className="w-full py-6 pt-10">
      <div className="header pb-3">
        <p className={"text-sm text-muted-foreground"}>
          Technical things I have written
        </p>
      </div>
      <div className="blogs w-full flex flex-col gap-2">
        {blogs.map((b) => {
          return (
            <Link
              key={b.url}
              title={b.topic}
              href={b.url}
              target="_blank"
              className="flex items-center justify-between group py-1 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 px-1.5 rounded transition-colors"
            >
              <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 line-clamp-1">
                - {b.title}
              </span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 shrink-0 font-sans ml-2">
                {b.topic.toLowerCase()}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyBlogs;
