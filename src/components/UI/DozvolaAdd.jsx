import React, {useState, useEffect} from "react";
import "../../styles/picadd.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/postavljanje-dozvole.css";
import axios from "axios";

const DozvolaAdd = (ime) => {

    const userId = localStorage.getItem('userId');

    const navigate = useNavigate();
    const nemaDozvole = () => toast.warning("Morate postaviti sliku dozvole!")

   const[file, setFile] = useState("");

    const[korisnikPostojecaDozvola, setKorisnikPostojecaDozvola] = useState("");

    const dohvacanjePostojeceDozvole = {
        method:"GET",
        url: "https://ferit-boat-charter-backened-production.up.railway.app/korisnik/provjeraDozvoleKorisnika",
        params:{
            id: userId
        }
      }
    
    useEffect(() => {
        axios.request (dohvacanjePostojeceDozvole).then((response) => {
            setKorisnikPostojecaDozvola(response.data)
    }).catch((error) => {
        console.error(error);
    })
    }, [])

    

const handleSubmitDozvola = (e) => {
    e.preventDefault()
    if (file.length != 0 && korisnikPostojecaDozvola == false){ 
    const data = new FormData();
    data.append("image", file);
    data.append("id", userId);
    fetch("https://ferit-boat-charter-backened-production.up.railway.app/korisnik/addDozvola", {
            method:"POST",
            body: data,
        }).then(()=>{
            navigate(`/kosarica/${ime.ime}`)
        })
    }else if (korisnikPostojecaDozvola == true) {
        navigate(`/kosarica/${ime.ime}`)   
    }else{
        nemaDozvole();
    }
}

function handleFileChange(e){
    if(e.target.files && e.target.files[0]) setFile(e.target.files[0]);
}

    return(
        <>
        <div className="dozvolaAddText" >
            {korisnikPostojecaDozvola ? 
            <>
            <h4 className="dozvolaTextHeader" > Već imamo vašu dozvolu. Ako želite postaviti drugu, možete. <br/> <br/> Inaće kliknite tipku DALJE. </h4>
            </>
            : <h3 className="dozvolaTextHeader"> Postavite sliku svoje dozvole za upravljanje brodom. <br/> <br/> Odabrali ste brod bez posade. </h3>
            }
        </div>
    <form className="postavljanjeDozvole" onSubmit={handleSubmitDozvola} encType="multipart/form-data">
        <input className="odabiranjeSlikeBttn" id="dozvolaInput" type="file" name="file" onChange={handleFileChange} />
        <button type="submit" className="postavljanjeSlikaBttn"> DALJE</button>  
    </form>
        </>
    )

}

export default DozvolaAdd;