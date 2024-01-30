import React from "react";
import "../../styles/moji-najmovi-item.css";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MojiNajmoviItem = (props) => {

    const {ime, cijena, najamId, zauzetOd, zauzetDo} = props.item;

    const notifyUspjesnoOtkazivanjeNajma = () => toast.error("Najam uspješno otkazan!")

    const deleteNajam = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("najamId", najamId);
        fetch("http://localhost:8080/najam/deleteNajam", {
                method:"POST",
                body: data,
            }).then(()=>{
                notifyUspjesnoOtkazivanjeNajma();
                window.location.reload()
            })
    }

return(
    <div>
        <div className="borderContainer" >
            <div className="borderLine" />
        </div>

        <div className="najamContainer" >
            <h4> {ime} </h4>
            <div className="vl" />
            <h4> od {zauzetOd} </h4>
            <div className="vl" />
            <h4> do {zauzetDo} </h4>
            <div className="vl" />
            <h4> {cijena} € </h4>
            <button type="submit" onClick={deleteNajam} className="otkaziBttn"> OTKAŽI </button>
        </div>
    </div>
)
};

export default MojiNajmoviItem;