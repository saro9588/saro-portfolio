import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { projectData } from "./projects";

export default function Home() {
  return (
    <div className="text-default-800 dark:text-white light:text-black bg-blue-50">
      <div className="bg-blue-50 py-10 pb-0 max-w-7xl mx-auto">
        <div className="parent">
          <div className="child flex justify-center">
            <p className="">
              I am a LA based software developer with experience in HTML, CSS,
              JavaScript, Java & Spring Boot and the MERN stack. I am a recent
              graduate of the MIT xPro Full-Stack Software Development bootcamp.
              I have built apps, websites & REST APIs using the MERN stack &
              Spring Boot 3. In addition, I create and host WordPress websites.
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
            <div className="flex justify-center md:mt-0">
              <p className="animate-flash">Check out my code!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-gray-800 dark:text-white bg-blue-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-10">
              <div className="flex justify-center mb-12 px-5 md:px-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Projects
                </h2>
              </div>
              <div className="space-y-8">
                {projectData.slice(0, 4).map((project, index) => (
                  <div
                    key={project.title}
                    className={`flex flex-col md:flex-row items-center px-5 md:px-5 ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    } space-y-6 md:space-y-0 md:space-x-6`}
                  >
                    <div className="md:w-1/2 w-full">
                      <Link href={project.siteLink} target="_blank">
                        <Card className="bg-blue-100 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                          <CardHeader className="p-4 grid">
                            <h4 className="text-xl font-semibold">
                              {project.title}
                            </h4>
                            <p className="text-sm uppercase text-gray-600 dark:text-gray-400">
                              {project.stack}
                            </p>
                          </CardHeader>
                          <CardBody className=" pb-10 items-center">
                            <Image
                              alt={project.title}
                              className="rounded-xl"
                              src={project.image}
                              height={200}
                              width={330}
                            />
                          </CardBody>
                        </Card>
                      </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h4 className="text-lg font-semibold mb-2">
                        Project Details
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <div className="pl-7">
                <p className="animate-flash">Click me!</p>
              </div>
            </div>
          </div>
          <div className="child">
            <Image alt="" src="/guitar.JPG" />
          </div>
        </div>
      </div>
    </div>
  );
}
