import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//Pagina de principal
import Prueba from './componentes/encuesta/BodyEncuesta'; //pagina de prueba


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/prueba' component={Prueba}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
