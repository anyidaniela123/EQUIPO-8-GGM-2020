import React, { Component } from 'react'
import { Link } from "react-router-dom";
import re from "../Imagenes/flecha-hacia-atras.png"
import "./c_s_c.css"



function C_S_C () {
    return(
       <div>
          
           <h1>CLÍNICA SAGRADO CORAZÓN</h1>
           <h2>ESPECIALIDADES</h2>

           <li>Cirugia general</li>
           <li>Urologia</li>
           <li>Ginecologia</li>
           <li>Hematologia</li>
           <li>Cirugia bascular</li>
           <li>Cirugia oncologica</li>
           <li>Neurologia</li>
           <li>Cirugia macitofacial</li>
           <li>Cirugia pediatrica</li>

               <h2>ENTIDADES MEDICAS</h2>
            <li>Salud total</li>
            <li>Sanitas</li>
            <li>Sura</li>
            <li>Coosalud</li>
            <li>Savia salud</li>
            <li>Copensar</li>
            <li>Soat</li>




           


            <Link to="/Clínicas"><img className="c_s" src= {re} /></Link>

</div>
)
}
export default C_S_C;
