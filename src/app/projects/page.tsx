import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { olderProjects, type ProjectItem, projects } from "@/data/projects";

const font = Playfair_Display({ subsets: ["latin"] });

const ProjectList = ({
  items,
  title,
}: {
  items: ProjectItem[];
  title?: string;
}) => {
  return (
    <section className="flex flex-col gap-6">
      {title ? (
        <div>
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        </div>
      ) : null}

      <div className="flex flex-col gap-6">
        {items.map((project) => (
          <div
            key={project.git || project.url || project.name}
            className="w-full"
          >
            <div className="flex items-center gap-2">
              <h3 className={`${font.className} text-base font-medium`}>
                {project.name}
              </h3>
              <span className="text-[10px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {project.category}
              </span>
            </div>
            <p className="pt-1 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="flex items-center gap-3 pt-2 text-[10px] uppercase tracking-wide text-muted-foreground">
              {project.git ? (
                <Link
                  href={project.git}
                  target="_blank"
                  className="hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  Github
                </Link>
              ) : null}
              {project.url ? (
                <Link
                  href={project.url}
                  target="_blank"
                  className="hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  Live
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function ProjectsPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
        <p className="pt-2 text-sm text-muted-foreground">Things I've built</p>
      </div>

      <div className="flex flex-col gap-12">
        <ProjectList items={projects} />
        <ProjectList items={olderProjects} title="Other niche work" />
      </div>
    </main>
  );
}
