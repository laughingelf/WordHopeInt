import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Organization Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Word Hope International</h3>
          <p className="text-sm text-green-200 mb-3">
            Serving communities through faith, compassion, and sustainable outreach.
          </p>

          {/* 501(c)(3) Statement */}
          <p className="text-xs text-green-300 leading-relaxed">
            Word Hope International is a registered{" "}
            <span className="font-semibold text-green-100">
              501(c)(3) nonprofit organization
            </span>
            . Donations are tax-deductible as allowed by law.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm text-green-100">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-white transition">
                Donate
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info / Social */}
        <div>
          <h4 className="text-md font-semibold mb-3">Contact</h4>

          <p className="mb-1 text-sm text-green-100">
            Email:{" "}
            <a
              href="mailto:wordhopeint@gmail.com"
              className="underline hover:text-white transition"
            >
              wordhopeint@gmail.com
            </a>
          </p>

          <p className="mb-4 text-sm text-green-100">
            Phone:{" "}
            <a
              href="tel:+18175048915"
              className="underline hover:text-white transition"
            >
              +1 (817) 504-8915
            </a>
          </p>

          <div className="flex gap-4 text-sm">
            <a
              href="https://www.facebook.com/profile.php?id=61578211120019"
              className="text-green-200 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/wordhopeint/"
              className="text-green-200 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-800 pt-6 text-center text-xs text-green-300">
        &copy; {new Date().getFullYear()} Word Hope International. All rights reserved.
        <br />
        <span className="opacity-70">
          Website by{" "}
          <a
            href="https://ghoststackdesigns.com"
            className="underline hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GhostStack Designs
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
