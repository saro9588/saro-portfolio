import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="projects-pages-container dark:text-white text-container">
      <div>LegiBill</div>
      <div className="page-container dark:text-white light:text-black">
        <div className="text-default-800 text-container ">
          <p>
            This is a project by{" "}
            <Link
              className="text-blue-600"
              href="https://www.sevanbadal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sevan Badal.
            </Link>{" "}
            I am a contirbutor to this project.
          </p>
          <p>
            LegiBill helps curious users navigate
            <Link
              className="text-blue-600"
              href="https://legiscan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LegiScan
            </Link>{" "}
            data.{" "}
          </p>
        </div>
      </div>
      <div>
        <Button>
          <Link href="https://www.legibill.org/">Visit Site</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
