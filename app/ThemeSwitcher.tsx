// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      current theme: {theme}
      <Button onClick={() => setTheme("light")}>Light Mode</Button>
      <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
    </div>
  );
}
