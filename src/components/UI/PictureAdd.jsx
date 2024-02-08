import React, {useState} from "react";
import "../../styles/picadd.css";
import { toast } from "react-toastify";

export default ({onFinish}) => {

    const notifyFaliSlika = () => toast.warning("Morate postaviti sliku!")
    
    const[file, setFile] = useState("");

    function handleFileChange(e){
        if(e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

   const handleSubmitPic = (e) => {
    e.preventDefault()
    if (file.length != 0){ 
        onFinish(file)
     } else{
        notifyFaliSlika();
     }
    }   

return(
    <>
    <h1 className="headerPicAdd" >Dodaj sliku broda</h1>
  <form  className="postavljanjeSlika" onSubmit={handleSubmitPic} encType="multipart/form-data">
     <input className="odabiranjeSlikeBttn" type="file" name="file" onChange={handleFileChange} />
      <button type="submit" className="postavljanjeSlikaBttn"> Postavi</button>  
    </form>
    </>
)

}