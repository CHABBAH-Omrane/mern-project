import { Image } from "./image";
import { useSelector } from "react-redux";

export const Services = (props) => {
  const partners = useSelector((state) => state.adminReducer.partners);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div style={{ margin: "auto", width: "350px" }}>
            <div style={{ height: "300px" }}>
              {" "}
              <Image
              // title={d.title}
              // largeImage={d.largeImage}
              // smallImage={partners[0].logo}
              />
            </div>

            <div className="service-desc">
              {/* <h3>{partners[0].title}</h3>
              <p>{partners[0].desc}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// return (
//   <div id='services' className='text-center'>
//     <div className='container'>
//       <div className='section-title'>
//         <h2>Our Services</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//           dapibus leonec.
//         </p>
//       </div>
//       <div className='row'>
//         {props.data
//           ? props.data.map((d, i) => (
//               <div key={`${d.name}-${i}`} className='col-md-4'>
//                 {' '}
//                 <i className={d.icon}></i>
//                 <div className='service-desc'>
//                   <h3>{d.name}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               </div>
//             ))
//           : 'loading'}
//       </div>
//     </div>
//   </div>
// )
