import React, { Component } from 'react'
import { Link } from "react-router-dom";
import da from "../Imagenes/Logo.JPG"
import di from "../Imagenes/icons -contact.png"
import re from "../Imagenes/icons-location.png"
import ti from "../Imagenes/icons-hospital.png"
import "./opciones.css"


function Opciones() {
    return(
       <div>
           <img className= "op" src= {da} />

            <Link to="/Urgencia"><h1>URGENCIAS</h1></Link>

            <Link to="/Informacion"><h1>INFORMACIÓN</h1></Link>

            <Link to="/Clínicas"><img className= "opciones" src= {ti} /></Link>
        
            <Link to="/"><img className= "opciones" src= {re} /></Link>

            <Link to="/Contactenos"><img className= "opciones" src= {di} /></Link>

       
        

       </div>

)


}
export default Opciones;