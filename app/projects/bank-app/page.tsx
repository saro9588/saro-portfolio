import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>
        Bank App
        <div>
          <Link href="https://saro-babikianfullstackbankingapp.netlify.app/#">
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
