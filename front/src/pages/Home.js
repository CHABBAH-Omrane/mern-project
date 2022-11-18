import React from 'react'
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import { Header } from "../components/header/header";
import { Etapes } from "../components/Etapes/etapes";
import { About } from "../components/About/about";


import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Partner } from "../components/partner/partner";


const Home = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
       <>
              
              <Header data={landingPageData.Header} />
              <Etapes data={landingPageData.Features} />
              <About data={landingPageData.About} />
              
              {/* <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} /> */}
              <Partner data={landingPageData.Gallery} /> test
            </>
    </div>
  )
}

export default Home