import { Navigation } from "./components/navbar/navbar";

import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// //test

// import JsonData from "./data/data.json";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
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

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const user = useSelector((state) => state.authCustomerReducer.user);

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

  const admin_routs = [
    { path: "/visitors", element: <Visitors /> },
    { path: "/users", element: <Users /> },
  ];
  return (
    <div>
      <Navigation />
      <Routes>
        {!user ? ( //isAuth
          <>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Register" element={<Register />} /> */}
            {/* <Route path="/contact" element={<Contacts />} /> */}
            <Route path="/partners" element={<Partners />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/select" element={<Service />} />
            {/* <Route path="/users" element={<Users />} /> */}
            {/* <Route path="/visitors" element={<Visitors />} /> */}
            {user.isAdmin &&
              admin_routs.map((item, indx) => {
                return (
                  <Route
                    key={`route-${indx}`}
                    path={item.path}
                    element={item.element}
                  />
                );
              })}
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
