import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//Pagina de principal
import landing from './componentes/principal/BodyLanding'; //pagina de prueba


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={landing}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
