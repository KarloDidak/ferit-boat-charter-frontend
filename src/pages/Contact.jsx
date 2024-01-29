import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { RiFacebookBoxLine, RiInstagramLine, RiLinkedinBoxLine, RiTwitterLine } from "react-icons/ri";

import officeImg from "../assets/all-images/ferit.jpg";
import "../styles/contact.css";


const socialLinks = [
  {
    icon: <RiFacebookBoxLine/>,
  },
  {
    icon: <RiInstagramLine/>,
  },
  {
    icon: <RiLinkedinBoxLine/>,
  },
  {
    icon: <RiTwitterLine/>,
  },
];


const About = () => {
  return (
    <Helmet title="About">
      
      <section className="about__page-section">
        <Container>
          <Row>
          <Col lg="6" md="6" sm="12">
              <div>
                <img src={officeImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div>
                <h2 className="section__title">
                  Kontakt
                </h2>

              <div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Ured:</h6>
                  <p className="section__description mb-0">Ul. cara Hadrijana 10b, 31000, Osijek</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <p className="section__description mb-0">097 740 6930</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Radno vrijeme:</h6>
                  <p className="section__description mb-0">8:00 - 17:00</p>
                </div>


                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">ferit-charter@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Pratite nas</h6>
                </div>

              </div>

              <div className="d-flex align-items-center gap-3 mt-2">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      
                      <i>{item.icon}</i>
                    </Link>
                  ))}
                </div>

            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default About;
