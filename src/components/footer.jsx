import React from 'react';
import remWasteLogo from '../assets/images/remWasteLogo.png';

const Footer = () => {
  return (
    <footer className="mt-16 bg-white px-4 pb-6 pt-10 text-gray-600 sm:px-8 lg:px-16 dark:bg-[#1a1a1a] dark:text-gray-300">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 md:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <img src={remWasteLogo} alt="REM Waste Logo" className="mb-4 w-32" />
          <p className="text-sm">
            REM Waste Management provides fast and reliable skip hire and waste services.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-3 font-semibold text-[#ff8a00]">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                About Us
              </a>
            </li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="mb-3 font-semibold text-[#ff8a00]">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff8a00]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 font-semibold text-[#ff8a00]">Contact Us</h3>
          <p className="mb-1 text-sm">📞 0800 808 5475</p>
          <p className="mb-1 text-sm">✉️ hire@renewableenergymarketing.net</p>
          <p className="mb-1 text-sm">
            🌐{' '}
            <a
              href="http://renewableenergymarketing.net"
              target="_blank"
              className="text-[#ff8a00] underline"
              rel="noreferrer"
            >
              renewableenergymarketing.net
            </a>
          </p>
          <p className="mt-3 text-sm">📍 42 Forbes Rd, Edinburgh EH10 4ED</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} REM Waste Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
