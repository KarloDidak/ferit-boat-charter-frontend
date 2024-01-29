import React, {useEffect, useState} from "react";
import DozvolaAdd from "../components/UI/DozvolaAdd";
import axios from "axios";
import "../styles/prije-kosarice.css"
import { useParams } from "react-router-dom";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const PrijeKosarica = () => {

    const [dateRange, setDateRange] = useState([null, null]); 
    const [zauzetOd, zauzetDo] = dateRange;

    const { slug1 } = useParams();
    const[brod, setBrod]=useState([]);

    const getBrod = {
        method:"GET",
        url: "http://localhost:8080/brod/getBrodWithName",
        params:{ime: slug1},
      }
    
      useEffect(() => {
      axios.request (getBrod).then((response) => {
        setBrod(response.data);
        setCompareDate1(new Date(response.data.slobodanOd));
        setCompareDate2(new Date(response.data.slobodanDo));
      }).catch((error) => {
        console.error(error);
      });
    }, []);

    const brodId = brod.id;
    const[najmovi, setNajmovi] = useState();
    const[najmoviDatum1, setNajmoviDatum1] = useState()
    const[najmoviDatum2, setNajmoviDatum2] = useState()

    const getNajmovi = {
        method:"GET",
        url: "http://localhost:8080/najam/getNajamWithBrodId",
        params:{brodId: brodId},
      }
    
      useEffect(() => {
      axios.request (getNajmovi).then((response) => {
        setNajmovi(response.data);
       }).catch((error) => {
        console.error(error);
      });
    }, [brodId]);   

    const[compareDate1, setCompareDate1] = useState() 
    const[compareDate2, setCompareDate2] = useState()

    const isDisabled = date => date.getDate() > brod.slobodanDo !== 0;

    const getDatesInbetween = (compareDate1, compareDate2) => {
        let dateList = [];
        let currentDate = new Date(compareDate1);
        
        while(currentDate <= compareDate2){
            dateList.push(currentDate.getTime());
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dateList;
    }

    var date = new Date();
    const datesExcludeSlobodanOd  = getDatesInbetween(new Date(date.getFullYear(), date.getMonth(), 1), compareDate1)
    const datesExcludeSlobodanDo = getDatesInbetween(compareDate2, date.setMonth(date.getMonth() + 6))

    const [finalExclude, setFinalExclude] = useState([]);

    var finalEx = [];

        useEffect(() => {
            if(najmovi !== undefined){ 
                var tmp = [...datesExcludeSlobodanOd, ...datesExcludeSlobodanDo]
                for (let index = 0; index < najmovi.length; index++) {
                    var zauzetOdTemp = new Date(najmovi[index].zauzetOd)
                    var zauzetDoTemp = new Date(najmovi[index].zauzetDo)
                    var datesTmp = getDatesInbetween(zauzetOdTemp, zauzetDoTemp)
                    finalEx = finalEx.concat(datesTmp);
                }
                setFinalExclude([...finalEx,...tmp])
            }
        }, [najmovi])

    const handleSubmitNajam = (e) => {
        e.preventDefault();
        const najam = {brodId, zauzetOd, zauzetDo}
        fetch("http://localhost:8080/najam/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(najam) 
        }).then(()=>{
            console.log("DODAN NAJAM")
        })
      }

      const [cijena, setCijena] = useState(0)

      useEffect(() => {
        var diffInMilliseconds = Math.abs(zauzetDo - zauzetOd);
        var diffInDays  = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        console.log("Ovdje")
        console.log(diffInDays)
        console.log("CIJENA")
        setCijena(brod.cijena * diffInDays)
        console.log(cijena)
      },[zauzetDo])

      function calculateDifference() {
        const diffInMilliseconds = Math.abs(zauzetDo - zauzetOd);
        const diffInDays  = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        return diffInDays;
      }

  
    return(
    <form>
        <div className="prijeKosarice-container">
            <div className="prijeKosarice-brod">
                    <h2 className="section__title">{slug1}</h2>
            </div>
        
            <div className="prijeKosarice-datum">
                <DatePicker 
                className="prijeKosarice-datumForm"
                dateFormat={'dd-MM-yyyy'}
              //  minDate={new Date()}
                selectsRange={true}
                startDate={zauzetOd}
                endDate={zauzetDo}
                excludeDates={finalExclude}
                
                placeholderText="Odabrati vrijeme najma"
                isDisabled={isDisabled}
                onChange={(update) => {
                setDateRange(update);
                }}
                isClearable={true}
                />
              {/**  <button onClick={handleSubmitNajam}> UPIS NAJMA </button> */}
            </div>

            <div className="borderContainer" >
                <div className="borderLine" />
            </div>

            <p className="borderContainer"> Konačna cijena </p>
            <p className="borderContainer">  {cijena} €</p>

            <div className="borderContainer" >
                <div className="borderLine" />
            </div>

            <div className="postavljanjeDozvole" >
                <button className="postavljanjeSlikaBttn" >Plaćanje</button>
            </div>

        </div>
    </form>
    )

    
}

export default PrijeKosarica;