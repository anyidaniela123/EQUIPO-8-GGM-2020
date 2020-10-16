import React, { Component } from 'react'
import { Link } from "react-router-dom";
import du from "../Imagenes/flecha-hacia-atras.png"
import "./clinicas.css"





function Clinicas() {
    return(
       <div>
        
        <Link to="/C_S_C"><li><h1>CLÍNICA SAGRADO CORAZON</h1></li></Link>

        <Link to="/C_C"><li><h1>CLÍNICA CONQUISTADORES</h1></li></Link>

        <Link to="/C_L_XIII"><li><h1>CLíNICA LEÓN XIII</h1></li></Link>

        <Link to="/"><li><h1>CLÍNICA MEDELLÍN</h1></li></Link>

        <Link to="/"><li><h1>CLÍNICA DIAGNOSTICA ESPECIALIZADA</h1></li></Link>

        <Link to="/"><li><h1>CLÍNICA SOMA</h1></li></Link>
          



           <Link to="/Opciones"><img className= "cli" src= {du} /></Link>
      
        

       </div>

)


}
export default Clinicas;