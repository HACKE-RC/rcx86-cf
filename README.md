# rc86 — Personal Site

> A fast, clean, edge‑deployed portfolio built with Next.js App Router, TanStack Query, and shadcn/ui.

---

## Tech Stack

* **Next.js (App Router)** – React framework that handles routing, SSR, and the build pipeline.
* **TanStack Query** – Smart cache for async data so your app doesn’t refetch the same thing like a goldfish.
* **shadcn/ui + Tailwind** – Copy‑paste UI components you own, styled with utility CSS.
* **TypeScript** – JavaScript but with a brain.

---

## Project Structure (what matters)

```
archives/                 # Old versions (never shipped)
public/                   # Static assets
src/
  app/                    # Next.js routes (App Router)
  components/
    home/                 # Home page UI blocks
    providers/            # Global providers (Query, Theme)
    ui/                   # shadcn/ui components
  data/                   # Editable content (THIS is what you change)
  hooks/                  # Reusable logic
  lib/                    # Utilities
```

---

## Editing Content (the only files you actually touch)

### Blogs

`src/data/blogs.ts`

```ts
export const blogs = [
  {
    title: "One shotting CTF challenges with Pwno MCP Server",
    topic: "CTF / Security Tooling",
    url: "https://pwno.io/blog/pwno-reverse-smt",
  },
  {
    title: "A deep dive into Processes, Threads, Fibers and Jobs on Windows",
    topic: "Operating Systems",
    url: "https://de-engineer.github.io/Processes-threads-jobs-fibers/",
  },
  {
    title: "Understanding SMT Solvers: An Introduction to Z3",
    topic: "Formal Methods / SMT Solvers",
    hasVideo: true,
    url: "https://de-engineer.github.io/SMT-Solvers/",
  },
]
```

### Home

`src/data/home.ts`

```ts
export const home = {
  name: "Mr. Rc",
  headline: "Passionate CS Student",
  tagline: "Low-Level Computer Science Research & Engineering",
  bio: "Passionate CS Student with interests in Low-Level Computer Science Research and Engineering. Agentic Research Pwno. Magnificent Grants Grantee.",
  interests: [
    "Low-Level Computer Science",
    "Operating Systems",
    "Reverse Engineering",
    "Compilers",
    "Virtual Memory",
    "Assembly Debugging",
    "Embedded Systems",
  ],
}
```

### Projects

`src/data/projects.ts`

```ts
export const projects = [
  {
    name: "Zathura",
    description: "A cross-platform visual debugger for learning and debugging assembly. Supports major architectures and focuses on being pretty and educational.",
    category: "Debugger / Tooling",
    url: "https://zathura.dev",
    git: "https://github.com/ZathuraDbg/ZathuraDbg",
  },
  {
    name: "OptimistOS",
    description: "A hobby operating system built for fun and to deeply understand low-level computer science concepts.",
    category: "Operating System",
    git: "https://github.com/HACKE-RC/OptimistOS",
  },
]
```

### Socials

`src/data/socials.ts`

```ts
import { GithubIcon, MailIcon } from "lucide-react";

export const socials = [
  { name: "Twitter / X", handle: "rcx86", url: "https://x.com/rcx86", icon: "/x.avif" },
  { name: "GitHub", handle: "HACKE-RC", url: "https://github.com/HACKE-RC", icon: GithubIcon },
  { name: "Discord", handle: "rc.hq", url: "https://discord.com/users/rc.hq", icon: "/discord.avif" },
  { name: "Email", handle: "crretsim@gmail.com", url: "mailto:crretsim@gmail.com", icon: MailIcon },
]
```

> Change these files → commit → push → deploy → site updates. No CMS drama.

---

## Local Development

```bash
pnpm install
pnpm dev
```

Open: [http://localhost:3000](http://localhost:3000)


