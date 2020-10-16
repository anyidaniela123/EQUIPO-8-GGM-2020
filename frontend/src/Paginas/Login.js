import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import logo from "../Imagenes/Logo.JPG"
function Login() {
  return (
    <form class="form-signin">
      
        <img src={logo} 
          alt=""
          width="300"
          height="300"/>
  
  <center>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
       
      </label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div><Link to="/Inicio">
      <button class="boton" type="submit">
        Inciar Sesión
      </button></Link>
      <button class="boton" type="submit">
        Registrarse
      </button></center>
      <p class="mt-5 mb-3 text-muted"></p>
    </form>
  );
}

export default Login;