import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/cybersoc-logo.png"; // Replace with the actual path to your logo

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <img src={logo} alt="Cyber Soc Logo" className="w-32 mb-4" />
            <p className="text-sm leading-relaxed">
              Cyber Soc provides cutting-edge solutions in websites, software, digital marketing, networking, and automation to empower businesses in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/services/websites-and-softwares"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Website & Software Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/digital-marketing"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Digital Marketing & SEO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/networking"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Networking & Security Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/automation"
                  className="text-sm hover:text-blue-400 transition duration-300"
                >
                  Automation & Business Solutions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Cyber Soc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;