import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import logo from "../assets/cybersoc-logo.png";
import justdialLogo from "../assets/icons/justdial-vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#081120] text-[#CCCCD5] border-t-[1px] border-[#008080] pt-14 px-8 md:px-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div data-aos="fade-up" data-aos-duration="800">
            <Link to="/" onClick={scrollToTop} className="group inline-block mb-4">
              <div className="relative w-fit mb-2">
                <div className="absolute inset-0.5 bg-[#008080]/10 backdrop-blur-3xl rounded-full border border-white/10 shadow-lg z-0 scale-0 group-hover:scale-0 transition-all duration-300"></div>
                <img src={logo} alt="Cyber Soc Logo" className="w-24 md:w-30 relative z-10" />
              </div>
            </Link>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              Cyber Soc delivers cutting-edge digital solutions across web,
              software, marketing, networking, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h4 className="relative text-xl font-semibold text-white mb-4 inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-[50%] bg-[#008080]" />
            </h4>
            <ul className="space-y-2 text-md text-[#CCCCD5]">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blogs", path: "/blogs" },
                { name: "Career", path: "/career" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={scrollToTop}
                    className="hover:text-[#6de2e2] transition-all duration-300 relative inline-block hover:pl-2"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h4 className="relative text-xl font-semibold text-white mb-4 inline-block">
              Our Services
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-[50%] bg-[#008080]" />
            </h4>
            <ul className="space-y-2 text-md text-[#CCCCD5]">
              {[
                { name: "Website & Software Development", path: "/services/websites-and-softwares" },
                { name: "Digital Marketing & SEO", path: "/services/digital-marketing" },
                { name: "Networking & Security", path: "/services/networking" },
                { name: "Automation Solutions", path: "/services/automation" },
                { name: "Cyber Security", path: "/services/cyber-security" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={scrollToTop}
                    className="hover:text-[#6de2e2] transition-all duration-300 relative inline-block hover:pl-2"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <h4 className="relative text-xl font-semibold text-white mb-4 group inline-block">
              Follow Us
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-[50%] bg-[#008080]" />
            </h4>
            <p className="text-sm text-[#CCCCD5] mb-4">
              Stay connected on our social platforms.
            </p>
            <div className="flex space-x-4 pb-4">
              <a href="https://www.facebook.com/profile.php?id=61560890600177" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/cybersocsolutions/?hl=en" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/cybersoc-solutions-900aab363/" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-500 transition-all duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://jsdl.in/DT-21RLGAJT5KH" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400 flex justify-center items-center">
                <img src={justdialLogo} alt="JustDial" className="w-[60px]" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-[#CCCCD5] mt-4">
              <h4 className="relative text-xl font-semibold text-white mb-4 inline-block">
                Contact Us
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-[50%] bg-[#008080]" />
              </h4>
              <div className="flex flex-col gap-3 text-base">
                <div className="flex gap-4">
                  {["9384812940", "9384812941"].map((phone) => (
                    <a key={phone} href={`tel:${phone}`}
                      className="group flex items-center gap-2 hover:text-[#6de2e2] transition-colors duration-300">
                      <div className="bg-teal-500/30 group-hover:bg-[#6de2e2] transition-all duration-300 border-[0.1px] border-[#6de2e2] p-1 rounded-full">
                        <IoCallOutline className="text-sm text-white group-hover:text-gray-800" />
                      </div>
                      <span className="text-sm">{phone}</span>
                    </a>
                  ))}
                </div>
                <a href="mailto:operations@cybersocsolutions.com"
                  className="group flex items-center gap-2 hover:text-[#6de2e2] transition-colors duration-300 break-all">
                  <div className="bg-teal-500/30 group-hover:bg-[#6de2e2] transition-all duration-300 border-[0.1px] border-[#6de2e2] p-1 rounded-full">
                    <CiMail className="text-sm text-white group-hover:text-gray-800" />
                  </div>
                  <span className="text-sm">operations@cybersocsolutions.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 py-6 border-t border-[#02707088] text-center text-base sm:text-lg text-[#CCCCD5] font-secondary px-4">
          <p>
            Copyright{" "}
            <FaRegCopyright className="inline mx-1 text-[#008080]" /> {new Date().getFullYear()}
            <Link className="text-[#008080] font-bold mx-1" to="/" onClick={scrollToTop}>
              <span className="font-bold mx-1 relative inline-block group cursor-pointer text-gray-300 hover:text-white">
                CyberSoc Solutions
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#008080] transition-all duration-500 group-hover:w-full" />
              </span>
              <span className="font-bold mx-1 relative inline-block group cursor-pointer text-gray-300">Pvt. Ltd</span>
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;