import React, { Component } from 'react'
import { Link } from "react-router-dom";
import re from "../Imagenes/flecha-hacia-atras.png"
import "./ambulancia.css"


function Opciones() {
    return(
       <div>
          
           <h1>AMBULANCIAS</h1>
           <h2>Ambulancias no asistenciales</h2>
           <p>No estan acondicionadas para la asistencia sanitaria en ruta
           Ambulancias de Clase A1, o convencionales, destinadas al transporte de pacientes en camilla.
           Ambulancias de Clase A2, o de transporte colectivo, acondicionadas para el transporte conjunto de enfermos
           cuyo traslado no revista carácter de urgencia, ni estén aquejados de enfermedades infecto-contagiosas  </p>
           <h2>Ambulancias asistenciales</h2>
           <p>Acondicionadas para permitir asistencia técnico-sanitaria en ruta
           Ambulancias de Clase A2, o de transporte colectivo, acondicionadas para el transporte conjunto de enfermos 
           cuyo traslado no revista carácter de urgencia, ni estén aquejados de enfermedades infecto-contagiosas
           Ambulancias de Clase B, destinadas a proporcionar Soporte Vital Básico y atención sanitaria inicial.
           Ambulancias de Clase C, destinadas a proporcionar Soporte Vital Avanzado.</p>
           <h2></h2>

           <Link to="/Informacion"><img className="am"  src= {re} /></Link> 
       
        

       </div>

)


}
export default Opciones;