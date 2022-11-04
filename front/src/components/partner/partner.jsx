import ReactStars from "react-rating-stars-component";
import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import ModalAddPartner from "../modalPartner/ModalAddPartner";
import "./partner.css";

export const Partner = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        {/* interface admin */}
        <Button
          className="btn btn-custom btn-lg page-scroll"
          onClick={() => setShow(true)}
        >
          Ajouter Partener
        </Button>
        {show ? (
          <ModalAddPartner
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
          />
        ) : (
          <></>
        )}
        <div className="container partList">
          <img
            alt=""
            src="https://www.lasalledereception.fr/wp-content/uploads/2016/12/logo.png"
            height="100"
            className="card__img logo"
          />

          <span className="vertical-line"></span>
          <div className="card__body middle-part">
            <h3 className="card__title">Salle des fetes</h3>
            <p className="card__description">
              une cuisine entièrement équipée & divisée en 3 parties : un coin
              préparation chaude, un coin préparation froide, un coin plonge une
              chambre froide climatisation réversible ainsi qu'un système de
              chauffage à la porte d'entrée (rideau d'air chaud)
            </p>
          </div>
          <div className="last-part">
            <div className="caractrestics">
              <h4>Adress </h4>
              <h4> sousse </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Categorie </h4>
              <h4> Couverte </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Capacite </h4>
              <h4> 600 per </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Note </h4>
              <ReactStars count={5} size={24} activeColor="#ffd700" />
            </div>

            <div className="btn-space">
              <Button variant="primary">Update</Button>
              <Button variant="danger"> Delete </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* interface customer */}
        <div className="container partList">
          <img
            alt=""
            src="https://www.lasalledereception.fr/wp-content/uploads/2016/12/logo.png"
            height="100"
            className="card__img logo"
          />

          <span className="vertical-line"></span>
          <div className="card__body middle-part">
            <h3 className="card__title">Salle des fetes</h3>
            <p className="card__description">
              une cuisine entièrement équipée & divisée en 3 parties : un coin
              préparation chaude, un coin préparation froide, un coin plonge une
              chambre froide climatisation réversible ainsi qu'un système de
              chauffage à la porte d'entrée (rideau d'air chaud)
            </p>
          </div>
          <div className="last-part">
            <div className="caractrestics">
              <h4>Adress </h4>
              <h4> sousse </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Categorie </h4>
              <h4> Couverte </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Capacite </h4>
              <h4> 600 per </h4>
            </div>
            <hr className="separation-line" />
            <div className="caractrestics">
              <h4>Note </h4>
              <ReactStars count={5} size={24} activeColor="#ffd700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// import {
//   CardWrapper,
//   CardTitle,
//   MediaFigure,
//   Media,
//   MediaBody,
//   Col,
// } from "react-bootstrap";
/* <Row xs={1} md={2} className="g-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  style={{ width: "17rem" }}
                />
              </Card.Body>
            </Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Row> */
