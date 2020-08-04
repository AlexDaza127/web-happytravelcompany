import React, { Component, Fragment } from 'react';
import Home from '../principal/Home';
import Destinos from '../principal/Destinos';
import Contactos from '../principal/Contactos';
import Usuarios from '../principal/Usuarios';

class BodyGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:'home'
        }
        this.navPortal = this.navPortal.bind(this);
    }

    navPortal(dato){
        this.setState({
                show: dato
        })
    }

    render() {
        if (this.state.show === 'home') {
            this.componente = <Home/>
        }
        else if (this.state.show === 'destinos') {
            this.componente = <Destinos />
        }
        else if (this.state.show === 'contactos') {
            this.componente = <Contactos />
        }
        else if (this.state.show === 'usuarios') {
            this.componente = <Usuarios />
        }
        return (
            <Fragment>
                {this.componente}
            </Fragment>
        );
    }
}

export default BodyGrid;