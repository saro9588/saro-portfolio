import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Footer = () => {
  return (
    <footer className="footer border-t px-5 py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex h-7 justify-start items-center space-x-5">
          <Divider orientation="vertical" />
          <div className="flex justify-center items-center">
            <Link href="tel:+18187266444">
              <BsFillTelephoneFill />
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
              <MdEmail />
            </Link>
          </div>
          <Divider orientation="vertical" />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <FaRegCopyright />
            <p>Saro Babikian 2024</p>
          </div>
        </div>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
