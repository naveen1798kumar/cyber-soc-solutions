import React from 'react'
import Banner from '../../components/Banner'
import Founder from './Founder'
import { FaLaptopCode } from "react-icons/fa";

import aboutBanner from "../../assets/banners/about-banner.jpg"
// import ProfessionalCard from './ProfessionalCard'
import ServicesSection from './ServicesSection';
import VisionMission from './VisionMission';
import CountdownCards from './CountdownCards';


function About() {
  return (
  <div>
  <Banner 
  backgroundImage={aboutBanner}
  title="About Our CyberSoc"
  description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
  />

  <main className=' py-6 md:py-10 overflow-x-hidden'>
  <div className="flex flex-col items-center px-6 py-4 md:py-6">
  {/* Title */}
  <h2
    className="relative text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
               before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 
               before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-2"
    data-aos="fade-up"
  >
    Welcome to <span className="text-blue-600">CyberSoc</span>.
  </h2>

  {/* Subtitle */}
  <p className="mt-2 text-lg text-gray-800 font-medium">
    For your <span className="text-blue-500">Innovative</span> and <span className="text-blue-500">Modern</span> digital solutions.
  </p>

  {/* Description */}
  <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed indent-10 md:indent-0">
    With over a decade of experience, we specialize in <span className="font-semibold text-gray-900">cutting-edge networking solutions</span> 
    and <span className="font-semibold text-gray-900">innovative web development</span>.  
    Our expertise ensures <span className="text-blue-500 font-semibold">secure</span>, 
    <span className="text-blue-500 font-semibold">scalable</span>, and 
    <span className="text-blue-500 font-semibold">high-performance</span> digital solutions tailored to your business needs.
  </p>

  {/* Divider */}
  <div className="mt-8 w-24 h-1 bg-gray-300 rounded-full"></div>
</div>

  <Founder/>

  <ServicesSection/>
  <VisionMission/>
  <CountdownCards/>
  
  <div className='container mx-auto bg-teal-50 py-12 mt-4'>
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">How we Work ...</h2>
  </div>
  </main>

  </div>
  )
}

export default About