import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>
        Portfolio
        <div>
          {" "}
          <Link href="https://github.com/saro9588/saro-portfolio">
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
