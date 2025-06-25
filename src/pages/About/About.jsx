import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import Founder from "./Founder";
import ServicesSection from "./ServicesSection";
import VisionMission from "./VisionMission";
import CountdownCards from "./CountdownCards";

import aboutBanner from "../../assets/banners/about-banner.jpg";
import ISO2015 from "../../assets/About-us/iso-9001-2015.webp";
import ISO27001 from "../../assets/About-us/iso-27001.png";
import PartnersSlide from "../Home/PartnersSlide";

function About() {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About CyberSoc | Cyber Security & Automation Experts in Coimbatore</title>
        <meta
          name="description"
          content="CyberSoc is a leading company based in Coimbatore, specializing in Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing."
        />
        <meta
          name="keywords"
          content="Cyber Security, Automation, Networking, LAN, CCTV, Web Development, Software Development, Digital Marketing, Coimbatore"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/about" />

        {/* Structured Data for About Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "About Us - CyberSoc Solutions",
              "url": "https://www.cybersocsolutions.com/about",
              "description": "Learn more about CyberSoc Solutions, our mission, values, and our team of experts.",
              "mainEntityOfPage": "https://www.cybersocsolutions.com/about"
            }
          `}
        </script>
      </Helmet>

      {/* Banner Section */}
      <Banner
        backgroundImage={aboutBanner}
        title="About Our CyberSoc"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      {/* Main Content */}
      <main className="py-6 md:py-10 overflow-x-hidden">
        {/* Founder Section */}
        <Founder />

        {/* Uncomment the Countdown Cards Section if needed */}
        <section className="py-20 bg-[#F5F3F4]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
            data-aos="fade-up"
          >
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* ISO 9001:2015 */}
            <div className="flex flex-col lg:flex-row items-center bg-[#ffffff] p-6 rounded-xl transition-all duration-500 gap-6" data-aos="fade-right">
              <img
                src= {ISO2015} // Replace with actual image path
                alt="ISO 9001:2015 Certification"
                className="w-32 h-32 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">ISO 9001:2015</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ISO 9001:2015 is an international standard for Quality Management Systems (QMS).
                  It demonstrates our commitment to delivering consistent quality in our services,
                  ensuring customer satisfaction and continuous improvement in every aspect of our operations.
                </p>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="flex flex-col lg:flex-row items-center bg-[#ffffff] p-6 rounded-xl transition-all duration-300 gap-6" data-aos="fade-left">
              <img
                src= {ISO27001} // Replace with actual image path
                alt="ISO 27001 Certification"
                className="w-32 h-32 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">ISO 27001</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ISO 27001 is the international standard for Information Security Management Systems (ISMS).
                  It proves our dedication to protecting client and organizational data through robust security controls,
                  risk assessment, and best practices in cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="my-0 w-24 h-1 mx-auto bg-gray-500 rounded-full"></div>

        {/* Countdown Cards Section */}
        {/* <CountdownCards /> */}

        <div className="w-full bg-gray-50 py-20 md:py-28">
          <section className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-16"
              data-aos="fade-up"
            >
              Why Choose <span className="underline decoration-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">CyberSoc</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "10+ Years of Industry Leadership",
                  desc: "We bring over a decade of experience delivering mission-critical solutions in cybersecurity, automation, and digital transformation.",
                },
                {
                  title: "Tailor-Made IT Solutions",
                  desc: "We design strategies and tools that align precisely with your business objectives, ensuring efficiency and long-term growth.",
                },
                {
                  title: "Advanced Security Expertise",
                  desc: "From penetration testing to zero-trust architecture, we provide cutting-edge protection for data, systems, and infrastructure.",
                },
                {
                  title: "World-Class Technical Team",
                  desc: "Our certified engineers and developers are passionate problem-solvers, committed to innovation and service excellence.",
                },
                {
                  title: "Client-First Culture",
                  desc: "Every solution is built around your needs — we prioritize responsiveness, transparency, and long-term collaboration.",
                },
                {
                  title: "Proven Success Across Sectors",
                  desc: "From startups to enterprises, we’ve successfully implemented solutions across healthcare, finance, manufacturing, and beyond.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative bg-[#ffffff] backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {/* Gradient Accent Line */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <h3 className="text-xl font-semibold text-blue-800 mb-3">{card.title}</h3>
                  <p className="text-gray-700 tracking-wide leading-relaxed text-[15px]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Vision and Mission Section */}
        <VisionMission />
<div className="my-0 w-24 h-1 mx-auto bg-gray-500 rounded-full"></div>
        {/* How We Work Section */}
        {/* <div className="container mx-auto bg-teal-50 py-12 my-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            How We Work
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At CyberSoc, we follow a structured and client-centric approach to deliver innovative solutions. From understanding your requirements to implementing cutting-edge technologies, we ensure excellence at every step.
          </p>
        </div> */}

           {/* Partners Carousel */}
      <div className="bg-white">
        <PartnersSlide />
      </div>
      </main>
    </div>
  );
}

export default About;