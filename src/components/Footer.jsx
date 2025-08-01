import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left: Logo or Site Name */}
        <div>
          <h3 className="text-xl font-bold mb-2">Word Hope International</h3>
          <p className="text-sm text-green-200">
            Serving communities through faith, compassion, and sustainable outreach.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-green-100 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/donate" className="hover:text-white">Donate</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info / Social */}
        <div>
          <h4 className="text-md font-semibold mb-2">Contact</h4>
          <p className="text-sm text-green-100 mb-1">Email: info@wordhope.org</p>
          <p className="text-sm text-green-100 mb-4">Phone: +1 (123) 456-7890</p>

          <div className="flex space-x-4">
            {/* Replace with actual links or add/remove platforms as needed */}
            <a href="#" className="hover:text-white text-green-200">Facebook</a>
            <a href="#" className="hover:text-white text-green-200">Instagram</a>
            <a href="#" className="hover:text-white text-green-200">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-green-300 text-xs">
        &copy; {new Date().getFullYear()} Word Hope International. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
