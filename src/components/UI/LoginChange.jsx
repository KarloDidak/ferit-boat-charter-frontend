import React from "react";
import {Col} from "reactstrap";
import IznajmljivacHeader from "./IznajmljivacHeader.jsx";
import StandardHeader from "./StandardHeader.jsx";
import UnajmiteljHeader from "./UnajmiteljHeader.jsx";
import AdminHeader from "./AdminHeader.jsx";

const LoginChange = () => {

    const logoutFun = () => {
        localStorage.setItem('statusUser', -1);
        localStorage.setItem('userId', -1);
        window.location.reload()
    }

    return (
        <Col lg="8" md="3" sm="0" className=" d-flex align-items-center justify-content-end" >
            {(localStorage.getItem('statusUser') == null || localStorage.getItem('statusUser') == -1) && (<StandardHeader/>)}
            {(localStorage.getItem('statusUser') == 1) && (<IznajmljivacHeader logoutFun={logoutFun}/>)}
            {(localStorage.getItem('statusUser') == 2) && (<UnajmiteljHeader logoutFun={logoutFun}/>)}
            {(localStorage.getItem('statusUser') == 0) && (<AdminHeader logoutFun={logoutFun}/>)}
        </Col>
    )
}

export default LoginChange;