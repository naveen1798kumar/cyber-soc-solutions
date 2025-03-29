import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import bgImage from "../../assets/4201.jpg"

const CountdownCard = ({ label, targetNumber }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500; // Countdown duration in ms
      const increment = targetNumber / (duration / 30); // Adjust speed

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl text-center"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {count}+
      </h2>
      <p className="text-lg font-medium text-gray-700">{label}</p>
    </motion.div>
  );
};

const CountdownCards = () => {
  return (
    <div
      className="relative py-20 flex flex-col md:flex-row justify-center items-center gap-8 text-white"
      style={{
        backgroundImage:`url(${bgImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Countdown Cards */}
      <CountdownCard label="Years of Experience" targetNumber={10} />
      <CountdownCard label="Successful Clients" targetNumber={100} />
      
      {/* Static Card */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
          ISO Certified
        </h2>
      </div>
    </div>
  );
};

export default CountdownCards;
