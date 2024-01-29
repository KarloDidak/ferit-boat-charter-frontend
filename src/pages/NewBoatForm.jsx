import React, {useEffect, useState, useContext} from "react";
import Select from 'react-select'
import { Link, useNavigate } from "react-router-dom";
import "../styles/new-boat-form.css"
import { MyContext } from "../App";
import { FormGroup } from "reactstrap";
import { dateToNumber } from "../hooks/dateChangers";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const notifyPrazno = () => toast.warning("Sva polja moraju biti popunjena!")

export default () => {

    const navigate = useNavigate();

    const[vrsteBroda, setVrsteBroda]=useState([])

    const userId =localStorage.getItem('userId')

useEffect(()=>{
  fetch("http://localhost:8080/vrste-broda/getAll")
  .then(res=>res.json())
  .then((result)=>{

    let temp = result.map((d) => ({
      value: d.id,
      label: d.naziv
    })) 
    setVrsteBroda(temp);
  }
)
},[])

const[vrstePosade, setvrstePosade]=useState([])

useEffect(()=>{
  fetch("http://localhost:8080/vrste-posade/getAll")
  .then(res=>res.json())
  .then((result)=>{

    let temp = result.map((d) => ({
      value: d.id,
      label: d.naziv
    })) 
    setvrstePosade(temp);
  }
)
},[])

const[ime, setIme]=useState([])
const[cijena, setCijena]=useState([])
const[regija, setRegija]=useState([])
const[godina, setGodina]=useState([])
const[tip, setTip]=useState(null)
const[kabine, setKabine]=useState([])
const[lezajevi, setLezajevi]=useState([])
const[posada, setPosada]=useState(null)
const[motor, setMotor]=useState([])
const[gaz, setGaz]=useState([])
const[duljinaPrekoSvega, setDuljinaPrekoSvega]=useState([])
const[tus, setTus]=useState([])
const[brzina, setBrzina]=useState()
const[opis, setOpis]=useState([])

const [dateRange, setDateRange] = useState([null, null]); 
const [startDate, endDate] = dateRange;
var slobodanOd = dateToNumber(startDate);
var slobodanDo = dateToNumber(endDate);


function validateNewBoatForma( ){
 
    if (ime.length == 0) {
        notifyPrazno();
        return 0;
    }else if (cijena.length == 0) {
        notifyPrazno();
        return 0;
    }else if (regija.length == 0) {
        notifyPrazno();
        return 0;
    }else if (godina.length == 0) {
        notifyPrazno();
        return 0;
    }else if (tip.length == 0) {
        notifyPrazno();
        return 0;
    }else if (kabine.length == 0) {
        notifyPrazno();
        return 0;
    }else if (lezajevi.length == 0) {
        notifyPrazno();
        return 0;
    }else if (posada == null && posada == undefined) {
        notifyPrazno();
        return 0;
    }else if (motor.length == 0) {
        notifyPrazno();
        return 0;
    }else if (gaz.length == 0) {
        notifyPrazno();
        return 0;
    }else if (duljinaPrekoSvega.length == 0) {
        notifyPrazno();
        return 0;
    }else if (tus.length == 0) {
        notifyPrazno();
        return 0;
    }else if (brzina.length == 0) {
        notifyPrazno();
        return 0;
    }else if (opis.length == 0) {
        notifyPrazno();
        return 0;
    }else if (startDate == null) {
        notifyPrazno();
        return 0;
    }else if (endDate == null) {
        notifyPrazno();
        return 0;
    }
    
    return 1;
      }

const handleSubmit = (e) => {
    e.preventDefault();
    if(validateNewBoatForma() == 1){
    const brod = {ime, cijena, tip, regija, godina,  kabine, lezajevi, posada, motor, gaz, duljinaPrekoSvega, tus, brzina, opis, userId, slobodanOd, slobodanDo}
    console.log(brod);
    fetch("http://localhost:8080/brod/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(brod) 
    }).then(()=>{
        console.log("DODAN NOVI BROD")
    })
    navigate(`/dodajSliku/${ime}`);
    }
  }

    const [isClearable] = useState(true);
    const [isSearchable] = useState(true);

    return(
        <div className="auth-form-container">

            <h2 className="new-brod-header">Prijava novog broda</h2>
        
          <form className="form-box row g-5" onSubmit={handleSubmit}>
            <div className="centar">
 
            <div className="col-md-3"> 
                <form className="login-form">
                    <label>Ime broda</label>
                    <input className="newBoat-Input" value={ime} onChange={(e) => setIme(e.target.value)} type="text" placeholder="" maxLength={20} ></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Cijena najma (jedan dan)</label>
                    <input className="newBoat-Input" value={cijena} onChange={(e) => setCijena(e.target.value.replace(/\D/g, ""))} placeholder="" maxLength={6}></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Marina</label>
                    <input className="newBoat-Input" value={regija} onChange={(e) => setRegija(e.target.value)} type="text" placeholder="" maxLength={15}></input>
                </form>
            </div>
            </div>

        <div className="centar" >
            <div className="col-md-3">
                <form className="login-form">
                    <label>Godina proizvodnje</label>
                    <input className="newBoat-Input"  value={godina} onChange={(e) => setGodina(e.target.value.replace(/\D/g, ""))} type="text" maxLength={4} placeholder=""></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                <label className="SelectLabel">Tip broda</label>
                    <Select
                        placeholder="Odaberi..."
                        className="newBoat-Select"
                        isSearchable={isSearchable}
                     //   defaultValue={boatOptions[0]}
                     //   name="color"
                      onChange={(update) => {
                      setTip(update.label);
                     }}
                        options={vrsteBroda}
                     />
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Broj kabina</label>
                    <input className="newBoat-Input" value={kabine} onChange={(e) => setKabine(e.target.value.replace(/\D/g, ""))} type="text" placeholder="" maxLength={3}></input>
                </form>
            </div>
        </div>

        <div className="centar" >
            <div className="col-md-3">
                <form className="login-form">
                    <label>Broj lezajeva</label>
                    <input className="newBoat-Input" value={lezajevi} onChange={(e) => setLezajevi(e.target.value.replace(/\D/g, ""))} type="text" placeholder="" maxLength={3}></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label className="SelectLabel" >Posada</label>
                    <Select
                        placeholder="Odaberi..."
                        className="newBoat-Select"
                        isSearchable={isSearchable}
                    //   defaultValue={boatOptions[0]}
                        onChange={(update) => {
                        setPosada(update.label);
                     }}
                        options={vrstePosade}
                     />
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Motor</label>
                    <input className="newBoat-Input" value={motor} onChange={(e) => setMotor(e.target.value)} type="text" maxLength={30} placeholder=""></input>
                </form>
            </div>
            </div>

        <div className="centar" >
            <div className="col-md-3">
                <form className="login-form">
                    <label>Gaz</label>
                    <input className="newBoat-Input" type="number" step=".01"  value={gaz} onChange={(e) => setGaz(e.target.value)} placeholder="" maxLength={4}></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Duljina preko svega</label>
                    <input className="newBoat-Input" value={duljinaPrekoSvega} onChange={(e) => setDuljinaPrekoSvega(e.target.value)} placeholder="" maxLength={4}></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Broj tuseva</label>
                    <input className="newBoat-Input" value={tus} onChange={(e) => setTus(e.target.value.replace(/\D/g, ""))} type="text" placeholder="" maxLength={2}></input>
                </form>
            </div>
        </div>

        <div className="centar" >
            <div className="col-md-3">
                <form className="login-form">
                    <label>Brzina krstarenja</label>
                    <input className="newBoat-Input" value={brzina} onChange={(e) => setBrzina(e.target.value)} type="text" placeholder="" maxLength={10}></input>
                </form>
            </div>

            <div className="col-md-3">
                <form className="login-form">
                    <label>Opis</label>
                    <input className="newBoat-Input" value={opis} onChange={(e) => setOpis(e.target.value)} type="text" placeholder=""maxLength={250} ></input>
                </form>
            </div>  

            <div className="col-md-3">
                <form className="login-form">
                    <label>Slobodan od-do</label>
                <DatePicker 
                    className="newBoat-datePicker"
                    dateFormat={'dd-MM-yyyy'}
                    minDate={new Date()}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    // placeholerText=""
                    onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                />
                </form>
            </div>

        </div>
                <div className="col-md-3 full">
                    <div className="full-small">
                        <button className="postavi-brod" type="submit">
                            Postavi
                        </button>
                    </div>
                </div>  
        </form>
        </div> 
    )

}

