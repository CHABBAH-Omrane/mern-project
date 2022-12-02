import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authCustomerActions";
// import { useState, useEffect } from "react";

// import axios from "axios";

export const Navigation = (props) => {
  // const [role, setRole] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000/customer/signin").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setRole(response.data.customers[0].isAdmin); //customers
  //     }
  //   });
  // }, []);

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authCustomerReducer.isAuth);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="logo farha"
                style={{ width: "180px", marginTop: "-20px", height: "70px" }}
              />
            </Link>
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {!isAuth ? (
              <>
                <li>
                  <a href="/" className="page-scroll">
                    <Link to="/">Accueil</Link>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="page-scroll">
                    <Link to="/contact" className="page-scroll">
                      Contact
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="/Register" className="page-scroll">
                    <Link to="/Register" className="page-scroll">
                      S'inscrire
                    </Link>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/Login"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <Link to="/Login" className="page-scroll">
                      Connexion
                    </Link>
                  </a>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/" className="page-scroll">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a href="/partners" className="page-scroll">
                    <Link to="/partners">Partners</Link>
                  </a>
                </li>
                <li>
                  <a href="/Events" className="page-scroll">
                    <Link to="/Events">Gallery</Link>
                    {/* Events*/}
                  </a>
                </li>
                <li>
                  <a href="/services" className="page-scroll">
                    <Link to="/services" className="page-scroll">
                      Services
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="/visitors" className="page-scroll">
                    <Link to="/visitors" className="page-scroll">
                      Visitors
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="/users" className="page-scroll">
                    <Link to="/users" className="page-scroll">
                      Users
                    </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="btn btn-custom btn-lg page-scroll"
                    onClick={() => dispatch(logout())}
                  >
                    <Link to="/" className="page-scroll">
                      Logout
                    </Link>
                  </a>{" "}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

