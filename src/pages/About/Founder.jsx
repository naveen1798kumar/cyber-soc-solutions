import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/About-us/15628.jpg";
import { motion } from "framer-motion";

const CountdownCard = ({ label, targetNumber, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = targetNumber / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 30);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber]);

  return (
    <div
      ref={ref}
      className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl text-center min-w-[140px]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {count}+
      </h2>
      <p className="text-base font-medium text-gray-700">{label}</p>
    </div>
  );
};

function Founder() {
  return (
    <div className="w-full bg-gray-50 py-12 md:py-20">
      <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Text Content */}
        <div className="lg:text-left space-y-6" data-aos="fade-up">
          <p className="text-sm bg-gray-300/90 rounded-lg px-4 py-1 tracking-wide text-center  w-max font-semibold uppercase text-indigo-600 mb-2">
              About Us
          </p>

          <h2
            className="relative text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
                       before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 
                       before:bottom-0 before:left-1/2 before:-translate-x-1/2 
                       after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 
                       after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-4"
            data-aos="fade-left"
          >
            Welcome to <span className="text-blue-600">CyberSoc</span>.
          </h2>

          <p className="text-lg text-gray-800 font-medium">
            For your <span className="text-blue-500">Innovative</span> and <span className="text-blue-500">Modern</span> digital solutions.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            CyberSoc is a leading company specializing in <strong>Cyber Security</strong>, <strong>Automation</strong>, and <strong>Web Application Development</strong>. With over <strong>10 years of experience</strong>, we empower businesses with smart, secure, and scalable solutions. <br />
            We operate globally from our headquarters in <strong>Coimbatore</strong>, with strategic branches in <strong>Poland</strong>, <strong>Australia</strong>, and <strong>Hungary</strong>, delivering both local insight and international expertise.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our services include <strong>Networking Solutions</strong>, <strong>Custom Software Development</strong>, and advanced <strong>Automation Systems</strong> tailored to modern needs.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            At CyberSoc, we value <strong>innovation</strong>, <strong>reliability</strong>, and <strong>excellence</strong>. Join us in building a smarter, more secure future.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="relative group w-full h-[300px] md:h-[400px] lg:h-[600px]"
          data-aos="fade-left"
        >
          <img
            src={bgImage}
            alt="CyberSoc - Cyber Security and Automation"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          {/* Hover Slide Strip */}
          <div
            className="absolute bottom-0 top-0 left-1/4 
                       h-full w-3/4 bg-gradient-to-r from-white/10 to-white backdrop-blur-md 
                       rounded-sm opacity-0 
                       group-hover:opacity-100 group-hover:left-full 
                       transition-all duration-500 ease-in-out pointer-events-none"
          />

          {/* Countdown Stats */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-evenly bg-gradient-to-t from-gray-900/80 to-transparent rounded-b-lg">
            <CountdownCard label="Years of Experience" targetNumber={10} delay={0} />
            <CountdownCard label="Successful Clients" targetNumber={100} delay={200} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Founder;
