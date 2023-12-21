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
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/membersApp.png"
                height={0}
                width={270}
              />
              <Button>
                <Link href="/projects/members-app">Learn More</Link>
              </Button>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/membersApp.png"
                height={0}
                width={270}
              />
              <Button>
                <Link href="/projects/bank-app">Learn More</Link>
              </Button>
            </CardBody>
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
