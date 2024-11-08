import Link from "next/link";

export default function NextJS() {
  return (
    <div>
      <h1>Next.js 15 full course</h1>
      <p>Work is in progress</p>
      <ol>
        <li>
          <Link href="/nextjs-15/intro">Intro to Next.js</Link>
        </li>
        <li>
          <Link href="/nextjs-15/create-next-app">Create Next.js App</Link>
        </li>
        <li>
          <Link href="/nextjs-15/project-structure">Project Structure</Link>
        </li>
        <li>
          <Link href="/nextjs-15/configure-debugging">Configure Debugging</Link>
        </li>
        <li>
          <Link href="/nextjs-15/routing-in-nextjs">
            Basic Routing in Next.js
          </Link>
        </li>
        <li>
          <Link href="/nextjs-15/layouts-in-nextjs">Layouts in Next.js</Link>
        </li>
        <li>
          <Link href="/nextjs-15/project-organization">
            Project Organization
          </Link>
        </li>
      </ol>
    </div>
  );
}
