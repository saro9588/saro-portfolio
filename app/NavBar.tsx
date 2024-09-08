"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <nav className="py-3 mx-2">
        <div className="flex h-7 justify-center items-center mx-auto max-w-screen-lg space-x-2">
          <Link
            className={`link ${
              pathname === "/" ? "text-white dark:text-red-200" : ""
            }`}
            href="/"
          >
            <span className="font-cartoon">Home</span>
          </Link>
          <Link
            className={`link ${
              pathname === "/projects" ? "text-white dark:text-red-200" : ""
            }`}
            href="/projects"
          >
            <span className="font-cartoon">Projects</span>
          </Link>
          <Link
            className={`link ${
              pathname === "/about" ? "text-white dark:text-red-200" : ""
            }`}
            href="/about"
          >
            <span className="font-cartoon">About</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
