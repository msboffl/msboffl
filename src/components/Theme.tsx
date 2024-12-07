"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
