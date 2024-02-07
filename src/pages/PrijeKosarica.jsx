
import React from "react";
import DozvolaAdd from "../components/UI/DozvolaAdd";
import { useParams } from "react-router-dom";


const PrijeKosarica = () => {

    const { slug1 } = useParams();

    return(
        <DozvolaAdd ime={slug1}/>
    )
}

export default PrijeKosarica;