import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/prije-kosarice.css"
import { useParams, useNavigate } from "react-router-dom";
import { dateToNumber } from "../hooks/dateChangers";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Kosarica = () => {

  const notifyUspjesanNajam = () => toast.success("Brod uspješno iznajmljen!")
  const notifyNajamDatum = () => toast.warning("Datumi najma moraju biti određeni!")
  const navigate = useNavigate();

    const korisnikId = localStorage.getItem('userId');

    const [dateRange, setDateRange] = useState([null, null]); 
    const [zauzetOd, zauzetDo] = dateRange;

    const { slug1 } = useParams();
    const[brod, setBrod]=useState([]);

    const getBrod = {
        method:"GET",
        url: "https://ferit-boat-charter-backened-production.up.railway.app/brod/getBrodWithName",
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

    const getNajmovi = {
        method:"GET",
        url: "https://ferit-boat-charter-backened-production.up.railway.app/najam/getNajamWithBrodId",
        params:{brodId: brodId},
      }
    
      useEffect(() => {
      axios.request (getNajmovi).then((response) => {
        setNajmovi(response.data);
       }).catch((error) => {
        console.error(error);
      });
    }, [brodId]);   


    const [allUserNajam, setAllUserNajam] = useState();

    const dohvacanjeUserNajam = {
      method:"GET",
      url: "https://ferit-boat-charter-backened-production.up.railway.app/najam/getNajamWithUserId",
      params:{
          korisnikId: korisnikId
      }
    }
  
    useEffect(() => {
        axios.request (dohvacanjeUserNajam).then((response) => {
          setAllUserNajam(response.data)
    }).catch((error) => {
        console.error(error);
    })
    }, [])

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
    var date2 = new Date();
    var today = dateToNumber(Date());
    const datesExcludeSlobodanOd  = getDatesInbetween(new Date(date.getFullYear(), date.getMonth()-2, 1), compareDate1)
    const datesExcludeSlobodanDo = getDatesInbetween(compareDate2, date.setMonth(date.getMonth() + 6))
    const datesExludeBeforeToday = getDatesInbetween(compareDate1, new Date())

    const [finalExclude, setFinalExclude] = useState([]);

    var finalEx = [];
    finalEx = finalEx.concat(today);

        useEffect(() => {
          var tmp = [...datesExcludeSlobodanOd, ...datesExcludeSlobodanDo]
          var tmp2 = [...tmp, ...datesExludeBeforeToday]
            if(najmovi !== undefined){    
                for (let index = 0; index < najmovi.length; index++) {
                    var zauzetOdTemp = new Date(najmovi[index].zauzetOd)
                    var zauzetDoTemp = new Date(najmovi[index].zauzetDo)
                    var datesTmp = getDatesInbetween(zauzetOdTemp, zauzetDoTemp)
                    finalEx = finalEx.concat(datesTmp);
                }
            }

            if (allUserNajam !== undefined) {
              for (let index = 0; index < allUserNajam.length; index++) {
                var zauzetOdUserTemp = new Date(allUserNajam[index].zauzetOd)
                var zauzetDoUserTemp = new Date(allUserNajam[index].zauzetDo)
                var datesUserTmp = getDatesInbetween(zauzetOdUserTemp, zauzetDoUserTemp)
                finalEx = finalEx.concat(datesUserTmp);
              }
          }

          setFinalExclude([...finalEx, ...tmp2])
        }, [najmovi])


    function validateHandleSubmitNajam( ){
        if (zauzetOd == null) {
          notifyNajamDatum();
          return 0;
        }else if (zauzetDo == null) {
          notifyNajamDatum();
          return 0;
        }
    return 1;
    }

    const [cijena, setCijena] = useState(0)
    
    const handleSubmitNajam = (e) => {
        e.preventDefault();
        if(validateHandleSubmitNajam() == 1){
        const najam = {brodId, zauzetOd, zauzetDo, korisnikId, cijena}
        fetch("https://ferit-boat-charter-backened-production.up.railway.app/najam/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(najam) 
        }).then(()=>{
            notifyUspjesanNajam();
            navigate("/home")
        })
        }
      }

      useEffect(() => {
        var diffInMilliseconds = Math.abs(zauzetDo - zauzetOd);
        var diffInDays  = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        if (diffInDays == 0) {
          setCijena(brod.cijena)
        }else {
          setCijena(brod.cijena * diffInDays)
        }
      },[zauzetDo])


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
            </div>

            <div className="borderContainer" >
                <div className="borderLine" />
            </div>

            <h3 className="borderContainer"> Konačna cijena </h3>
            <h3 className="borderContainer">  {cijena} €</h3>

            <div className="borderContainer" >
                <div className="borderLine" />
            </div>

            <div className="postavljanjeDozvole" >
                <button className="postavljanjeSlikaBttn" onClick={handleSubmitNajam} >Plaćanje</button>
            </div>

        </div>
    </form>
    )

    
}

export default Kosarica;