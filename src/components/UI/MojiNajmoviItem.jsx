import React, {useEffect, useState} from "react";
import "../../styles/moji-najmovi-item.css";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MojiNajmoviItem = (props) => {

    const {ime, cijena, najamId, zauzetOd, zauzetDo} = props.item;

    const notifyUspjesnoOtkazivanjeNajma = () => toast.error("Najam uspješno otkazan!")
    const notifyPlacanjeKazne = () => toast.error("Do najma ima manje od 5 dana! Ako otkažete sad platit će te kaznu otkazivanja.")

    const today = new Date();
    const zauzetOdFull = new Date(zauzetOd);
    const [daysToNajam, setDaysToNajam] = useState();

    var clickCount = 0;

    useEffect(() => {
        var diffInMilliseconds = Math.abs(today - zauzetOdFull);
        console.log()
        var diffInDays  = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        setDaysToNajam(diffInDays)
      },[])    


      const handleOtkazivanje = () => {
        if(daysToNajam <= 5){
            clickCount = clickCount + 1;
            console.log(clickCount);
        }
        if(daysToNajam > 5) clickCount = 2;

       if (clickCount == 2) {
        const data = new FormData();
        data.append("najamId", najamId);
        fetch("http://localhost:8080/najam/deleteNajam", {
                method:"POST",
                body: data,
            }).then(()=>{
                notifyUspjesnoOtkazivanjeNajma();
                window.location.reload()
            })
        }else if (clickCount = 1) {
            notifyPlacanjeKazne();
        }
    }

    console.log(daysToNajam)

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
            <button type="submit" onClick={handleOtkazivanje} className="otkaziBttn"> OTKAŽI </button>
        </div>
    </div>
)
};

export default MojiNajmoviItem;