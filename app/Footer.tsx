import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Footer = () => {
  return (
    <footer className="footer border-t py-10">
      <div className="flex justify-between items-center mx-auto max-w-screen-lg">
        <div className="flex flex-col items-start mx-3 gap-4">
          <div className="flex justify-center items-center space-x-5">
            <div className="flex justify-center items-center">
              <Link href="tel:+18187266444">
                <BsFillTelephoneFill />
              </Link>
              <Link href="tel:+18187266444">
              </Link>
            </div>
            <Link href="mailto:babikiansaro@gmail.com">
              <MdEmail />
            </Link>
            <Link href="https://github.com/saro9588">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/saro-babikian-16322aa7">
              <FaLinkedin />
            </Link>
          </div>
  
        </div>
                <div className="flex items-center space-x-1">
            <FaRegCopyright />
            <p>Saro Babikian 2024</p>
          </div>
        {/* <div className="mx-2">
   <ThemeSwitcher />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
