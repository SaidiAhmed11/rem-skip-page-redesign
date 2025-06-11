import React from "react";
import remWasteLogo from "../assets/images/remWasteLogo.png";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 pt-10 pb-6 px-4 sm:px-8 lg:px-16 mt-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div>
                    <img
                        src={remWasteLogo}
                        alt="REM Waste Logo"
                        className="w-32 mb-4"
                    />
                    <p className="text-sm">
                        REM Waste Management provides fast and reliable skip hire and waste services.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-[#ff8a00] font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#ff8a00]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#ff8a00]">Services</a></li>
                        <li><a href="#" className="hover:text-[#ff8a00]">Projects</a></li>
                        <li><a href="#" className="hover:text-[#ff8a00]">Careers</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-[#ff8a00] font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#ff8a00]">FAQs</a></li>
                        <li><a href="#" className="hover:text-[#ff8a00]">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-[#ff8a00]">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-[#ff8a00] font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm mb-1">📞 0800 808 5475</p>
                    <p className="text-sm mb-1">✉️ hire@renewableenergymarketing.net</p>
                    <p className="text-sm mb-1">🌐 <a href="http://renewableenergymarketing.net" target="_blank" className="text-[#ff8a00] underline">renewableenergymarketing.net</a></p>
                    <p className="text-sm mt-3">📍 42 Forbes Rd, Edinburgh EH10 4ED</p>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500">
                &copy; {new Date().getFullYear()} REM Waste Management. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
