import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="projects-pages-container  dark:text-white text-container">
      <div>Members App</div>
      <div className=" dark:text-white light:text-black">
        <div className="text-default-800 text-container ">
          <p>
            This is an Application that I am developing for my business. I run a
            private music studio and this app will help me create student
            portfolios, update and delete them. This app can serve other types
            of users as well. You can create a user, store specific info about
            each user, update the info of each user.
          </p>
          <div>
            <h1>Challenges:</h1>
            <ul>
              <li>1.</li>
              <li>2.</li>
              <li>3.</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Button>
          <Link href="https://members-app-gilt.vercel.app/">Visit Site</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
