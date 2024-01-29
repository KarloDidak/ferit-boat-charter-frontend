import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/header.css";
import { MyContext } from "../../App";

const UnajmiteljHeader = ({logoutFun}) => {

    const navigate = useNavigate();

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