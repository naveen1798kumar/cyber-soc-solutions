import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/cybersoc-logo.png";
import justdialLogo from "../assets/icons/justdial-vector.png";

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-950 text-gray-300 py-14 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link to="/" onClick={scrollToTop}><img src={logo} alt="Cyber Soc Logo" className="w-36 mb-5" /></Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Cyber Soc delivers cutting-edge digital solutions across web,
              software, marketing, networking, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={scrollToTop}
                    className="hover:text-blue-400 transition duration-300 relative inline-block hover:pl-1"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                {
                  name: "Website & Software Development",
                  path: "/services/websites-and-softwares",
                },
                {
                  name: "Digital Marketing & SEO",
                  path: "/services/digital-marketing",
                },
                {
                  name: "Networking & Security",
                  path: "/services/networking",
                },
                {
                  name: "Automation Solutions",
                  path: "/services/automation",
                },
                {
                  name: "Cyber Security",
                  path: "/services/cyber-security",
                },
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={scrollToTop}
                    className="hover:text-blue-400 transition duration-300 relative inline-block hover:pl-1"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected on our social platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560890600177"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/cybersocsolutions/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://jsdl.in/DT-21RLGAJT5KH"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-700 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400 flex justify-center items-center"
              >
                <img src={justdialLogo} alt="" className="w-[60px]"/>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
          © {new Date().getFullYear()} <span className="uppercase font-bold text-white">CyberSoc</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
