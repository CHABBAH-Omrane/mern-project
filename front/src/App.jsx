import { Navigation } from "./components/navbar/navbar";

import Contacts from "./pages/Contacts";

import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// //test
// import { useState, useEffect } from "react";
// import JsonData from "./data/data.json";
import Events from "./pages/Events";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

//
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
