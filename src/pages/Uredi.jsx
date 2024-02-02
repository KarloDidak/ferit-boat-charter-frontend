
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/uredi.css"

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Uredi = ()=> {

    const navigate = useNavigate();
    const { slug1, slug2 } = useParams(); // Id najma i Id broda

    const korisnikId = localStorage.getItem('userId');

    const [dateRange, setDateRange] = useState([null, null]); 
    const [zauzetOdNovi, zauzetDoNovi] = dateRange;

    const[brod, setBrod]=useState([]);
    const[brodSlobodanOd, setBrodSlobodanOd] = useState() 
    const[brodSlobodanDo, setBrodSlobodanDo] = useState()

    const getBrodWithId = {
        method:"GET",
        url: "http://localhost:8080/brod/getBrodWithId",
        params:{id: slug2},
      }

      useEffect(() => {
      axios.request (getBrodWithId).then((response) => {
        setBrod(response.data);
        setBrodSlobodanOd(new Date(response.data.slobodanOd));
        setBrodSlobodanDo(new Date(response.data.slobodanDo));
      }).catch((error) => {
        console.error(error);
      });
    }, []);

    const[najmovi, setNajmovi] = useState();

    const getNajmoviBroda = {
        method:"GET",
        url: "http://localhost:8080/najam/getNajamWithBrodId",
        params:{brodId: slug2},
      }
    
      useEffect(() => {
      axios.request (getNajmoviBroda).then((response) => {
        setNajmovi(response.data);
       }).catch((error) => {
        console.error(error);
      });
    }, []);  
    
    return(

        <div className="urediNajamContainer">

            <h2 className="urediNajamHeader" > Produžite najam za jedan </h2>

            <button className="produziNajam-bttn" > Preuzmi brod dan ranije </button>
            <button className="produziNajam-bttn" id="ostaviBrod-bttn" > Ostavi brod dan ranije </button>
        
        </div>
    )

}

export default Uredi;