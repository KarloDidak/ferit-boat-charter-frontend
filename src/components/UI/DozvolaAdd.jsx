import React, {useState, useContext} from "react";
import "../../styles/picadd.css";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/postavljanje-dozvole.css";
import { MyContext } from "../../App";

const DozvolaAdd = () => {

    const userId = localStorage.getItem('userId');

    const navigate = useNavigate();
    const notifyNoviBrod = () => toast.info("Dodan novi brod!")

   const[file, setFile] = useState("");
   const[slikaGled, setSlikaGled] = useState("");


const handleSubmitDozvola = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("image", file);
    data.append("id", userId);
    console.log("Slika se krece dodavat...");
    fetch("http://localhost:8080/korisnik/addDozvola", {
            method:"POST",
            body: data,
        }).then(()=>{
            console.log("SLIKA DODANA")
        })
}

function handleFileChange(e){
    if(e.target.files && e.target.files[0]) setFile(e.target.files[0]);
}

return(
    <>
  <form className="postavljanjeDozvole" onSubmit={handleSubmitDozvola} encType="multipart/form-data">
     <input className="odabiranjeSlikeBttn" type="file" name="file" onChange={handleFileChange} />
      <button type="submit" className="postavljanjeSlikaBttn"> Submit</button>  
    </form>
    </>
)

}

export default DozvolaAdd;