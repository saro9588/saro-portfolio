import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="border-b mb-5 px-5 py-3">
        <div className="flex h-7 justify-center items-center space-x-5">
          <Divider orientation="vertical" />
          <Link href="/">Home</Link>
          <Divider orientation="vertical" />
          <Link href="/projects">Projects</Link>
          <Divider orientation="vertical" />
          <Link href="/about">About</Link>
          <Divider orientation="vertical" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
