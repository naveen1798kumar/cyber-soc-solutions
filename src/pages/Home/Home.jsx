import React from 'react'
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ServicesSection from "./ServicesSection"
import OurProjects from "./OurProjects"
import BlogSection from "./BlogSection"

function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>

      {/* <OurProjects/> */}
      <BlogSection/>
      
      {/* 
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      
      <PartnersSection />
      
      <BlogSection />
      <ContactSection />
      */}
    </div>
  )
}

export default Home