import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { projectData } from "../projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects - Saro Babikian`,
  description:
    "Each project showcases my skills and experience in various technologies.",
};

const projects = () => {
  return (
    <div className="text-gray-800 dark:text-white bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-10">
        <div className="mb-12 px-5 md:px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg md:text-xl">
            Check out some of my latest projects below. Each project showcases
            my skills and experience in various technologies.
          </p>
        </div>
        <div className="space-y-8">
          {projectData.map((project, index) => (
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
                      <h4 className="text-xl font-semibold">{project.title}</h4>
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
                <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
