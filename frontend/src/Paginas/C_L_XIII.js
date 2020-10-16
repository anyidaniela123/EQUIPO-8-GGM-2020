import React, { Component } from 'react'
import { Link } from "react-router-dom";
import re from "../Imagenes/flecha-hacia-atras.png"
import "./c_l_xiii.css"



function C_L_XIII () {
    return(
       <div>
          
           <h1>CLíNICA LEÓN XIII</h1>
           <h2>ESPECIALIDADES</h2>

           <li>Cirugia general</li>
           <li>Ortopedia</li>
           <li>Plastica</li>
           <li>Neurocirugia</li>
           <li>Hepatobiliopancreatica</li>
           <li>Torax</li>
           <li>Maxilofacial</li>
           <li>Otorrino</li>
           <li>Neurologia</li>
           <li>Medicina interna</li>
           <li>Psiquiatria</li>
           <li>Fisiatría</li>
           <li>Nutrición</li>


               <h2>ENTIDADES MEDICAS</h2>
            <li>Nueva EPS</li>
            <li>Coomeva</li>
            <li>Sura</li>
            <li>Pensionados de ferrocarril</li>
            <li>Savia salud</li>
          


            <Link to="/Clínicas"><img className= "c_l" src= {re} /></Link>

</div>
)
}
export default C_L_XIII;