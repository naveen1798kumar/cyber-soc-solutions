import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import Founder from "./Founder";
import ServicesSection from "./ServicesSection";
import VisionMission from "./VisionMission";
import CountdownCards from "./CountdownCards";

import aboutBanner from "../../assets/banners/about-banner.jpg";

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

        {/* Services Section */}
        <ServicesSection />

        {/* Vision and Mission Section */}
        <VisionMission />

        {/* Countdown Cards Section */}
        <CountdownCards />

        {/* How We Work Section */}
        <div className="container mx-auto bg-teal-50 py-12 mt-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            How We Work
          </h2>
          {/* <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At CyberSoc, we follow a structured and client-centric approach to deliver innovative solutions. From understanding your requirements to implementing cutting-edge technologies, we ensure excellence at every step.
          </p> */}
        </div>
      </main>
    </div>
  );
}

export default About;