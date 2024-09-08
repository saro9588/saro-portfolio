import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-default-800 dark:text-white light:text-black bg-blue-300">
      <div className="bg-blue-300 pt-5">
        <div className="parent">
          <div className="flex items-center justify-center w-fit">
            <p>
              I am a LA based software developer with experience in HTML, CSS,
              JavaScript, and the MERN stack. I am a recent graduate of the MIT
              xPro Full-Stack Software Development bootcamp. I have built apps
              and websites using the MERN stack. In addition, I create and host
              WordPress websites.
            </p>
          </div>
          <div className="mt-7">
            <Link href="/projects">
              <Image
                alt="Breathing app icon"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
                src="/dev.png"
              />
            </Link>
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
            ></path>
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
            <div className="">
              <Link href="https://saroguitar.com/">
                <Image
                  src="/guitar.png"
                  alt="Guitar Image"
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
