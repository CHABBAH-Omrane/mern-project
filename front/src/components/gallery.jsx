import { Image } from "./image";

export const Gallery = ({ partners }) => {
  const sallePartners = partners.filter((el) => el.categories === "Salle");
  const troupePartners = partners.filter((el) => el.categories === "Troupe");
  const photographePartners = partners.filter(
    (el) => el.categories === "Photographe"
  );

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
        </div>
        <div>
          <div className="row">
            <h1>Liste Des Salles Des Fétes </h1>
            <h5>
              On connais tous le nombre d'invités important dans les mariages
              tunisiens. Pour une fête réussie,
              <br /> la salle compte énormément et trouver l’espace de rêve pour
              réunir vos convives est une tâche délicate.
            </h5>
            <div>
              <div className="portfolio-items">
                {sallePartners.map((d, i) => (
                  <div
                    key={i}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{ width: "33%", height: "50%" }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.logo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <h1>Liste Des Troupes Musicales </h1>
            <h5>
              On vous facilite la tâche et on partage avec vous des troupes
              musicales bien réputées en Tunisie <br />
              pour une ambiance de mariage exceptionnelle le Jour J.
            </h5>
            <div>
              <div className="portfolio-items">
                {troupePartners.map((d, i) => (
                  <div
                    key={i}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{ width: "33%", height: "50%" }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.logo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <h1>Liste Des Photographes </h1>
            <h5>
              Le plus important dans un mariage ? C’est la personne qui va
              immortaliser les moments les plus magiques du plus beau jour de
              votre vie !<br /> Vous ne savez pas quel photographe choisir et
              vous craignez le rendu…
            </h5>
            <div>
              <div className="portfolio-items">
                {photographePartners.map((d, i) => (
                  <div
                    key={i}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{ width: "33%", height: "50%" }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.logo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
