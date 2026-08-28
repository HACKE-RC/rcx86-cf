export type ProjectItem = {
  name: string;
  description: string;
  category: string;
  git: string;
  url?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Zathura",
    description:
      "A cross-platform visual debugger for learning and debugging assembly. Supports major architectures and focuses on being pretty and educational.",
    category: "Debugger / Tooling",
    url: "https://zathura.dev",
    git: "https://github.com/ZathuraDbg/ZathuraDbg",
  },
  {
    name: "BandSox",
    description: "Sanboxes for AI agents and humans.",
    category: "Tooling",
    git: "https://github.com/hacke-rc/bandsox",
  },
  {
    name: "ttyl",
    description: "Share your terminal session with a link!",
    category: "Tooling",
    git: "https://github.com/HACKE-RC/ttyl",
  },
  {
    name: "OptimistOS",
    description:
      "A hobby operating system built for fun and to deeply understand low-level computer science concepts.",
    category: "Operating System",
    git: "https://github.com/HACKE-RC/OptimistOS",
  },
  {
    name: "Searxh",
    description: "Extremely fast indexed keyword search for agents.",
    category: "Search / Tooling",
    git: "https://github.com/HACKE-RC/sx",
  },
  {
    name: "Eigen",
    description: "Agentic commit analysis for security.",
    category: "Security / Reversing",
    git: "https://github.com/HACKE-RC/Eigen",
  },
  {
    name: "Awesome Reversing",
    description:
      "A curated list of free resources for learning reverse engineering.",
    category: "Resource List",
    git: "https://github.com/HACKE-RC/awesome-reversing",
  },
];

export const olderProjects: ProjectItem[] = [
  {
    name: "ctrl",
    description: "Android app which turns your phone into an MCP server.",
    category: "Mobile / Tooling",
    git: "https://github.com/HACKE-RC/ctrl",
  },
  {
    name: "HexEditor",
    description: "ImGui hex editor with additional features.",
    category: "Reverse Engineering / Tooling",
    git: "https://github.com/HACKE-RC/HexEditor",
  },
  {
    name: "peritux",
    description: "Portable Executable parser written in C++.",
    category: "Binary Analysis",
    git: "https://github.com/HACKE-RC/peritux",
  },
  {
    name: "webdork",
    description:
      "Python tool for automating dorking and finding information disclosure issues.",
    category: "Security / Tooling",
    git: "https://github.com/HACKE-RC/webdork",
  },
  {
    name: "Compiler",
    description:
      "A compiler for the Jack Programming Language from Nand2Tetris, written in C++ without formal compiler theory.",
    category: "Compiler",
    git: "https://github.com/HACKE-RC/Jack-Compiler",
  },
  {
    name: "VM Translator & Assembler",
    description:
      "Assembler and VM translator for the HACK VM language as part of the Nand2Tetris course.",
    category: "Toolchain",
    git: "https://github.com/HACKE-RC/vm-translator",
  },
  {
    name: "lc",
    description: "List sessions by different coding agents.",
    category: "CLI / Tooling",
    git: "https://github.com/HACKE-RC/lc",
  },
  {
    name: "lldb_mcp",
    description: "LLDB MCP server.",
    category: "Debugger / Tooling",
    git: "https://github.com/HACKE-RC/lldb_mcp",
  },
];
