import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import ThemeBtn from "./ThemeBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const accentText = "text-purple-700";
  const accentHover = "hover:text-purple-900 dark:hover:text-purple-400";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 shadow-lg bg-opacity-80 backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-80 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <span className={`text-4xl ${accentText} mr-2`}>
            <i className="fa-solid fa-square-check"></i>
          </span>
          <span
            className={`self-center font-mono text-3xl font-bold whitespace-nowrap ${accentText}`}
          >
            DoQueue
          </span>
        </a>

        <div className="z-50 flex items-center gap-3 md:order-2">
          <ThemeBtn />

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1.5 text-sm font-medium 
                           rounded-lg transition duration-200 
                           text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Link to="/login">Sign In</Link>
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded-lg 
                            bg-purple-600 text-white 
                            hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 
                            transition duration-200`}
              >
                <Link to="/signup">Register</Link>
              </button>
            </div>
          </SignedOut>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 text-lg font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-50 dark:bg-gray-700 md:bg-transparent md:dark:bg-transparent">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded ${accentText} ${accentHover} md:p-0`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`block py-2 px-3 rounded ${accentText} ${accentHover} md:p-0`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
