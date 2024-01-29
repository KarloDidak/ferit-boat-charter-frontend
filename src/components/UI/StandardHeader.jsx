import React from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";

const StandardHeader = () => {

    return(
        <>
            <button  style={{marginRight:'20px'}} className="header__btn btn" >
            <Link to="/prijava">
                Prijava / Registracija
            </Link>
            </button>
        </>
    )
}

export default StandardHeader;