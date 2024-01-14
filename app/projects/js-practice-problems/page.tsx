import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="projects-pages-container dark:text-white text-container">
      <div>
        Here I practice JavasScript problems on a regular basis.
        <div>
          <Button>
            <Link href="https://github.com/saro9588/daily-js-practice">
              Visit Site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
