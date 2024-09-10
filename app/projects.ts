export interface Project {
  title: string;
  stack: string;
  siteLink: string;
  image: string;
  description: string;
}

export const projectData: Project[] = [
  {
    title: "Members App",
    stack: "Full Stack",
    siteLink: "https://members-app-gilt.vercel.app/",
    image: "/members.png",
    description:
      "This is an Application that I am developing for my business...",
  },
  {
    title: "Runners Rest API",
    stack: "Java - Spring Boot 3 Rest API",
    siteLink: "https://github.com/saro9588/runnerz",
    image: "/runnerz.png",
    description:
      "I am creating this REST API to explore some of the possibilities...",
  },
  {
    title: "Demo App (Rest API) for Employee Management System",
    stack: "Java - Spring Boot 3 & MySql",
    siteLink:
      "https://github.com/saro9588/Spring-Boot-Employee-Management-System",
    image: "/ems.png",
    description:
      "This is a full stack application to manage employees. You can Add, delete and edit employees...",
  },
  {
    title: "Demo App (Front-End) for Employee Management System",
    stack: "React & Vite",
    siteLink: "https://github.com/saro9588/ems-frontend",
    image: "/ems-frontend.png",
    description:
      "This is the front-end of the Employee Management System Spring boot demo app, it is built with react.",
  },
  {
    title: "Bank App v2",
    stack: "FULL STACK",
    siteLink: "https://bank-app-v2-rho.vercel.app/",
    image: "/bank.png",
    description:
      "In this project I am rebuilding my capstone project from the MIT xPro bootcamp...",
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
    description:
      "LegiBill helps curious users navigate LegiScan data. This is a project by Sevan Badal. I am a contributor.",
  },
  {
    title: "Portfolio Website",
    stack: "Full Stack",
    siteLink: "https://github.com/saro9588/saro-portfolio",
    image: "/portfolio.png",
    description:
      "I built my portfolio website with Next.js to explore next.js possibilities...",
  },
  {
    title: "Bank App v1",
    stack: "Full Stack - MIT xPro Capstone Project",
    siteLink: "https://saro-babikianfullstackbankingapp.netlify.app/#",
    image: "/badbank.png",
    description:
      "Note: I stopped hosting this application on heroku. You'll get a server error when interacting with the app. It was a capstone project for my coding bootcamp.",
  },
];
