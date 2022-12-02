import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" style={{ margin: "20px 0" }}>
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="5" xl="3" className="mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                FARHA
              </h4>
              <p>
                De A à Z, parce que vous souhaitez continuer à profiter de la
                vie pendant l’organisation de votre mariage : Élaboration du
                cahier des charges, recherches de lieux et prestataires, gestion
                des invités, proposition d’idées originales, planification de
                votre journée…
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <div>
                <a
                  href="https://www.facebook.com/"
                  className="me-4 text-reset "
                  style={{ margin: "10px" }}
                  target="_blank"
                >
                  <MDBIcon icon="facebook-f" />
                </a>
                <a
                  href="https://twitter.com/"
                  className="me-4 text-reset"
                  style={{ margin: "10px" }}
                  target="_blank"
                >
                  <MDBIcon icon="twitter" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  className="me-4 text-reset"
                  style={{ margin: "10px" }}
                  target="_blank"
                >
                  <MDBIcon icon="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="me-4 text-reset"
                  style={{ margin: "10px" }}
                  target="_blank"
                >
                  <MDBIcon icon="linkedin" />
                </a>
              </div>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4"></MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Info</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kantaoui, Sousse
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@farha.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 54 545 545
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 73 373 373
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          farha.com
        </a>
      </div>
    </MDBFooter>
  );
}
