"use client";

//Themebutton to access theme on the application with the visiable icons

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button aria-label="Toggle Dark Mode" type="button" className="themebutton" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <SunIcon className="h-8 w-8 text-orange-300" /> : <MoonIcon className="h-8 w-8 text-slate-800" />}
    </button>
  );
};

export default ThemeButton;
