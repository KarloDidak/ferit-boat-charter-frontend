import React, { useRef } from "react";

import { RiSailboatLine} from 'react-icons/ri';
import LoginChange from "../UI/LoginChange";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Naslovna",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    
    <header className="header">
  
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i> <RiSailboatLine color="#d4af37" /> </i>
                    <span>
                      Ferit Boat <br /> Charter
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <LoginChange/>
         
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
