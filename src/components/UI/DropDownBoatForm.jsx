import React, {useEffect, useState} from "react";
import Select from 'react-select'
import { Form, FormFeedback, FormGroup } from "reactstrap";

import { dateToNumber } from "../../hooks/dateChangers";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import "../../styles/dropdown-boat-form.css";
import { useNavigate } from "react-router-dom";

  export default () => {

    const[marine,setMarine]=useState([])

useEffect(()=>{
  fetch("http://localhost:8080/marina/getAll")
  .then(res=>res.json())
  .then((result)=>{

    let temp = result.map((d) => ({
      value: d.id,
      label: d.naziv
    })) 
    setMarine(temp);
  }
)
},[])

const[vrsteBroda, setVrsteBroda]=useState([])

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

    const [isClearable] = useState(true);
    const [isSearchable] = useState(true);

    const [odabranaVrstaBroda, setOdabranaVrstaBroda] = useState(null);
    const [odabranaMarina, setOdabranaMarina] = useState(null);

    const [dateRange, setDateRange] = useState([null, null]); 
    const [startDate, endDate] = dateRange;

    const createUrl = () => {
      var selectedBoat = odabranaVrstaBroda;
      var selectedMarine = odabranaMarina;
      var selectedStartDate = dateToNumber(startDate);
      var selectedEndDate = dateToNumber(endDate);

      var url = "/boats";

      if (selectedBoat !== undefined && selectedBoat !== null) {
        url = url + ("?brod=" + selectedBoat.label);
      }
      if (selectedMarine !== undefined && selectedMarine !== null ) {
        if(url.indexOf("?") !== -1) url = url + ("&marine=" + selectedMarine.label);
          else url = url + ("?marine=" + selectedMarine.label);
      }

      if (selectedStartDate !== undefined && selectedStartDate !== null) {
        if (selectedEndDate !== undefined && selectedEndDate !== null) {
          if(url.indexOf("?") !== -1) url = url + ("&startDatum=" + selectedStartDate + "&endDatum=" + selectedEndDate);
          else url = url + ("?startDatum=" + selectedStartDate + "&endDatum=" + selectedEndDate);
        }
      }

      console.log(selectedStartDate)
      console.log(selectedEndDate)
      navigate(url);
    }

    const navigate = useNavigate();

    return ( 
      <>

    <Form className="form">
        <div className="form-participants d-flex align-items-center justify-content-between flex-wrap">
            <FormGroup className="form__group">
            
            <Select
                placeholder="Vrsta plovila"
                className="basic-single"
                isClearable={isClearable}
                isSearchable={isSearchable}
            //   defaultValue={boatOptions[0]}
            //  name="color"
                onChange={(update) => {
                  setOdabranaVrstaBroda(update);
                  }}
                options={vrsteBroda}
            />

            </FormGroup>

            <FormGroup className="form__group">
         
            <Select
                placeholder="Marine"
                className="basic-single"
                classNamePrefix="select"
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="color"
                onChange={(update) => {
                  setOdabranaMarina(update);
                  console.log(odabranaMarina);
                  }}
                options={marine}  
            />
            
            </FormGroup>

            <FormGroup className="form__group">

            <DatePicker
              dateFormat={'dd-MM-yyyy'}
              minDate={new Date()}
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
              setDateRange(update);
              console.log(startDate); 
              }}
              isClearable={true}
            />
            </FormGroup>

            <FormGroup className="form__group">
            <button 
              className="btn find__boat-btn"
              onClick={createUrl}            
            >
              Pretraga</button>
            </FormGroup>
        </div>  
    </Form>

      </>
    );
  };