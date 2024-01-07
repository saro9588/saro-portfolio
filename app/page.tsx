import { Divider } from "@nextui-org/react";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4 h-auto text-default-800 dark:text-white light:text-black pb-2">
      <div className="justify-center items-center text-center">
        <h1>Saro&apos;s Portfolio</h1>
      </div>
      <Divider className="my-5" />
      <div className="md:grid md:grid-cols-2 sm:grid-cols-1 mx-2">
        <div className="my-2 ml-4 max-w-full">
          <p>
            I am a LA based software developer with experience in HTML, CSS,
            JavaScript, and the MERN stack. I am a recent graduate of the MIT
            xPro Full-Stack Software Development bootcamp. I have built apps and
            websites using the MERN stack. In addition, I create and host
            WordPress websites.
          </p>
          <p>
            As a musician, I had the honor to perform at the prestigious
            Carnegie Hall in NY in 2019. In addition, I am the founder and the
            manager of Saro&apos;s Guitar Studio.
          </p>
        </div>
        <div>
          <div>
            <Card
              isFooterBlurred
              className="w-full h-[400px] col-span-12 sm:col-span-7"
            >
              <CardHeader className=" z-10 top-1 flex-col items-start">
                <h4 className=" font-medium text-xl">Saro Dev </h4>
              </CardHeader>
              <CardBody>
                <Image
                  // removeWrapper
                  // alt="Relaxing app background"
                  // className="z-0 w-full h-full"
                  alt=""
                  src="/dev.png"
                />
              </CardBody>
              <CardFooter className=" bg-black/40 bottom-0 z-5 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="/dev.png"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Coding stuff</p>
                    <p className="text-tiny text-white/60">
                      Check out my latest projects!
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link href="/projects">Visit</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="mt-2">
          <Card
            isFooterBlurred
            className="w-full h-[400px] col-span-12 sm:col-span-7"
          >
            <CardHeader className=" z-10 top-1 flex-col items-start">
              <h4 className=" font-medium text-xl">Saro Music</h4>
            </CardHeader>
            <CardBody>
              <Image
                // removeWrapper
                // alt="Relaxing app background"
                // className="z-0 w-full h-full"
                alt=""
                src="/guitar.JPG"
              />
            </CardBody>
            <CardFooter className=" bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/guitar.JPG"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Music stuff</p>
                  <p className="text-tiny text-white/60">
                    Check out my music!{" "}
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                <Link href="https://saroguitar.com/">Visit</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* <div className="max-w-[800px] h-auto gap-2 grid grid-rows-2 ml-2 mb-2"></div> */}
    </div>
  );
}
