import React from "react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";

const IznajmljivacHeader = ({logoutFun}) => {

    return(
        <>
            <button  style={{marginRight:'20px'}} className="header__btn btn" >
            <Link to="/mojiNajmovi">
                Moji najmovi
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