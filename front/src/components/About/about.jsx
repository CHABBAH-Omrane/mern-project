export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                ORGANISATION DE VOTRE MARIAGE De A à Z, parce que vous souhaitez
                continuer à profiter de la vie pendant l’organisation de votre
                mariage : Élaboration du cahier des charges, recherches de lieux
                et prestataires, gestion des invités, proposition d’idées
                originales, planification de votre journée…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
