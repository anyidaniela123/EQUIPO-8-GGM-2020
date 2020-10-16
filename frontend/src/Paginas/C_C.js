import React, { Component } from 'react'
import { Link } from "react-router-dom";
import re from "../Imagenes/flecha-hacia-atras.png"
import "./c_c.css"



function C_C () {
    return(
       <div>
          
           <h1>CLÍNICA CONQUISTADORES</h1>
           <h2>ESPECIALIDADES</h2>

           <li>Ortopedia</li>
           <li>Ginecologia</li>
           <li>Honcologia</li>
           <li>Deportologia</li>
           <li>Otorrino</li>
           <li>Urologia</li>
           <li>Psicologia</li>
           <li>Nutrición</li>
           <li>Pediatria</li>
           <li>Dermatologia</li>
           <li>Medico de familia</li>


               <h2>ENTIDADES MEDICAS</h2>
            <li>Nueva EPS</li>
            <li>Coomeva</li>
            <li>Sura</li>
            <li>Pensionados de ferrocarril</li>
            <li>Savia salud</li>
          


            <Link to="/Clínicas"><img className= "c_c"  src= {re} /></Link>

</div>
)
}
export default C_C;