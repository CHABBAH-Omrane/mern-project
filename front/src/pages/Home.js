import React from 'react'
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import { Header } from "../components/header/header";
import { Etapes } from "../components/Etapes/etapes";
import { About } from "../components/About/about";
// import Slider from '../components/SliderHome/sliderHome';



// import { Testimonials } from "../components/testimonials";
// import { Team } from "../components/Team";


const Home = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    window.scrollTo(0, 0);
   
  }, []);
  return (
    <div>
      <>

        <Header data={landingPageData.Header} />
        <Etapes data={landingPageData.Features} />
        <About data={landingPageData.About} />


      </>
    </div>
  )
}

export default Home