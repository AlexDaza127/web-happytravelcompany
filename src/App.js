import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//Pagina de principal
import landing from './componentes/principal/BodyLanding'; //pagina de prueba
import cliente from './componentes/portales/PortalCliente'; //pagina de prueba
import propietario from './componentes/portales/PortalPropietario'; //pagina de prueba
import admin from './componentes/portales/PortalAdmin'; //pagina de prueba
import registro from './componentes/login/LoginRegistro'; //pagina de prueba


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={landing} />
          <Route exact path='/cliente' component={cliente} />
          <Route exact path='/propietario' component={propietario} />
          <Route exact path='/admin' component={admin} />
          <Route exact path='/registro' component={registro} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
