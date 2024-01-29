import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

import { RiSailboatLine } from "react-icons/ri";

const quickLinks = [
  {
    path: "/about",
    display: "O nama",
  },

  {
    path: "#",
    display: "Korisni linkovi",
  },

  {
    path: "/boats",
    display: "Brodovi",
  },
  {
    path: "/contact",
    display: "Kontakt",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i> <RiSailboatLine color="#d4af37" /> </i>
                  <span>
                    Ferit Boat <br /> Charter
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4"> Ured </h5>
              <p className="office__info">Ul. cara Hadrijana 10b, 31000, Osijek</p>
              <p className="office__info">Telefon: 097 740 6930</p>

              <p className="office__info">Email: ferit-charter@gmail.com</p>

              <p className="office__info">Radno vrijeme: 8:00 - 17:00</p>
            </div>
          </Col>
              
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Karlo Didak. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
