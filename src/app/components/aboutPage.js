import React from "react";
import HeroSection from "./HeroSection";
import image from '../../../public/about1.svg'

const AboutPage = () => {
  return(
    <HeroSection title="OUR STORY" imageUrl={image}/>
  )
}

export default AboutPage;