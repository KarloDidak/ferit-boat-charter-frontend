import React,{useContext} from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";
import { MyContext } from "../../App";

const IznajmljivacHeader = ({logoutFun}) => {

    return(
        <>
            <button  style={{marginRight:'20px'}} className="header__btn btn" >
            <Link to="/prijeKosarica">
                Kosarica
            </Link>
            </button>
            <button className="header__btn btn" onClick={() => {
                logoutFun();
            }}>
                Odjava
            </button>
        </>
    )
}

export default IznajmljivacHeader;