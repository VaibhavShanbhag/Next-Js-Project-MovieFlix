import React from "react";
import HeroSection from "./components/HeroSection";
import image from "../../public/about.svg"

const Page = () => {
  return(
    <div>
      <HeroSection title="LET 'S WATCH MOVIE TOGETHER" imageUrl={image}/>
    </div>
  )
}

export default Page;