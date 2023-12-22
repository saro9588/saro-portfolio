import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex justify-center items-center text-center h-full">
      <div>
        <h1>Saro&apos;s Portfolio</h1>
        <Divider className="my-4" />
        <div className="flex h-5 justify-center  items-center space-x-4 text-small">
          <Divider orientation="vertical" />
          <Link href="/projects">Projects</Link>
          <Divider orientation="vertical" />
          <Link href="/about">About</Link>
          <Divider orientation="vertical" />
        </div>
        <Divider className="my-4" />
        <div className="my-20">
          <p>LA based software developer.</p>
        </div>
      </div>
    </main>
  );
}
