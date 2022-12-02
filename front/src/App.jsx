import { Navigation } from "./components/navbar/navbar";

import Contacts from "./pages/Contacts";

import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// //test

// import JsonData from "./data/data.json";
import Events from "./pages/Events";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Partners from "./pages/Partners";
import Footer from "./components/Footer/footer";
import Visitors from "./pages/Visitors";
import Users from "./pages/Users";
//role
// import axios from "axios";
// import { useState, useEffect } from "react";
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

  /////////////////////// role
  // const [role, setRole] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000/customer/signinUser").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setRole(response.data.customers[0].isAdmin); //customers
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/services" element={<Service />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
