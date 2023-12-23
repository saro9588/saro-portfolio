import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Footer = () => {
  return (
    <footer className="footer border-t px-5 py-5">
      <div className="flex h-7 justify-center items-center space-x-5">
        <div className="flex justify-center items-center">
          <Link href="tel:+18187266444">
            <CiPhone />
          </Link>
          <Link href="tel:+18187266444">
            {/* <p className="sm:hidden">+1818-726-6444</p> */}
          </Link>
        </div>
        <Divider orientation="vertical" />
        <Link href="https://github.com/saro9588">
          <FaGithub />
        </Link>
        <Divider orientation="vertical" />
        <Link href="https://www.linkedin.com/in/saro-babikian-16322aa7">
          <FaLinkedin />
        </Link>
        <Divider orientation="vertical" />
        <div className="flex justify-left items-center space-x-5">
          <Link href="mailto:babikiansaro@gmail.com">
            <MdOutlineMail />
          </Link>
          <Link href="mailto:babikiansaro@gmail.com">
            {/* <p className="sm:hidden">babikiansaro@gmail.com</p> */}
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
