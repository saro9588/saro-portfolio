import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="border-t px-5 py-3">
        <div className="flex h-7 justify-center items-center space-x-5">
          <Divider orientation="vertical" />
          <Link href="https://github.com/saro9588">
            <FaGithub />
          </Link>
          <Divider orientation="vertical" />
          <Link href="https://www.linkedin.com/in/saro-babikian-16322aa7">
            <FaLinkedin />
          </Link>
          <Divider orientation="vertical" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
