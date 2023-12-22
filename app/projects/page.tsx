import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

const projects = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="columns-2 sm:columns-2 gap-4 my-8">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Full Stack</p>
              <small className="text-default-500">
                <Link href="https://members-app-gilt.vercel.app/">
                  Visit Site
                </Link>
              </small>
              <h4 className="font-bold text-large">Members App</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/membersApp.png"
                height={10}
                width={270}
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
              <p className="text-tiny uppercase font-bold">Full Stack</p>
              <small className="text-default-500">
                <Link
                  href="https://saro-babikianfullstackbankingapp.netlify.app/#
"
                >
                  Visit Site
                </Link>
              </small>
              <h4 className="font-bold text-large">Bank App</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/bankApp.png"
                height={10}
                width={270}
              />
            </CardBody>
            <div className="flex justify-center items-center h-full p-2">
              <Button>
                <Link href="/projects/bank-app">Learn More</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <Button className="h-full">
          <Link href="/">Back</Link>
        </Button>
      </div>
    </>
  );
};

export default projects;
