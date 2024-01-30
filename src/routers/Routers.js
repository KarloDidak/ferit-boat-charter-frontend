import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BoatListing from "../pages/BoatListing";
import Contact from "../pages/Contact";
import BoatDetails from "../pages/BoatDetails";
import KakoUnajmitiPlovilo from "../pages/KakoUnajmitiPlovilo";
import ZakoniPlovidbeUHR from "../pages/ZakoniPlovidbeUHR";
import VrsteNajma from "../pages/VrsteNajma";
import LogRegSelect from "../pages/LogRegSelect";
import Register from "../pages/Register";

import Home from "../pages/Home";
import NewBoatForm from "../pages/NewBoatForm";
import PictureAdd from "../components/UI/PictureAdd";
import Kosarica from "../pages/Kosarica";
import ProtectedRoutersIznajmljivac from "./ProtectedRouteresIznajmljivac";
import ProtectedRoutersUnajmiteljAdmin from "./ProtectedRoutersUnajmiteljAdmin"; 
import PrijeKosarica from "../pages/PrijeKosarica";
import MojiNajmovi from "../pages/MojiNajmovi";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/boats" element={<BoatListing />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/boats/:slug1/:slug2" element={<BoatDetails />} />
            <Route path="/kako-unajmiti-plovilo" element={<KakoUnajmitiPlovilo />} />
            <Route path="/zakoni-plovidbe-u-hr" element={<ZakoniPlovidbeUHR />} />
            <Route path="/vrste-najma" element={<VrsteNajma />} />
            <Route path="/prijava" element={<LogRegSelect />} />
            <Route path="/registracija" element={<Register />} />
            
            <Route element={<ProtectedRoutersUnajmiteljAdmin />} >
                <Route path="/novi-brod-forma" element={<NewBoatForm/>} />
                <Route path="/dodajSliku/:slug" element={<PictureAdd />} />
            </Route>

            <Route element={<ProtectedRoutersIznajmljivac />} >
                <Route path="/kosarica/:slug1" element={<Kosarica />} />
                <Route path="/prijeKosarica/:slug1" element={<PrijeKosarica />} />
                <Route path="/mojiNajmovi" element={<MojiNajmovi/>} />
            </Route>
        </Routes>   
    );
};


export default Routers;