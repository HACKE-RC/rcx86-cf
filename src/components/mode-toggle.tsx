"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const nextTheme = isDark ? "light" : "dark";
  const label = isDark ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      className="z-50 rounded-sm px-2.5 text-xs font-medium text-zinc-500 hover:bg-transparent hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-transparent"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${label.toLowerCase()} theme`}
    >
      {label}
    </Button>
  );
}
