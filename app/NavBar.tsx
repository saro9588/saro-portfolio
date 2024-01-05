"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <nav className="border-b mb-5 px-5 py-3">
        <div className="flex h-7 justify-start items-center  space-x-5">
          <Divider orientation="vertical" />
          <Link
            className={`link ${
              pathname === "/" ? "text-zinc-600 dark:text-red-200" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Divider orientation="vertical" />
          <Link
            className={`link ${
              pathname === "/projects" ? "text-zinc-600 dark:text-red-200" : " "
            }`}
            href="/projects"
          >
            Projects
          </Link>
          <Divider orientation="vertical" />
          <Link
            className={`link ${
              pathname === "/about" ? "text-zinc-600 dark:text-red-200" : " "
            }`}
            href="/about"
          >
            About
          </Link>
          <Divider orientation="vertical" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
