export default function Home() {
  return (
    <div className="grid">
      <div className="card bg-gray-900 shadow-md rounded-lg p-4">
        <h2 className="text-3xl">Next.js 15 Full Course</h2>
        <p className="my-4">
          In this course, I introduce Next.js, a powerful framework built on top
          of React.js for creating full-stack websites and web applications.
          I’ll walk you through its key features, including built-in routing,
          server-side rendering (SSR), caching, and more, which make it a top
          choice for enterprise-level products. If you’ve used React before,
          you’ll appreciate how Next.js simplifies common challenges like
          routing and optimizations. Whether you’re a beginner or experienced,
          this course will cover everything you need to know to get started with
          Next.js, plus some pro tips from my own experience. Let’s dive in!
        </p>
        <a href="/nextjs-15" className="bg-gray-700 inline-block px-5 py-2">
          Go to the course
        </a>
      </div>
    </div>
  );
}
