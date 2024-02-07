import React from "react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";

const UnajmiteljHeader = ({logoutFun}) => {

    return(
        <>
            <button  style={{marginRight:'20px'}} className="header__btn btn" >
            <Link to="/novi-brod-forma">
                Iznajmi svoj brod
            </Link>
            </button>
            <button className="header__btn" onClick={() => {
                logoutFun();
            }
            }>
                Odjava
            </button>
        </>
    )
}

export default UnajmiteljHeader;