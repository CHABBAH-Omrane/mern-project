import React from 'react'
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
// import { Team } from '../components/Team'
import { Partner } from "../components/partner/partner";

const Profile = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      {/* header partner component */}
      <header id="header">
        <div className="intro-hed" >
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Partenaires
                    <span></span>
                  </h1>
                  <p>
                    Voici les partenaires parmi lesquels vous devrez choisir pour l’organisation
                    de votre mariage .



                  </p>
                  {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                  <a href="#all-partner" className="btn btn-custom btn-lg page-scroll">
                    Liste de nos partnersS
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Partner data={landingPageData.Gallery} />


      {/* <Team  /> */}
    </div>
  )
}

export default Profile