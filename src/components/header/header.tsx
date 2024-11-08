import Link from "next/link";
import { Logo } from "../logo/logo";

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-row items-center">
          <Logo width={32} height={32} />
          <h1 className="text-white text-2xl font-bold">WebDetailed</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://www.youtube.com/@WebDetailed"
                target="_blank"
                className="text-white hover:text-gray-300"
                aria-label="follow us on youtube"
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
