import React from "react";
import bgImage from "../../assets/Hero-Slider/Home-Automation.jpg";

function Founder() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-gray-50 py-12 md:py-20">
        <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
          {/* Text Content */}
          <div className="lg:text-left" data-aos="fade-up">
             {/* Title */}
  <h2
    className="relative text-4xl font-extrabold text-gray-900 tracking-wide leading-tight 
               before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 
               before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-2"
    data-aos="fade-left"
  >
    Welcome to <span className="text-blue-600">CyberSoc</span>.
  </h2>

  {/* Subtitle */}
  <p className="my-2 text-lg text-gray-800 font-medium">
    For your <span className="text-blue-500">Innovative</span> and <span className="text-blue-500">Modern</span> digital solutions.
  </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Based in <strong>Coimbatore</strong>, CyberSoc is a leading company specializing in <strong>Cyber Security</strong>, <strong>Automation</strong>, and <strong>Web Application Development</strong>. With over <strong>10 years of experience</strong>, we have been empowering businesses and individuals with cutting-edge solutions to enhance security, efficiency, and connectivity.
            </p>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Our expertise spans across <strong>Networking Solutions</strong>, <strong>Software Development</strong>, and <strong>Automation Systems</strong>. We are committed to delivering smart, scalable, and future-proof solutions that drive digital transformation and optimize workflows for our clients.
            </p>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              At CyberSoc, we believe in innovation, reliability, and excellence. Join us on our journey to create a secure and automated future.
            </p>
          </div>

          {/* Image Section */}
          <div
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
            data-aos="fade-left"
          >
            <img
              src={bgImage}
              alt="CyberSoc - Cyber Security and Automation"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

{/*  */}
<div className="my- w-24 h-1 mx-auto bg-gray-500 rounded-full"></div>

      <div className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] py-16 md:py-24">
  <section className="container mx-auto px-6 md:px-12 lg:px-20">
    <h2
      className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 tracking-tight mb-16"
      data-aos="fade-up"
    >
      Why Choose <span className="underline decoration-blue-500">CyberSoc</span>?
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
      {[
        {
          title: "10+ Years of Experience",
          desc: "A decade of expertise in Cyber Security, Automation, and Software Development.",
        },
        {
          title: "Tailored Solutions",
          desc: "Customized services to meet the unique needs of businesses and individuals.",
        },
        {
          title: "Cutting-Edge Technology",
          desc: "Leveraging the latest technologies to deliver innovative and secure solutions.",
        },
        {
          title: "Expert Team",
          desc: "A team of skilled professionals dedicated to delivering excellence.",
        },
        {
          title: "Client-Centric Approach",
          desc: "Focused on building long-term relationships with our clients.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully delivered projects for clients across various industries.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="p-4 md:p-6 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-800 tracking-wide">{card.desc}</p>
        </div>
      ))}
    </div>
  </section>
</div>

    </div>
  );
}

export default Founder;
