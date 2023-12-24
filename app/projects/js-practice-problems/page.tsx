import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-container dark:text-white text-container">
      <div>
        Here I practice JavasScript problems on a regular basis.
        <div>
          {" "}
          <Link href="https://github.com/saro9588/daily-js-practice">
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
