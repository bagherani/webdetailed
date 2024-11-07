import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">WebDetailed</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/nextjs-15">Courses</Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@WebDetailed"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                Youtube
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
