import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="border-t px-5 py-5">
        <div className="flex h-7 justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-5">
            <Link href="tel:+18187266444">
              <CiPhone />
            </Link>
            <Link href="tel:+18187266444">+1-818-726-6444</Link>
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
            <MdOutlineMail />
            babikiansaro@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
