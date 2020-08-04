import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//Pagina de principal
import Prueba from './componentes/encuesta/BodyEncuesta'; //pagina de prueba
import landing from './componentes/principal/BodyLanding'; //pagina de prueba


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/prueba' component={Prueba}/> 
        <Route exact path='/' component={landing}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
