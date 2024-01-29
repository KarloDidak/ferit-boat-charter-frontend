import React from "react"
import { Link } from "react-router-dom"

const IznajmitButton = (ime) => {

    return(
        <Link to={`/prijeKosarica/${ime.ime}`}>
            <button className="contact-button">UNAJMI BRODICU</button>
        </Link>
    )    
};

export default IznajmitButton;