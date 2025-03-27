import React from 'react'
import Banner from '../../components/Banner'
import Founder from './Founder'

import aboutBanner from "../../assets/Hero-Slider/Slider-3.jpg"


function About() {
  return (
    <div>
  <Banner 
  backgroundImage={aboutBanner}
  title="About Our CyberSoc"
  description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
/>

<Founder/>

    </div>
  )
}

export default About