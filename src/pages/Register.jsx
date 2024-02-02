import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import "../styles/login-register.css"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const notifySucces = () => toast.success("Uspješno ste registrirani!")
const notifyIme = () => toast.error("Morate popuniti polje Ime i prezime")
const notifyMail= () => toast.error("Email mora biti odgovarajućeg formata!")
const notifySifra = () => toast.warning("Šifra mora biti duga bar 8 znakova.\n" +
                        "Imati bar 1 malo slovo\n, 1 veliko slovo,\n 1 broj\n i jedan specijalni znak\n.")
const notifyVrstaRacuna = () => toast.warning("Morate odabrati jednu vrstu računa")

export function validate(value) {
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})')

      var lowerCheck = false; 
      var upperCheck = false;
      var numberCheck = false; 
      var specialCheck = false; 
      var lengthCheck = false;

        if(lower.test(value)){
            console.log("Mala slova: DOBRA")
            lowerCheck = true
          }
          else{
            console.log("Mala slova: FALE")
          }

          if(upper.test(value)){
            console.log("Velika slova: DOBRA")
            upperCheck = true
          }
          else{
            console.log("Velika slova: FALE")
          }

          if(number.test(value)){
            console.log("Broj: DOBRA")
            numberCheck = true
          }
          else{
            console.log("Broj: FALE")
          }

          if(special.test(value)){
            console.log("Special znak: DOBRA")
            specialCheck = true
          }
          else{
            console.log("Special znak: FALI")
          }

          if(length.test(value)){
            console.log("Duzina: DOBRA")
            lengthCheck = true
          }
          else{
            console.log("Duzina: KRATKO")
          }

          if ((lowerCheck && upperCheck && numberCheck && specialCheck && lengthCheck) == false) {
            notifySifra();
            return false;
          }
          return true;
}

export function validateStatus(tempStatus){
    if(tempStatus == -1){
      notifyVrstaRacuna();
      return false;
    }else if (tempStatus == 1) {
      return true;
    }else if (tempStatus == 2) {
      return true;
    }
    return false;
}

export function validateMail(tempMail){
  var mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   

  if (tempMail.match(mailPattern)) {
    return true;
  }else{
    notifyMail();
    return false;
  }
}

export function validateImeiPrezime(tempImeiPrezime){
  if(tempImeiPrezime.length == 0){
    notifyIme();
    return false;
  }else{
    return true;
  }
}


const Register = (props) => {  
  
    const navigate = useNavigate();

    const [ime, setIme] = useState('');
    const [mail, setMail] = useState('');
    const [sifra, setSifra] = useState('');
    const[status, setStatus] = useState(-1);

    const [isSearchable] = useState(true);
    const[vrsteKorisnika, setVrsteKorisnika]=useState([])

    const[showPassword, setShowPassword] = useState(false)

    useEffect(()=>{
        fetch("http://ferit-boat-charter-backened-production.up.railway.app/vrsta-korisnika/getAll")
        .then(res=>res.json())
        .then((result)=>{
      
          let temp = result.map((d) => ({
            value: d.id,
            label: d.naziv
          })) 
          setVrsteKorisnika(temp);
        }
      )
      },[])


    const handleSubmit = () => {
      if(validateImeiPrezime(ime) == true){
      if(validateMail(mail)==true){
        if(validate(sifra) == true) {
          if(validateStatus(status) == true){
          const korisnik = {ime, mail, sifra, status}
          console.log(korisnik);
          fetch("http://ferit-boat-charter-backened-production.up.railway.app/korisnik/add",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(korisnik) 
          }).then(()=>{
              notifySucces();
              console.log("New KORISNIK added")
              navigate('/prijava')
          })
      }
    }
  }
  }
    }

    return(
      <div className='App' >
        <div className="auth-form-container"> 
        <h2 className="form-header" >Registracija</h2>
            <label className="log-reg-label" htmlFor="name" >Ime i prezime</label>
            <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} name="ime" id="name" placeholder="Vaše ime i prezime"></input>
            <label className="log-reg-label" htmlFor="email"> Email </label>
            <input value={mail} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Vaš email" id="mail" name="mail"/>
            <label className="log-reg-label" htmlFor="password"> Šifra </label>
            <input value={sifra} onChange={(e) => setSifra(e.target.value)} type={showPassword ? "text" : "password"} placeholder="*******" id="sifra" name="sifra"/>
            <label className="showpass"> Prikazi šifru 
                    <input
                        id="check"
                        type="checkbox"
                        value={showPassword}
                        onChange={()=> setShowPassword((prev) => !prev)}
                    />
                </label>
            <label className="log-reg-label" >Vrsta računa</label>

            <Select
                placeholder="Odaberi..."
                className="register-drop"
                isSearchable={isSearchable}
                onChange={(update) => {
                    setStatus(update.value);
                 }}                     
                 options={vrsteKorisnika}  
            />
            <button onClick={handleSubmit} > Registracija </button>
        
        <button className="link-btn" onClick={() => navigate('/prijava')} > Već imate račun ? Prijavite se </button>
        </div>
      </div>
    );
}

export default Register;