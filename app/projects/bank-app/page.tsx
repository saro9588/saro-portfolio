import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>
        Bank App
        <div>
          <Button>
            <Link href="https://saro-babikianfullstackbankingapp.netlify.app/#">
              Visit Site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
