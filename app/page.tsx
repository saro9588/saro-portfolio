import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Saro's Portfolio</h1>
      <Link href="/projects">Projects</Link>

      <div className="prose prose-neutral dark:prose-invert">
        <p>I am a LA based</p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"></div>
    </main>
  );
}
