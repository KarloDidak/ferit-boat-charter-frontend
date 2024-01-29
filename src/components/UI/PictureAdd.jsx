import React, {useEffect, useState} from "react";
import "../../styles/picadd.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default () => {

    const { slug } = useParams(); //IME KOJE PRIMAM
    const navigate = useNavigate();

    const notifyNoviBrod = () => toast.info("Dodan novi brod!")

   const[file, setFile] = useState("");
   const[slikaGled, setSlikaGled] = useState("");
{/*
const handleSubmitPic = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("image", file);
    console.log("Slika se krece dodavat...");
    fetch("http://localhost:8080/slika/add", {
            method:"POST",
            body: data,
        }).then(()=>{
            console.log("SLIKA DODANA")
        })
}
*/}

const handleSubmitPic = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("image", file);
    data.append("name", slug);
    console.log("Slika se krece dodavat...");
    fetch("http://localhost:8080/brod/addSlikaToBrod", {
            method:"POST",
            body: data,
        }).then(()=>{
            console.log("SLIKA DODANA")
        })
        notifyNoviBrod();
        navigate('/home');
}

const ime = "m3"

const dohvacanjeSlike = {
    method:"GET",
    url: "http://localhost:8080/slika/get",
    params:{
        name: ime
    }
  }

  useEffect(() => {
    axios.request (dohvacanjeSlike).then((response) => {
        setSlikaGled(response.data)
    }).catch((error) => {
      console.error(error);
    })
        // console.log(slikaGled);
    }, [])

function handleFileChange(e){
    if(e.target.files && e.target.files[0]) setFile(e.target.files[0]);
}

return(
    <>
  <form  className="postavljanjeSlika" onSubmit={handleSubmitPic} encType="multipart/form-data">
     <input className="odabiranjeSlikeBttn" type="file" name="file" onChange={handleFileChange} />
     <div>
        <img className="dohvacenaSlika" src={`data:image/jpeg;base64,${slikaGled}`} />
     </div>
      <button type="submit" className="postavljanjeSlikaBttn"> Submit</button>  
    </form>
    </>
)

}