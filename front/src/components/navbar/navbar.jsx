import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export const Navigation = (props) => {
  // const isAuth = useSelector((state) => state.authCustomerReducer.isAuth);

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
            <li>
              <a href="/" className="page-scroll">
                <Link to="/">Accueil</Link>
              </a>
            </li>
            <li>
              <a href="/profile" className="page-scroll">
                <Link to="/profile">Profile</Link>
              </a>
            </li>
            <li>
              <a href="/Events" className="page-scroll">
                <Link to="/Events">Events</Link>
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
              <a href="#services" className="page-scroll">
                <Link to="/contact" className="page-scroll">
                  Contact
                </Link>
              </a>
            </li>
            {/* <Link to="/contact" className="page-scroll">
              <li>Contact</li>
            </Link> */}

            <li>
              <a href="/Register" className="page-scroll">
                <Link to="/Register" className="page-scroll">
                  S'inscrire
                </Link>{" "}
              </a>
            </li>
            <li>
              <a href="/Login" className="btn btn-custom btn-lg page-scroll">
                <Link to="/Login" className="page-scroll">
                  Connexion
                </Link>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// return (
//   <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//     <div className="container">
//       <div className="navbar-header">
//         <button
//           type="button"
//           className="navbar-toggle collapsed"
//           data-toggle="collapse"
//           data-target="#bs-example-navbar-collapse-1"
//         >
//           {" "}
//           <span className="sr-only">Toggle navigation</span>{" "}
//           <span className="icon-bar"></span>{" "}
//           <span className="icon-bar"></span>{" "}
//           <span className="icon-bar"></span>{" "}
//         </button>
//         <a className="navbar-brand page-scroll" href="#page-top">
//           <Link to="/">
//             <img
//               src="/img/logo.png"
//               alt="logo farha"
//               style={{ width: "180px", marginTop: "-20px", height: "70px" }}
//             />
//           </Link>
//         </a>{" "}
//       </div>
//       <div
//         className="collapse navbar-collapse"
//         id="bs-example-navbar-collapse-1"
//       >
//         <ul className="nav navbar-nav navbar-right">
//           {!isAuth ? (
//             <>
//               <li>
//                 <a href="/" className="page-scroll">
//                   <Link to="/">Accueil</Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="page-scroll">
//                   <Link to="/contact" className="page-scroll">
//                     Contact
//                   </Link>
//                 </a>
//               </li>
//               {/* <Link to="/contact" className="page-scroll">
//             <li>Contact</li>
//           </Link> */}

//               <li>
//                 <a href="/Register" className="page-scroll">
//                   <Link to="/Register" className="page-scroll">
//                     S'inscrire
//                   </Link>{" "}
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Login"
//                   className="btn btn-custom btn-lg page-scroll"
//                 >
//                   <Link to="/Login" className="page-scroll">
//                     Connexion
//                   </Link>
//                 </a>{" "}
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <a href="/" className="page-scroll">
//                   <Link to="/">Accueil</Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="/profile" className="page-scroll">
//                   <Link to="/profile">Profile</Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="/Events" className="page-scroll">
//                   <Link to="/Events">Events</Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="page-scroll">
//                   <Link to="/services" className="page-scroll">
//                     Services
//                   </Link>
//                 </a>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
// };
