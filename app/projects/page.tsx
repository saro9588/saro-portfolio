import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
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
      description: "This is an Application that I am developing for my business. I run a private music studio and this app will help me create student portfolios, update and delete them. This app can serve other types of users as well. You can create a user, store specific info about each user, update the info of each user."
    },
    {
      title: "Bank App v2",
      stack: "FULL STACK",
      siteLink: "https://bank-app-v2-rho.vercel.app/",
      learnMoreLink: "/projects/bank-app2",
      image: "/BankApp2.png",
      description:"In this project I am rebuilding my capstone project from the MIT xPro bootcamp. For this version 2 of the Bank App, I am using a supabase/postgres database and authentication and authorization utilizing the RLS. I implemented actual user authentication upon logging in. Each logged-in user is only allowed to see his/her row from the database. Each user is only allowed to update their own data. Future Improvements: Create a new table in the database that has a relationship one-to-many with each user that stores a history of all the transactions. Create a new component that shows the history of all the deposits and withdrawals by a user."
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
    <div className="text-default-800 dark:text-white light:text-black bg-blue-300">
      <div className="bg-blue-300">
        <div className="p-5">
          <div className="flex items-center justify-center w-fit">
            <p className="text-start">
              Check out some of my latest projects below. Each project showcases
              my skills and experience in various technologies. Click on the
              project titles to learn more.
            </p>
          </div>
          <div className="mt-7">
            {projectData.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col md:flex-row items-center mb-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? "" : "md:order-2"}`}>
                  <Card className="py-1 pb-0 bg-blue">
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
                    <Link href={project.siteLink}>
                      <CardBody className="items-center h-80 py-2">
                        <Image
                          alt={project.title}
                          className="rounded-xl hover:scale-105 transition-transform duration-300"
                          src={project.image}
                          height={200}
                          width={330}
                        />
                      </CardBody>
                    </Link>
                  </Card>
                </div>
                <div className={`flex-1 md:w-1/2 p-4 ${index % 2 === 0 ? "" : "md:order-1"}`}>
                  <p className="text-lg">Additional Information about {project.title}</p>
                  {project.description}
                </div>
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default projects;
