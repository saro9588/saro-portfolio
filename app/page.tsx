import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex justify-center items-center text-center h-full dark:text-white light:text-black">
      <div>
        <h1>Saro&apos;s Portfolio</h1>
        <Divider className="my-4" />
        <div className="my-20">
          <p>LA based software developer.</p>
        </div>
      </div>
    </main>
  );
}
