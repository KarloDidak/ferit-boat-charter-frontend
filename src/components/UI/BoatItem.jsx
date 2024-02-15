import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/boat-item.css";

const BoatItem = (props) => {
  const {ime, cijena, godina, regija, posada, slika, userId} = props.item;

  return (
    <Col lg="3" md="4"  className="mb-5" >
      <div className="boat__item">
        <div>
          <img src={`data:image/jpeg;base64,${slika}`} alt="brod" className="w-100" id="boat-item-pic"/>
        </div>   

        <div className="boat__item-content mt-4">
          <h4 className="section__title text-center">{ime}</h4>
          <h6 className="text-center">
            {cijena} € <span>/ Dan</span>
          </h6>

          <div className="boat__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="boat__item-info-first d-flex align-items-center gap-1"> Marina {regija} </span>
            <span> | </span>
            <span>{posada}</span>
            <span>|</span>
            <span className="boat__item-info-third">{godina}</span>
          </div>

          <Link to={`/boats/${ime}/${userId}`} >
            <button className="w-100 boat__item-btn">O brodu</button>
          </Link>
          
        </div>
      </div>
    </Col>
  );
};

export default BoatItem;
