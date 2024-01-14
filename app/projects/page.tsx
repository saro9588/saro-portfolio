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
  return (
    <>
      <div className="page-container mx-auto max-w-screen-lg">
        <div className="grid justify-center items-center h-auto mb-auto ">
          <div className=" md:grid md:grid-cols-3 sm:grid-cols-1 gap-2 space-y-3">
            <Card className="py-4 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Members App</h4>
                <p className="text-tiny uppercase font-bold">Full Stack</p>
                <small className="text-default-500">
                  <Link href="https://members-app-gilt.vercel.app/">
                    Visit Site
                  </Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/membersApp.png"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button className="">
                  <Link href="/projects/members-app">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Bank App</h4>
                <p className="text-tiny uppercase font-bold">Full Stack</p>
                <small className="text-default-500">
                  <Link href="https://saro-babikianfullstackbankingapp.netlify.app/#">
                    Visit Site
                  </Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/bankApp.png"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button>
                  <Link href="/projects/bank-app">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Portfolio Website</h4>
                <p className="text-tiny uppercase font-bold">Full Stack</p>
                <small className="text-default-500">
                  <Link href="https://github.com/saro9588/saro-portfolio">
                    Visit Site
                  </Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/portfolio.png"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button className="">
                  <Link href="/projects/portfolio">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Ts-Express-React App</h4>
                <p className="text-tiny uppercase font-bold">
                  Full Stack - Contributor
                </p>
                <small className="text-default-500">
                  <Link href="https://github.com/saro9588/typescript-express-react">
                    Visit Site
                  </Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/ts-express-react.png"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button>
                  <Link href="/projects/ts-express-react">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">JS-Practice-Problems</h4>
                <p className="text-tiny uppercase font-bold">JavaScript </p>
                <small className="text-default-500">
                  <Link href="https://github.com/saro9588/daily-js-practice">
                    Visit Site
                  </Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/javascript.webp"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button>
                  <Link href="/projects/js-practice-problems">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Legibill</h4>
                <p className="text-tiny uppercase font-bold">
                  FULL STACK - CONTRIBUTOR
                </p>
                <small className="text-default-500">
                  <Link href="https://www.legibill.org/">Visit Site</Link>
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/legibill.png"
                  height={10}
                  width={330}
                />
              </CardBody>
              <div className="flex justify-center items-center h-full p-2">
                <Button>
                  <Link href="/projects/legibill">Learn More</Link>
                </Button>
              </div>
            </Card>
          </div>
          <div className="flex justify-start items-center py-5">
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
