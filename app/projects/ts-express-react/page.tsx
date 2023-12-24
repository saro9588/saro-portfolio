import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>
        typescript-express-react
        <div>
          <Button>
            <Link href="https://github.com/saro9588/typescript-express-react">
              Visit Site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
