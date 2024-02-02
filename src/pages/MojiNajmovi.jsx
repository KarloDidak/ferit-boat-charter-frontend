
import React, {useEffect, useState} from "react";
import MojiNajmoviItem from "../components/UI/MojiNajmoviItem";

import axios from "axios";

const MojiNajmovi = () => { 
    
    const korisnikId = localStorage.getItem('userId');
    const [najamBrod, setNajamBrod] = useState([])

      const dohvacanjeNajamBrod = {
        method:"GET",
        url: "http://ferit-boat-charter-backened-production.up.railway.app/najamBrod/getWithUserId",
        params:{
            korisnikId: korisnikId
        }
      }
    
    useEffect(() => {
        axios.request (dohvacanjeNajamBrod).then((response) => {
            setNajamBrod(response.data)
    }).catch((error) => {
        console.error(error);
    })
    }, [])

    
    var najamCheck = true;
    if(najamBrod.length == 0) najamCheck = false;

    return(
        <div>

            <h2 className="najamContainer" > MOJI NAJMOVI </h2>

            {najamCheck ? <p></p> : <h5 className="najamContainer" id="nemaRezervacije" >NEMATE NITI JEDNU REZERVACIJU</h5>}

            {najamBrod.map((item) => (
                <MojiNajmoviItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default MojiNajmovi;


