import React from 'react';
import logo from '../assets/images/remWasteLogo.png';

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#121212]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#" className="block">
          <span className="sr-only">Home</span>
          <img src={logo} alt="remWaste Logo" className="h-12 w-auto object-contain" />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-[#ff8a00] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#cc7000] dark:hover:bg-[#ff8a00]"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#ff8a00] transition hover:text-[#ff8a00]/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>

            <button
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
