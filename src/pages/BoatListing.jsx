import React, {useEffect, useState} from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BoatItem from "../components/UI/BoatItem";
import axios from "axios";

const BoatListing = () => {

  const[brod,setBrod]=useState([])
  const[backup, setBackup] = useState(true)

  useEffect(()=>{
    var url = new URL(window.location.href);
    var vrstaBroda = url.searchParams.get("brod");
    var marina = url.searchParams.get("marine")
    var datOd = url.searchParams.get("startDatum")
    var datDo = url.searchParams.get("endDatum")
    if(vrstaBroda || marina || (datOd && datDo)){
       console.log(vrstaBroda + " " + marina)
       axios.get("https://ferit-boat-charter-backened-production.up.railway.app/brod/getBrodForSearchForm",{
        params:{tip_broda:vrstaBroda, regija:marina, slobodanOd:datOd, slobodanDo:datDo }
      }).then((response) => {setBrod(response.data);
      if(response.data.length == 0) setBackup(false)
      console.log(response)}) 
    }
    else{
      fetch("https://ferit-boat-charter-backened-production.up.railway.app/brod/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setBrod(result);
    }
    )}
  },[])

  return (
    <Helmet>
     {/* <CommonSection title="Brodovi" /> */}
      <section>
        <Container>
          <Row>
            {brod.map((item) => (
              <BoatItem item={item} key={item.id} />
            ))}

            {backup ? <p></p> : <h5 className="najamContainer" id="nemaRezervacije">NEMA BRODICE KOJA ZADOVOLJAVA PARAMETRE</h5>}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BoatListing;
