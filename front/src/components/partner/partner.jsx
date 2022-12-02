// import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";

import { Button } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import ModalAddPartner from "../modalPartner/ModalAddPartner";
// import ModalPartnerUpdate from "../modalPartnerUpdate/ModalPartnerUpdate";
import "./partner.css";
import { useSelector, useDispatch } from "react-redux";
import { getPartner, deletePartner } from "../../actions/adminActions";
import PartnerCard from "../PartnersCard/partnersCard";
import { /* Container, */ Form, Modal, Row, Col } from "react-bootstrap";

export const Partner = () => {
  //filter
  const [filter, setFilter] = useState("");

  const handleFilter = (val) => {
    setFilter(val);
  };

  const dispatch = useDispatch();
  //modal add
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getPartner());
  }, []);

  const partners = useSelector((state) => state.adminReducer.partners);
  console.log("artners", partners);

  return (
    <div id="all-partner">
      <Form>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="2"
            className="mb-3  page-scroll "
            controlId="exampleForm.ControlInput1"
            style={{
              margin: "100px 70% -180px 10% ",
            }}
          >
            <Form.Label>
              <h5>Rechercher par catégorie</h5>
            </Form.Label>
            <Form.Select
              className="mb-3 btn btn-custom btn-lg page-scroll "
              name="categories"
              onChange={(e) => handleFilter(e.target.value)}
              style={{ color: "black" }}
            >
              <option value="">Categories</option>
              <option value="Salle">Salle des fetes</option>
              <option value="Photographe">Photographe</option>
              <option value="Troupe">Troupe</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>

      {/* <div className="btn btn-custom btn-lg page-scroll ajout">
        <h3>Rechercher par catégorie</h3>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div> */}
      <div>
        {/* interface admin */}
        <Button
          className="btn btn-custom btn-lg page-scroll ajout"
          onClick={() => setShow(true)}
          style={{ marginTop: "100px" }}
        >
          Ajouter Partener
        </Button>
        {/* <ModalAddPartner handleClose={handleClose} handleShow={handleShow} /> */}
        {show ? (
          <ModalAddPartner
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
          />
        ) : (
          <></>
        )}

        {/* {partners && partners.map((el) => <PartnerCard el={el} />)}
         */}
        {
          <PartnerCard
            el={partners.filter((ele) =>
              ele.categories
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
            )}
          />
        }
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
              {/* <ReactStars count={5} size={24} activeColor="#ffd700" /> */}
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <FaStar color={ratingValue <= 3 ? "#ffc107" : "#A39D95"} />
                );
              })}
            </div>
            <div>
              <Button variant="success ">Select</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
