export const Etapes = (props) => {
  return (
    <div id="etapes" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Les Etapes</h2>
        </div>
        <div className="row">
          <div key={1} className="col-xs-6 col-md-3">
            <i className="fa fa-search"></i>
            <h3>Chercher</h3>
            <p>De grandes options s'offrent à vous sur notre site Web.</p>
          </div>
          <div key={1} className="col-xs-6 col-md-3">
            <i className="fa fa-check"></i>
            <h3>Choisir</h3>
            <p>
              Vous pouvez choisir les meilleurs partenaires par rapport à votre
              besoin.
            </p>
          </div>
          <div key={1} className="col-xs-6 col-md-3">
            <i className="fa fa-dollar"></i>
            <h3>Reserver</h3>
            <p>Rendez vous avec les partenaires, pour la réservation.</p>
          </div>
          <div key={1} className="col-xs-6 col-md-3">
            <i className="fa fa-music"></i>
            <h3>Célébrer </h3>
            <p>
              Il est temps d'y aller tous ensemble, celeberons et passons de
              moments fabuleux .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
