"use client";

import * as React from "react";
import { icons, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="absolute scale-200 transition dark:scale-0"></Sun>
      <Moon className="absolute scale-0 transition dark:scale-200"></Moon>
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
