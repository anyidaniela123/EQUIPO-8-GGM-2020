import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inicio from "./Paginas/Inicio";
import Login from "./Paginas/Login";
import Opciones from "./Paginas/Opciones";
import Urgencia from "./Paginas/Urgencia";
import Informacion from "./Paginas/Informacion";
import Ambulancias from "./Paginas/Ambulancias";
import Primeros_auxilios from "./Paginas/primeros_auxilios";
import Clínicas from "./Paginas/Clinicas";
import C_S_C from "./Paginas/C_S_C";
import C_C from "./Paginas/C_C";
import C_L_XIII from "./Paginas/C_L_XIII";

function App() {
  return (
    <BrowserRouter>

      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Inicio" component={Inicio} />
      <Route exact path="/Opciones" component={Opciones} />
      <Route exact path="/Urgencia" component={Urgencia} />
      <Route exact path="/Informacion" component={Informacion} />
      <Route exact path="/Ambulancias" component={Ambulancias} />
      <Route exact path="/Primeros auxilio" component={Primeros_auxilios} />
      <Route exact path="/Clínicas" component={Clínicas} />
      <Route exact path="/C_S_C" component={C_S_C} />
      <Route exact path="/C_C" component={C_C} />
      <Route exact path="/C_L_XIII" component={C_L_XIII} />
      </Switch>

    </BrowserRouter>
    
    );
  }
  
  export default App;
