import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="projects-pages-container dark:text-white text-container">
      <div>
        <h4>Bank App</h4>
        <div>
          <h4>Overview:</h4>
          <p className="mb-2">
            In this project I am rebuilding my capstone project from the MIT
            xPro bootcamp. For this version 2 of the Bank App, I am using a
            supabase/postgres database and authentication and authorization
            utilizing the RLS.
          </p>
          <h4>Improvements from version 1 of the Bank-App:</h4>
          <ul className="list-decimal mb-2">
            <li>I implemented actual user authentication upon logging in.</li>
            <li>
              Each logged-in user is only allowed to see his/her row from the
              database.
            </li>
            <li>Each user is only allowed to update their own data.</li>
          </ul>
          <h4>Future Improvements:</h4>
          <ul className="list-decimal mb-2">
            <li>
              Create a new table in the database that has a relationship
              one-to-many with each user that stores a history of all the
              transactions.
            </li>
            <li>
              Create a new component that shows the history of all the deposits
              and withdrawals by a user.
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <div>
            <Button>
              <Link href="https://github.com/saro9588/mit-bank-app-v2">
                GitHub
              </Link>
            </Button>
          </div>
          <p>-- or --</p>
          <div>
            <Button>
              <Link href="https://bank-app-v2-rho.vercel.app/"> Site</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
