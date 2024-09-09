import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects - Saro Babikian`,
  description: "Each project showcases my skills and experience in various technologies.",
};

interface Project {
  title: string;
  stack: string;
  siteLink: string;
  image: string;
  description: string | JSX.Element;
}

const projects = () => {
  const projectData: Project[] = [
    {
      title: "Members App",
      stack: "Full Stack",
      siteLink: "https://members-app-gilt.vercel.app/",
      image: "/members.png",
      description: "This is an Application that I am developing for my business. I run a private music studio and this app will help me create student portfolios, update and delete them. This app can serve other types of users as well. You can create a user, store specific info about each user, update the info of each user.",
    },
    {
      title: "Runners Rest API",
      stack: "Java - Spring Boot 3 Rest API",
      siteLink: "https://github.com/saro9588/runnerz",
      image: "/runnerz.png",
      description: "I am creating this REST API to explore some of the possibilities Spring Boot offers. This is a CRUD REST API for recording runs. I am using Java and Spring Boot framework to create this back-end application. I set up a PostgreSql db on docker.",
    },
    {
      title: "Demo App (Rest API) for Employee Management System",
      stack: "Java - Spring Boot 3 & MySql",
      siteLink: "https://github.com/saro9588/Spring-Boot-Employee-Management-System",
      image: "/ems.png",
      description: "This is a full stack application to manage employees. You can Add, delete and edit employees. I am developing the backend of this application using Spring Boot 3 framework and a locally hosted MySql database to store data in tables created using Spring Data JPA. I will use React to create the frontend and axios to make http requests.",
    },
    {
      title: "Demo App (Front-End) for Employee Management System",
      stack: "React & Vite",
      siteLink: "https://github.com/saro9588/ems-frontend",
      image: "/ems-frontend.png",
      description: "This is the front-end of the Employee Management System Spring boot demo app, it is built with react.",
    },
    {
      title: "Bank App v2",
      stack: "FULL STACK",
      siteLink: "https://bank-app-v2-rho.vercel.app/",
      image: "/bank.png",
      description: "In this project I am rebuilding my capstone project from the MIT xPro bootcamp. For this version 2 of the Bank App, I am using a supabase/postgres database and authentication and authorization utilizing the RLS. I implemented actual user authentication upon logging in. Each logged-in user is only allowed to see his/her row from the database. Each user is only allowed to update their own data.",
    },
    {
      title: "JS-Practice-Problems",
      stack: "JavaScript",
      siteLink: "https://github.com/saro9588/daily-js-practice",
      image: "/JS.avif",
      description: "JS lists problems solving.",
    },
    {
      title: "Legibill",
      stack: "FULL STACK - CONTRIBUTOR",
      siteLink: "https://www.legibill.org/",
      image: "/legibill.png",
      description: (
        <>
          LegiBill helps curious users navigate{" "}
          <Link
            className="text-blue-600"
            href="https://legiscan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LegiScan
          </Link>{" "}
          data. This is a project by{" "}
          <Link
            className="text-blue-600"
            href="https://www.sevanbadal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sevan Badal.
          </Link>{" "}
          I am a contributor.
        </>
      ),
    },
    {
      title: "Portfolio Website",
      stack: "Full Stack",
      siteLink: "https://github.com/saro9588/saro-portfolio",
      image: "/portfolio.png",
      description: "I built my portfolio website with Next.js to explore next.js possibilities. Specially the navigation. I am using nextui for html elements and tailwind css for styles.",
    },
    {
      title: "Bank App v1",
      stack: "Full Stack - MIT xPro Capstone Project",
      siteLink: "https://saro-babikianfullstackbankingapp.netlify.app/#",
      image: "/badbank.png",
      description: "Note: I stopped hosting this application on heroku. You'll get a server error when interacting with the app. It was a capstone project for my coding bootcamp",
    },
  ];

  return (
    <div className="text-gray-800 dark:text-white bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-10">
        <div className="mb-12 px-5 md:px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg md:text-xl">
            Check out some of my latest projects below. Each project showcases my skills and experience in various technologies.
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
                      <p className="text-sm uppercase text-gray-600 dark:text-gray-400">{project.stack}</p>
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
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardHeader, CardBody } from "@nextui-org/react";
// import type { Metadata } from "next";
// import { FaGithub } from "react-icons/fa";


// export const metadata: Metadata = {
//   title: `Projects - Saro Babikian`,
//   description: "Each project showcases my skills and experience in various technologies.",
// };

// const projects = () => {
//   const projectData: any[] = [
//     {
//       title: "Members App",
//       stack: "Full Stack",
//       siteLink: "https://members-app-gilt.vercel.app/",
//       image: "/members.png",
//       description: "This is an Application that I am developing for my business. I run a private music studio and this app will help me create student portfolios, update and delete them. This app can serve other types of users as well. You can create a user, store specific info about each user, update the info of each user."
//     },
//     {
//       title: "Runners Rest API",
//       stack: "Java - Spring Boot 3 Rest API",
//       siteLink: "https://github.com/saro9588/runnerz",
//       image: "/runnerz.png",
//       description: "I am creating this REST API to explore some of the posibilities Spring Boot offers. This is a CRUD REST API for recording runs. I am using Java and Spring Boot framework to create this back-end application. I set up a PostgreSql db on docker."
//     },
//         {
//       title: "Demo App (Rest API) for Employee Management System",
//       stack: "Java - Spring Boot 3 & MySql",
//       siteLink: "https://github.com/saro9588/Spring-Boot-Employee-Management-System",
//       image: "/ems.png",
//       description: "This is a full stack application to manage employees. You can Add, delete and edit employees. I am developing the backend of this application using Spring Boot 3 framework and a locally hosted MySql database to store data in tables created using Spring Data JPA. I will use React to create the frontend and axios to make http requests."
//     },
//     {
//       title: "Demo App (Front-End) for Employee Management System",
//       stack: "React & Vite",
//       siteLink: "https://github.com/saro9588/ems-frontend",
//       image: "/ems-frontend.png",
//       description: "This is the front-end of the Employee Managment System Spring boot demo app, it is built with react."
//     },
//     {
//       title: "Bank App v2",
//       stack: "FULL STACK",
//       siteLink: "https://bank-app-v2-rho.vercel.app/",
//       image: "/bank.png",
//       description:"In this project I am rebuilding my capstone project from the MIT xPro bootcamp. For this version 2 of the Bank App, I am using a supabase/postgres database and authentication and authorization utilizing the RLS. I implemented actual user authentication upon logging in. Each logged-in user is only allowed to see his/her row from the database. Each user is only allowed to update their own data. Future Improvements: Create a new table in the database that has a relationship one-to-many with each user that stores a history of all the transactions. Create a new component that shows the history of all the deposits and withdrawals by a user."
//     },
//         {
//       title: "JS-Practice-Problems",
//       stack: "JavaScript",
//       siteLink: "https://github.com/saro9588/daily-js-practice",
//       image: "/JS.avif",
//       description: "JS lists problems solving."
//     },
// {
//   title: "Legibill",
//   stack: "FULL STACK - CONTRIBUTOR",
//   siteLink: "https://www.legibill.org/",
//   image: "/legibill.png",
//   description: (
//     <>
//       LegiBill helps curious users navigate{" "}
//       <Link
//         className="text-blue-600"
//         href="https://legiscan.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         LegiScan
//       </Link>{" "}
//       data. This is a project by{" "}
//       <Link
//         className="text-blue-600"
//         href="https://www.sevanbadal.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Sevan Badal.
//       </Link>{" "}
//       I am a contributor.
//     </>
//   ),
//     },
//     {
//       title: "Portfolio Website",
//       stack: "Full Stack",
//       siteLink: "https://github.com/saro9588/saro-portfolio",
//       image: "/portfolio.png",
//       description: "I built my portfolio website with Next.js to explore next.js possibilities. Specially the navigation. I am using nextui for html elements and tailwind css for styles."
//     },
//     {
//       title: "Bank App v1",
//       stack: "Full Stack - MIT xPro Capstone Project",
//       siteLink: "https://saro-babikianfullstackbankingapp.netlify.app/#",
//       image: "/badbank.png",
//       description:"Note: I stopped hosting this application on heroku. You'll get a server error when interacting with the app. It was a capstione project for my coding bootcamp"
//     },
//   ];

//   return (
//     <div className="text-default-800 dark:text-white light:text-black bg-blue-300">
//       <div className="bg-blue-300">
//         <div className="p-5">
//           <div className="flex items-center justify-center w-fit pb-5">
//             <p className="p-heading">
//               Check out some of my latest projects below. Each project showcases
//               my skills and experience in various technologies.
//             </p>
//           </div>
//           <div className="">
//             {projectData.map((project, index) => (
//               <div
//                 key={project.title}
//                 className={`flex flex-col md:flex-row items-center mb-6 ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? "" : "md:order-2"}`}>
//                   <Card className="bg-blue hover:scale-105 transition-transform duration-300">
//                     <CardHeader className="pb-0 px-4 flex-col items-start">
//                       <h4 className="font-bold text-large">{project.title}</h4>
//                       <p className="text-tiny uppercase font-bold">
//                         {project.stack}
//                       </p>
//                       <div>
//                         {project.siteLink && (
//                           <small className="text-default-500">
//                             <a href={project.siteLink}>Visit Site</a>
//                           </small>
//                         )}
//                       </div>
//                     </CardHeader>
//                     <Link href={project.siteLink}>
//                       <CardBody className="items-center h-60">
//                         <Image
//                           alt={project.title}
//                           className="rounded-xl "
//                           src={project.image}
//                           height={200}
//                           width={330}
//                         />
//                       </CardBody>
//                     </Link>
//                   </Card>
//                 </div>
//                 <div className={`flex-1 md:w-1/2 p-4 ${index % 2 === 0 ? "" : "md:order-1"}`}>
//                   <p className="p-heading text-lg">Additional Information about - {project.title}:</p>
//                   {project.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="custom-shape-divider-bottom-1725737973">
//           <svg
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
//               className="shape-fill"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default projects;
