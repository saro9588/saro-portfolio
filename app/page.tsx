import Link from "next/link";
export default function Home() {
  return (
    <main className="flex justify-center items-center text-center h-full">
      <div>
        <h1>Saro&apos;s Portfolio</h1>
        <Link href="/projects">Projects</Link>
        <div>
          <p>I am a LA based software developer </p>
        </div>
      </div>
    </main>
  );
}
