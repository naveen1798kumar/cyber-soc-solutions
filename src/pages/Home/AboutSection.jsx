import React, { useEffect } from "react";
import bgImage from "../../assets/blogs/aboutus-cybersoc.jpg";
import vectorBg from "../../assets/vector-bg.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="w-full bg-gray-100 py-12 md:py-20 lg:my-20">
      <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
{/* Text Content */}
<div className="lg:text-left" data-aos="fade-up">
  <h2
    className="relative  text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
    after:absolute after:content-[''] after:w-30 after:h-1 after:bg-[#027070] 
    after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-8"
    data-aos="fade-left"
  >
    About <span className=" text-[#008080]">CyberSoc</span>
  </h2>

  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
    <strong>CyberSoc Solutions</strong> is a forward-thinking technology company delivering cutting-edge solutions in 
    <strong> Cyber Security</strong>, <strong> Automation</strong>, and <strong> Web Application Development</strong>. 
    We focus on helping businesses navigate the digital landscape securely and efficiently through scalable and smart IT systems.
  </p>

  <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
    Our team brings together deep industry experience and technical expertise in areas such as 
    <strong> Networking Solutions</strong>, <strong> Firewall Implementation</strong>, <strong> Surveillance & Biometric Systems</strong>, 
    and <strong> IT Infrastructure Management</strong>. Whether you're launching a startup or upgrading enterprise-level systems, 
    we provide end-to-end solutions tailored to your goals.
  </p>

  <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
    With a strong focus on reliability, innovation, and long-term value, 
    <strong>CyberSoc Solutions</strong> is committed to being your trusted partner in the digital era. 
    We combine strategy, technology, and creativity to secure and streamline your digital ecosystem.
  </p>

  <Link
    to="/about"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="inline-block mt-6 px-8 py-3 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg shadow-md bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
  >
    Learn More About Us
  </Link>
</div>


        {/* Image Section */}
        <div
  className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]  my-8 rounded-lg group"
  data-aos="fade-left"
>
  {/* Overlay with transition */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg"></div>

  {/* Main Image with zoom on hover */}
  <img
    src={bgImage}
    alt="About CyberSoc"
    className="relative w-full h-full object-cover transform transition-transform duration-700 ease-in-out  rounded-lg shadow-lg"
  />

  {/* Decorative Vectors */}
  <img
    src={vectorBg}
    alt=""
    className="absolute -top-20 -right-20 -z-10 transition-transform duration-700 ease-in-out group-hover:rotate-6"
    width="300px"
  />
  <img
    src={vectorBg}
    alt=""
    className="absolute -bottom-20 -left-20 -z-10 transition-transform duration-700 ease-in-out group-hover:-rotate-6"
    width="400px"
  />
</div>
      </section>
    </div>
  );
}

export default AboutUs;
