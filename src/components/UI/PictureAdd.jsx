import React, {useState} from "react";
import "../../styles/picadd.css";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default () => {

    const { slug } = useParams(); //IME KOJE PRIMAM
    const navigate = useNavigate();

    const notifyNoviBrod = () => toast.info("Dodan novi brod!")

   const[file, setFile] = useState("");

const handleSubmitPic = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("image", file);
    data.append("name", slug);
    console.log("Slika se krece dodavat...");
    fetch("http://ferit-boat-charter-backened-production.up.railway.app/brod/addSlikaToBrod", {
            method:"POST",
            body: data,
        }).then(()=>{
            console.log("SLIKA DODANA")
        })
        notifyNoviBrod();
        navigate('/home');
}

function handleFileChange(e){
    if(e.target.files && e.target.files[0]) setFile(e.target.files[0]);
}

return(
    <>
  <form  className="postavljanjeSlika" onSubmit={handleSubmitPic} encType="multipart/form-data">
     <input className="odabiranjeSlikeBttn" type="file" name="file" onChange={handleFileChange} />
      <button type="submit" className="postavljanjeSlikaBttn"> Submit</button>  
    </form>
    </>
)

}