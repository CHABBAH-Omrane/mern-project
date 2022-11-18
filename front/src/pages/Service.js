import React from 'react'

import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import { Services } from "../components/services";


const Service = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <div>
       
       <Services data={landingPageData.Services} />
        </div>
  )
}

export default Service