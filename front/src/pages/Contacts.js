import React from 'react'
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { Contact } from "../components/Contact/contact";


const Contacts = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>

      <Contact data={landingPageData.Gallery} />
    </div>
  )
}

export default Contacts