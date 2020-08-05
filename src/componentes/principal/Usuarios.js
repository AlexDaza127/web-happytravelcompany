import React, { Component } from 'react';

//componentes 
import Login from '../login/Login';
import Registro from '../login/LoginRegistro'
import Propietario from '../login/LoginPropietario';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: 'registro'
         }
    }

    navPortal(dato){
        this.setState({
                show: dato
        })
    }

    render() { 

        if (this.state.show === 'login') {
            this.componente = <Login/>
        }
        else if (this.state.show === 'registro') {
            this.componente = <Registro />
        }
        else if (this.state.show === 'propietario') {
            this.componente = <Propietario />
        }

        return ( 
            <div >
                {this.componente}
            </div>
         );
    }
}
 
export default Usuarios;