import Link from "next/link";
import { Logo } from "../logo/logo";

export const Header = () => {
  return (
    <header className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex flex-row items-center"
          aria-label="webdetailed logo"
        >
          <Logo width={32} height={32} />
          <h1 className="text-white text-2xl font-bold">WebDetailed</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://mohi.tech"
                target="_blank"
                className="text-white hover:text-gray-300 py-3 px-4 inline-block"
                aria-label="go to mohi.tech website"
              >
                Author
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@WebDetailed"
                target="_blank"
                className="text-white hover:text-gray-300 py-3 px-4 inline-block"
                aria-label="go to webdetailed channel on youtube"
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
