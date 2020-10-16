import React, { Component } from 'react'
import { Link } from "react-router-dom";
import re from "../Imagenes/flecha-hacia-atras.png"
import ti from "../Imagenes/flecha-hacia-adelante.png"
import "./primeros auxilios.css"


function primeros_auxilios () {
    return(
       <div>
          
           <h1>PRIMEROS AUXILIOS</h1>
           <h2>En caso de ahogamiento por vía aérea obstruida.</h2>

           <li>Colocar el puño por encima del ombligo, sujetado por la mano libre
                mientras te encuentras atrás de la persona y realizar movimientos hacia arriba, haciendo presión.</li>

               <h2>En caso de ahogamiento por vía aérea desobstruida.</h2>

            <li>Es necesario realizar insuflación, en otras palabras, respiración boca a boca cada 5 segundos, hasta 
                que la persona logre respirar.</li>

               <h2>En caso de paro cardio pulmonar</h2>

            <li>Aplicar combinaciones de respiraciones y compresiones torácicas (RCP).</li>

            <h2>En caso de fracturas</h2>

            <li>Reducción e inmovilización. Básicamente consiste en restablecer la posición natural de los fragmentos 
                (Dependiendo del caso) acompañado de tablillas o férulas con la finalidad de mantener el hueso lesionado en
                  su posición mientras se espera tratamiento médico.</li>

                  <h2>En caso de hemorragia</h2>

                  <li>Cubierta de gasa, algodón u otro material esterilizado con presión se comprimen los vasos 
                      sanguíneos abierto y se protege la herida de contaminación adicional, cubriendo la misma 
                      con una ropa o pedazo de tela y haciendo presión.</li>

               
                     

        <Link to="/Urgencia"><img className= "pri" src= {re} /></Link>
        <img className= "pri" src= {ti} />
       </div>
)
}
export default primeros_auxilios;
