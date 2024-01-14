import { Card, CardFooter, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Me - Saro Babikian`,
  description:
    "LA based software developer, experienced in HTML, CSS, JavaScript, and the MERN stack.",
};

const Page = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="mx-2 dark:text-white light:text-black pb-2">
        <div className="md:grid md:grid-cols-2 sm:grid-cols-1 gap-5 text-default-800 ">
          <div>
            <p className="mb-2">
              I am a Los Angeles based software and web developer with
              experience in HTML, CSS, JavaScript, and the MERN stack. My
              interest in tech and specifically programming started in 2021 as
              the world was locked down due to Covid-19. I started my journey by
              watching a few YouTube videos and cloning basic webpages such as
              YouTube home page and Tesla and others.
            </p>

            <p className="mb-2">
              Furthermore, my interest grew in the field, so I took and
              successfully completed a few online courses on LinkedIn and
              codecademy.com. After doing some research, I decided to enroll in
              MIT xPro full stack coding bootcamp. I was excited to take
              advantage of the learning opportunity from one of the world&apos;s
              top leading technology institutions and its world-class faculty.
            </p>

            <p className="mb-2">
              Throughout the bootcamp, I had weekly assignments and coding
              challenges to solve and submit. Since my graduation from the
              bootcamp, I have been working on a variety of personal projects
              and I have been actively contributing to friends&apos; projects.
            </p>

            <p className="mb-2">
              Currently, I am highly motivated and excited to land my first-time
              full-time job in the tech world as a software developer.
            </p>
          </div>
          <Card className="">
            <Image alt="" width={800} height={800} src="/AGBU.JPG"></Image>
            <CardFooter>Los Angeles. 2022</CardFooter>
          </Card>
          <div className=""></div>
          <div></div>
          <Card>
            <Image alt="" width={800} height={800} src="/carnegie.jpg"></Image>
            <CardFooter>Carnegie Hall, New York. 2019</CardFooter>
          </Card>
          <div>
            <>
              <p className="mb-2">
                I&apos;m also an award-winning guitarist based in Los Angeles.
                Over the years, I&apos;ve had the honor of performing in
                prestigious venues like Carnegie Hall in New York. One of the
                highlights was being a guest soloist with the Port Townsend
                Symphony Orchestra, conducted by Tigran Arakelyan, back in 2019.
                The Yerevan International Guitar Festival also invited me to
                perform in 2017.
              </p>

              <p className="mb-2">
                Sharing my passion for music, I&apos;ve been deeply involved as
                both an educator and performer in LA. Teaching group and private
                guitar and music lessons across various schools and music
                academies has been an enriching experience. Throughout the past
                decade, I have been the founder and the manager of my private
                studio with over 40 students.
              </p>
            </>
          </div>
          <div>
            <p className="mb-2">
              My educational background includes a Bachelor of Music and a
              master&apos;s degree from the University of Southern California
              Thornton School of Music. Currently, I am very much looking
              forward to pivoting into the tech industry and continue sharing my
              music on the side.
            </p>
          </div>
          <Card>
            <Image alt="" width={800} height={800} src="/AGBU2.JPG"></Image>
            <CardFooter>Los Angeles. 2022</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
