import React, { Component } from 'react'
import { Link } from "react-router-dom";
import du from "../Imagenes/flecha-hacia-atras.png"
import "./información.css"




function Opciones() {
    return(
       <div>
        
        <Link to="/Ambulancias"><h1>AMBULANCIAS</h1></Link>

        <Link to="/Primeros auxilios"><h1>PRIMEROS AUXILIOS</h1></Link>


     
        <Link to="/Opciones"><img className= "in" src= {du} /></Link>
        
        

       </div>

)


}
export default Opciones;