import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { CgEnter } from "react-icons/cg";

export default function Home() {
  return (
    <div className="text-default-800 dark:text-white light:text-black bg-blue-50">
      <div className="bg-blue-50 py-10 pb-0 max-w-7xl mx-auto">
        <div className="parent">
          <div className="child flex justify-center">
            <p className="">
              I am a LA based software developer with experience in HTML, CSS,
              JavaScript, Java & Spring Boot and the MERN stack. I am a recent graduate of the MIT
              xPro Full-Stack Software Development bootcamp. I have built apps, websites & REST APIs using the MERN stack & Spring Boot 3. In addition, I create and host
              WordPress websites.
            </p>
          </div>
          <div className="child gird grid-cols-1 md:grid-cols-1 md:justify-self-center ">
            <div className="flex justify-center">
            <Link href="/projects">
              <Image
                alt="empty html tag"
                className="w-3/4 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
                src="/dev.png"
              />
              </Link>
              </div>
            <div className="flex justify-center md:mt-0"><p className="animate-flash">Check out my code!</p></div>
          </div>
        </div>
<div className="custom-shape-divider-bottom-1725737973">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
      className="shape-fill"
    >
    </path>
  </svg>
</div>

        <div className="parent custom-blue">
          <div className="child">
            <Image alt="" src="/guitar.JPG" />
          </div>
          <div className="child flex items-center">
            <div>
              <p>
                As a musician, I had the honor to perform at the prestigious
                Carnegie Hall in NY in 2019. In addition, I am the founder and
                the manager of Saro&apos;s Guitar Studio.
              </p>
            </div>
            <div className="grid">
              <Link href="https://saroguitar.com/">
                <Image
                  src="/guitar.png"
                  alt="Guitar Image"
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="pl-7"><p className="animate-flash">Click me!</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
