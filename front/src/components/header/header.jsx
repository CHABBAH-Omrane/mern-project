export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div>
                {/* <img src="img/logo-removebg-preview.jp" alt="sss " /> */}
              </div>
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Farha
                  <span></span>
                </h1>
                <p>
                  Organiser son mariage en Tunisie en toute simplicité : Salle
                  des fetes, Troupe musicale, photographe.....
                </p>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <a href="#etapes" className="btn btn-custom btn-lg page-scroll">
                  voir plus
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
