"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for the component to mount before showing the toggle
  useState(() => setMounted(true));

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div>
      <div>
        <Button onClick={toggleTheme}>
          {theme === "light" ? <MdOutlineLightMode /> : <CgDarkMode />}
        </Button>
      </div>
    </div>
  );
}
