import React, { useEffect, useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { RiMapPin2Line } from "react-icons/ri";
import "../styles/boat-details.css";
import axios from "axios";
import BrisanjeBroda from "../components/UI/BrisanjeBroda";
import IznajmitButton from "../components/UI/IznajmitButton";

const BoatDetails = () => {  

  const userId =localStorage.getItem('userId')

  const tempStatus = localStorage.getItem('statusUser')

  const{slug1, slug2} = useParams();
  const[brod, setBrod]=useState([])
  const[look1, setLook1] = useState('')
  const[look2, setLook2] = useState('')

  const getBrod = {
    method:"GET",
    url: "http://localhost:8080/brod/getBrodWithName",
    params:{ime: slug1},
  }

  useEffect(() => {
  axios.request (getBrod).then((response) => {
    setBrod(response.data);
    console.log(response);
  }).catch((error) => {
    console.error(error);
  });
}, []);

  useEffect(() => {
    if (userId == slug2) {
      setLook2(<BrisanjeBroda ime={slug1} />)
    } 
    
    if (tempStatus == 0) {
      setLook2(<BrisanjeBroda ime={slug1} />)
    }
},[])

useEffect(() => {
  if (tempStatus == 1) {
    setLook1(<IznajmitButton ime={slug1}/>) 
  }
},[brod])
  
  return (
    <Helmet title={brod.ime}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={`data:image/jpeg;base64,${brod.slika}`} alt="" className="w-100 boatImg"/>
            </Col>

            <Col lg="6">
              <div>
                <h2 className="section__title">{brod.ime}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                  {brod.cijena} € / Dan
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                   <i color="blue"> <RiMapPin2Line color="#d4af37" />  Marina {brod.regija} </i>
                  </span>
                </div>

                <div class="row" >
                  <div class="column">
                    <p>Godina: {brod.godina}</p> 
                    <p>Kabine: {brod.kabine}</p>
                    <p>Posada: {brod.posada}</p>
                    <p>Gaz: {brod.gaz}</p>
                    <p>Tuš: {brod.tus}</p>
                  </div>
                  <div class="column">
                    <p>Tip Broda: {brod.tip}</p>
                    <p>Lezajevi: {brod.lezajevi}</p>
                    <p>Motor: {brod.motor}</p>
                    <p>Duljina preko svega: {brod.duljinaPrekoSvega}</p>
                    <p>Brzina krstarenja: {brod.brzina}</p>
                  </div>
                </div>
              </div>     
            </Col>

            <Col lg="7" className="mt-5">
              <div>
                <h5 className="mb-4 fw-bold ">Opis</h5>
                <p className="section__description">
                  {brod.opis}
                </p>

           </div>
            </Col>

            <Col className="mt-5">
              <div className="contact-container mt-5" >  
                {look1}
              </div>
            </Col>
            <Col className="mt-5">
              <div className="contact-container mt-5" >  
                {look2}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BoatDetails;
