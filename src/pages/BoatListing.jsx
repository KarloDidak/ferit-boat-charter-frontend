import React, {useEffect, useState, useContext} from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BoatItem from "../components/UI/BoatItem";
import axios from "axios";

const BoatListing = () => {

  const[brod,setBrod]=useState([])

  useEffect(()=>{
    var url = new URL(window.location.href);
    var vrstaBroda = url.searchParams.get("brod");
    var marina = url.searchParams.get("marine")
    var datOd = url.searchParams.get("startDatum")
    var datDo = url.searchParams.get("endDatum")
    if(vrstaBroda || marina || (datOd && datDo)){
       console.log(vrstaBroda + " " + marina)
       axios.get("http://ferit-boat-charter-backened-production.up.railway.app/brod/getBrodForSearchForm",{
        params:{tip_broda:vrstaBroda, regija:marina, slobodanOd:datOd, slobodanDo:datDo }
      }).then((response) => {setBrod(response.data);
      console.log(response)}) 
    }
    else{
      fetch("http://ferit-boat-charter-backened-production.up.railway.app/brod/getAll")
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
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BoatListing;
