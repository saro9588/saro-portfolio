import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects - Saro Babikian`,
  description: "Check out my latest projects.",
};

const projects = () => {
  const projectData: any[] = [
    {
      title: "Members App",
      stack: "Full Stack",
      siteLink: "https://members-app-gilt.vercel.app/",
      learnMoreLink: "/projects/members-app",
      image: "/members.png",
    },
    {
      title: "Bank App v2",
      stack: "FULL STACK",
      siteLink: "https://github.com/saro9588/mit-bank-app-v2",
      learnMoreLink: "/projects/bank-app2",
      image: "/BankApp2.png",
    },
    {
      title: "Legibill",
      stack: "FULL STACK - CONTRIBUTOR",
      siteLink: "https://www.legibill.org/",
      learnMoreLink: "/projects/legibill",
      image: "/legibill.png",
    },
    {
      title: "Bank App v1",
      stack: "Full Stack - MIT xPro Capstone Project",
      siteLink: "https://saro-babikianfullstackbankingapp.netlify.app/#",
      learnMoreLink: "/projects/bank-app",
      image: "/bank.png",
    },
    {
      title: "Portfolio Website",
      stack: "Full Stack",
      siteLink: "https://github.com/saro9588/saro-portfolio",
      learnMoreLink: "/projects/portfolio",
      image: "/portfolio.png",
    },
    {
      title: "Ts-Express-React App",
      stack: "Full Stack - Contributor",
      siteLink: "https://github.com/saro9588/typescript-express-react",
      learnMoreLink: "/projects/ts-express-react",
      image: "/ts-express-react.png",
    },
    {
      title: "JS-Practice-Problems",
      stack: "JavaScript",
      siteLink: "https://github.com/saro9588/daily-js-practice",
      learnMoreLink: "/projects/js-practice-problems",
      image: "/javascript.webp",
    },
  ];
  return (
    <>
      <div className="page-container mx-auto max-w-screen-lg">
        <div className="grid justify-center items-start">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 pb-2">
            {projectData.map((project) => (
              <Card key={project.title} className="py-1 pb-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{project.title}</h4>
                  <p className="text-tiny uppercase font-bold">
                    {project.stack}
                  </p>
                  <div>
                    {project.siteLink && (
                      <small className="text-default-500">
                        <a href={project.siteLink}>Visit Site</a>
                      </small>
                    )}
                  </div>
                </CardHeader>
                <Link href={project.learnMoreLink}>
                  <CardBody className="overflow-clip h-80 py-2">
                    <Image
                      alt="Card background"
                      className="object-fill rounded-xl"
                      src={project.image}
                      height={10}
                      width={330}
                    />
                  </CardBody>
                </Link>

                {/* <div className="flex justify-start items-center h-auto p-3">
                    {project.learnMoreLink && (
                      <Button>
                        <Link href={project.learnMoreLink}>Learn More</Link>
                      </Button>
                    )}
                  </div> */}
              </Card>
            ))}
          </div>
          {/* <div className="flex justify-start items-center py-2">
            <Button>
              <Link href="/">Back</Link>
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default projects;
