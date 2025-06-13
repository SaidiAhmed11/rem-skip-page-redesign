import React, { useState } from 'react';
import logo from '../assets/images/remWasteLogo.png';
import AllSkipsInfoModal from './AllSkipsInfoModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        className="bg-white dark:bg-[#121212] min-h-[64px]"
        style={{ backgroundColor: 'inherit' }}
      >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a href="#" className="block">
            <span className="sr-only">Home</span>
            <img src={logo} alt="remWaste Logo" className="h-12 w-auto object-contain" />
          </a>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              {/* Nav items here if needed */}
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block rounded-md bg-[#ff8a00] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#cc7000] dark:hover:bg-[#ff8a00]"
                  type="button"
                >
                  Skips Info
                </button>

                <a
                  href="https://www.renewableenergymarketing.net/skip-hire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#ff8a00] transition hover:text-[#cc7000] sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  Visit our website
                </a>
              </div>

              {/* Mobile menu toggle button here if needed */}
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && <AllSkipsInfoModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
