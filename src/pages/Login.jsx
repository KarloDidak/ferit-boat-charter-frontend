import React, { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "../styles/login-register.css";
import axios from "axios";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { MyContext } from "../App";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const notifyUspjesno = () => toast.success("Uspješno ste prijavljeni!")
const notifyNePostojiKorisnik = () => toast.error("Korisnik ne postoji")
const notifyPogresnaPrijava = () => toast.error("Mail ili sifra nisu točni!")


export function validateNepotpunaPrijava(tempMail){
    var mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;       
    if (tempMail.match(mailPattern)) {
         return true;
      }else{
        notifyPogresnaPrijava();
        return false;
      }
  }

const Login = (props) => {    

    const[showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    const{
        email,
        setEmail,
        pass,
        setPass
    } = useContext(MyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateNepotpunaPrijava(email) == true) {
        if(pass.length > 0 ){
        axios.request (checkIfUserExist).then((response) => {
            if (response.data != -1) {
                localStorage.setItem('statusUser', JSON.stringify(response.data))
                StartgetUserId();
                notifyUspjesno();
            } else if (response.data == -1) { 
                notifyNePostojiKorisnik();
            }
            
          }).catch((error) => {
            console.error(error);
          })
            //window.location.reload()
            navigate("/home")
        }
        else { notifyNePostojiKorisnik()}
    }
    }

   const StartgetUserId = (e) => {
    axios.request (getUserId).then((response) => {
        localStorage.setItem('userId', response.data);
    }).catch((error) => {
        console.error(error);
      })
   }

    const getUserId = {
        method:"GET",
        url: "http://localhost:8080/korisnik/getUserId",
        headers:{
            'Access-Control-Allow-Origin': '*'
        },
        params:{
            email: email,
            pass: pass
        },
      }


    const checkIfUserExist = {
        method:"GET",
        url: "http://localhost:8080/korisnik/checkIfUserExistandGetUserStatus",
        headers:{
            'Access-Control-Allow-Origin': '*'
        },
        params:{
            email: email,
            pass: pass
        },
      }

    return(
        <div className="auth-form-container">
            <h2 className="form-header" >Prijava</h2>
            <form className="login-form" onSubmit={handleSubmit} >
                <label className="log-reg-label" htmlFor="email"> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Vaš email" id="email" name="email"/>
                <label className="log-reg-label" htmlFor="password"> Šifra </label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type={showPassword ? "text" : "password"} 
                    placeholder="*******" 
                    id="password" 
                    name="password"
                />
                <label className="showpass"> Prikazi šifru 
                    <input
                        id="check"
                        type="checkbox"
                        value={showPassword}
                        onChange={()=> setShowPassword((prev) => !prev)}
                    />
                </label>

                <button type="submit"> Prijavi se </button>
            </form>
            <button className="link-btn" onClick={() => navigate('/registracija')} > Nemate račun ? Registrirajte se </button>
        </div>
    )
}

export default Login;