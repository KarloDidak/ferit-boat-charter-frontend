import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BrisanjeBroda = (ime) => { 

  const navigate = useNavigate();
  const notifyBrisanjeBroda = () => toast.warning("Izbrisan brod!")

  const deleteBrod = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("name", ime.ime);
    console.log("Slika se krece brisat...");
    fetch("http://ferit-boat-charter-backened-production.up.railway.app/brod/deleteBrod", {
            method:"POST",
            body: data,
        }).then(()=>{
            console.log("SLIKA IZBRISANA")
        })
        notifyBrisanjeBroda();
        console.log(ime.ime)
        navigate('/home');
}

  return(
   
   <Link>
      <button className="contact-button2" onClick={deleteBrod}>IZBRISI BRODICU</button>
    </Link>
    )

}


export default BrisanjeBroda;
