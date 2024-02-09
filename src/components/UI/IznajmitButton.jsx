import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"

const IznajmitButton = ({ime, posada}) => {

    const [urlNajam, setUrlNajam] = useState();

    useEffect(() => { 
    if (posada == "bez posade") {
        setUrlNajam(`/prijeKosarica/${ime}`)
    }else {
        setUrlNajam(`/kosarica/${ime}`)
    }
},[posada])

    return(
        <Link to={urlNajam}>
            <button className="contact-button">UNAJMI BRODICU</button>
        </Link>
    )    
};

export default IznajmitButton;