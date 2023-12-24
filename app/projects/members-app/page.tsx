import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>Members App</div>
      <div>
        <Button>
          <Link href="https://members-app-gilt.vercel.app/">Visit Site</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
