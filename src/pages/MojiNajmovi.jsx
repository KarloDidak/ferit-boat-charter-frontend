
import React, {useEffect, useState} from "react";
import MojiNajmoviItem from "../components/UI/MojiNajmoviItem";

import axios from "axios";

const MojiNajmovi = () => { 
    
    const korisnikId = localStorage.getItem('userId');
    const [najamBrod, setNajamBrod] = useState([])

      const dohvacanjeNajamBrod = {
        method:"GET",
        url: "http://localhost:8080/najamBrod/getWithUserId",
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

   
    return(
        <div>

            <h2 className="najamContainer" > MOJI NAJMOVI </h2>

            {najamBrod.map((item) => (
                <MojiNajmoviItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default MojiNajmovi;


