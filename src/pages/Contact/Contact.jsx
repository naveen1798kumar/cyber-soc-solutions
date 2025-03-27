import React, { useState } from 'react';
import Banner from '../../components/Banner'
import ContactForm from './ContactForm';

import aboutBanner from "../../assets/Hero-Slider/Slider-2.jpg"

function Contact() {


  return (
    <div className=''>
        <Banner 
        backgroundImage={aboutBanner}
        title="About Our CyberSoc"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />
    
    <ContactForm />
    </div>
  )
}

export default Contact