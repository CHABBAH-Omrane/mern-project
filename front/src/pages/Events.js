import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import { Gallery } from "../components/gallery";
import { getPartner } from "../actions/adminActions";


const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartner());
  }, []);

  const partners = useSelector((state) => state.adminReducer.partners);


  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>

      <Gallery data={landingPageData.Gallery} partners={partners} />
    </div>
  )
}

export default Events