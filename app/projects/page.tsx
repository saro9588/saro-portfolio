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
      title: "Bank App",
      stack: "Full Stack",
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
    {
      title: "Legibill",
      stack: "FULL STACK - CONTRIBUTOR",
      siteLink: "https://www.legibill.org/",
      learnMoreLink: "/projects/legibill",
      image: "/legibill.png",
    },
  ];
  return (
    <>
      <div className="page-container mx-auto max-w-screen-lg">
        <div className="grid justify-center items-center h-auto mb-auto min-h-screen ">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
            {projectData.map((project) => (
              <Card key={project.title} className="py-1 pb-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{project.title}</h4>
                  <p className="text-tiny uppercase font-bold">
                    {project.stack}
                  </p>
                  {project.siteLink && (
                    <small className="text-default-500">
                      <Link href={project.siteLink}>Visit Site</Link>
                    </small>
                  )}
                </CardHeader>
                <CardBody className="overflow-clip h-72 py-2">
                  <Image
                    alt="Card background"
                    className="object-fill rounded-xl"
                    src={project.image}
                    height={10}
                    width={330}
                  />
                </CardBody>
                <div className="flex justify-start items-center h-auto p-3">
                  {project.learnMoreLink && (
                    <Button>
                      <Link href={project.learnMoreLink}>Learn More</Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-start items-center py-2">
            <Button>
              <Link href="/">Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;

// const projects = () => {
//   return (
//     <>
//       <div className="page-container mx-auto max-w-screen-lg">
//         <div className="grid justify-center items-center h-auto mb-auto ">
//           <div className=" md:grid md:grid-cols-3 sm:grid-cols-1 gap-2 space-y-3">
//             <Card className="py-4 ">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">Members App</h4>
//                 <p className="text-tiny uppercase font-bold">Full Stack</p>
//                 <small className="text-default-500">
//                   <Link href="https://members-app-gilt.vercel.app/">
//                     Visit Site
//                   </Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/membersApp.png"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button className="">
//                   <Link href="/projects/members-app">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="py-4">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">Bank App</h4>
//                 <p className="text-tiny uppercase font-bold">Full Stack</p>
//                 <small className="text-default-500">
//                   <Link href="https://saro-babikianfullstackbankingapp.netlify.app/#">
//                     Visit Site
//                   </Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/bankApp.png"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button>
//                   <Link href="/projects/bank-app">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="py-4">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">Portfolio Website</h4>
//                 <p className="text-tiny uppercase font-bold">Full Stack</p>
//                 <small className="text-default-500">
//                   <Link href="https://github.com/saro9588/saro-portfolio">
//                     Visit Site
//                   </Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/portfolio.png"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button className="">
//                   <Link href="/projects/portfolio">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="py-4">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">Ts-Express-React App</h4>
//                 <p className="text-tiny uppercase font-bold">
//                   Full Stack - Contributor
//                 </p>
//                 <small className="text-default-500">
//                   <Link href="https://github.com/saro9588/typescript-express-react">
//                     Visit Site
//                   </Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/ts-express-react.png"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button>
//                   <Link href="/projects/ts-express-react">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="py-4">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">JS-Practice-Problems</h4>
//                 <p className="text-tiny uppercase font-bold">JavaScript </p>
//                 <small className="text-default-500">
//                   <Link href="https://github.com/saro9588/daily-js-practice">
//                     Visit Site
//                   </Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/javascript.webp"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button>
//                   <Link href="/projects/js-practice-problems">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="py-4">
//               <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                 <h4 className="font-bold text-large">Legibill</h4>
//                 <p className="text-tiny uppercase font-bold">
//                   FULL STACK - CONTRIBUTOR
//                 </p>
//                 <small className="text-default-500">
//                   <Link href="https://www.legibill.org/">Visit Site</Link>
//                 </small>
//               </CardHeader>
//               <CardBody className="overflow-visible py-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl"
//                   src="/legibill.png"
//                   height={10}
//                   width={330}
//                 />
//               </CardBody>
//               <div className="flex justify-center items-center h-full p-2">
//                 <Button>
//                   <Link href="/projects/legibill">Learn More</Link>
//                 </Button>
//               </div>
//             </Card>
//           </div>
//           <div className="flex justify-start items-center py-2">
//             <Button>
//               <Link href="/">Back</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default projects;
