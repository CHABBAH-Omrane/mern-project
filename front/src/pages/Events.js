import React from 'react'

import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import { Gallery } from "../components/gallery";


const Events = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <div>
       
       <Gallery data={landingPageData.Gallery} />
        </div>
  )
}

export default Events