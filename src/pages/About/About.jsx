import React from 'react'
import Banner from '../../components/Banner'
import Founder from './Founder'
import { FaLaptopCode } from "react-icons/fa";

import aboutBanner from "../../assets/Hero-Slider/Slider-3.jpg"
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

  <main className=' py-12 md:py-20 overflow-x-hidden'>
  <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight tracking-wide">
    {/* 10+ Years of Excellence in Networking & Web Development   */}
    Welcome to CyberSoc for your Innovative and Modern digital solutions. 
  </h2>
  <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
    With over a decade of experience, we specialize in cutting-edge networking solutions and innovative web development.  
    Our expertise ensures secure, scalable, and high-performance digital solutions tailored to your business needs.  
  </p>

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