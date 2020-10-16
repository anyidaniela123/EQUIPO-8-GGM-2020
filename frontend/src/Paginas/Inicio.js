import React, { Component } from 'react'
import { Link } from "react-router-dom";
import no from "../Imagenes/INICIO.gif"
import si from "../Imagenes/flecha-hacia-adelante.png"
import "./inicio.css"

function Inicio() {  
    return(
       <div>
           <img  src= {no} />
           <h1> GUÍA_SALUD </h1>
           <p>Es una aplicación que le permitira a las personas saber en que punto hospitalario lo pueden
         atender cuando tenga una emergencia y no se este movilizando de un lugar a otro sin reibir atención</p>
         <Link to="/Opciones"><img className= "inicio" src= {si} /></Link>

       </div>

)


}
export default Inicio;