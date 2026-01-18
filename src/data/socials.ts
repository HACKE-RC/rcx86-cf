import { GithubIcon, GlobeIcon, MailIcon } from "lucide-react";
/**
 * Icons:
 * - If available in `lucide-react`, import from there (https://lucide.dev/icons/).
 * - Otherwise, save the icon image in `/public`.
 * - Recommended: use `.avif` to reduce size and bandwidth.
 */

export const socials = [
  {
    name: "X",
    handle: "rcx86",
    url: "https://x.com/rcx86",
    icon: "/x.avif",
  },
  {
    name: "GitHub",
    handle: "HACKE-RC",
    url: "https://github.com/HACKE-RC",
    icon: GithubIcon,
  },
  {
    name: "Discord",
    handle: "rc.hq",
    url: "https://discord.com/users/rc.hq",
    icon: "/discord.avif",
  },
  {
    name: "Email",
    handle: "rc@rexion.ai",
    url: "mailto:rc@rexion.ai",
    icon: MailIcon,
  },
  {
    name: "Blog",
    handle: "de-engineer",
    url: "https://de-engineer.github.io",
    icon: GlobeIcon,
  },
];
