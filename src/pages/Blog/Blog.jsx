import React from 'react'
import Banner from '../../components/Banner';
import aboutBanner from "../../assets/Hero-Slider/Slider-3.jpg"; 

function Blog() {
  return (
    <div>
    <Banner
        backgroundImage={aboutBanner}
        title="Our Latest Blogs"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />


    </div>
  )
}

export default Blog