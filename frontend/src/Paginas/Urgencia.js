import React, { Component } from 'react'
import { Link } from "react-router-dom";
import du from "../Imagenes/icons-send.png"
import re from "../Imagenes/flecha-hacia-atras.png"
import "./urgencia.css"




function Opciones() {
    return(
       <div>
         
           <h1>URGENCIAS</h1>
          
   <li>NOMBRE COMPLETO</li>

  <li>SEGURO MEDICO</li> 
  <li>NUMERO DE IDENTIFICACION</li>
  <li>TIPO DE EMERGENCIA</li>
  <li>NOMBRE DEL ACOMPAÑANTE</li>
  <li>UBICACION</li>


  <Link to="/Opciones"><img className= "u"  src= {re} /></Link>
  <img className= "opciones" src= {du} />
       
        

       </div>

)


}
export default Opciones;