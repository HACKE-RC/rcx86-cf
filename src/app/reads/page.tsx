import Link from "next/link";

import { reads } from "@/data/reads";

const getDomainPreview = (url: string) => {
  const { hostname } = new URL(url);
  return hostname.replace(/^www\./, "");
};

export default function ReadsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-4 py-10">
      <div className="pb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Back
        </Link>
      </div>

      <div className="pb-8">
        <h1 className="text-2xl font-bold tracking-tight">Reads</h1>
        <p className="pt-2 text-sm text-muted-foreground">
          Things I loved reading or watching
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {reads.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            target="_blank"
            className="group flex items-start justify-between rounded px-1.5 py-1 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
          >
            <div className="min-w-0">
              <span className="block text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                {item.title}
              </span>
              <span className="block pt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                {getDomainPreview(item.url)}
              </span>
            </div>
            <span className="ml-3 shrink-0 text-[10px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {item.kind}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
