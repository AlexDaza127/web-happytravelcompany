import React, { Component } from 'react';
import logo from '../../imagenes/logo.png';
import iconUser from '../../imagenes/iconusuario.png';
import '../../estilos/BodyLanding.css';

class Cabecera extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row'>
                <div className='cabecera col-sm'>
                    <img src={logo} alt="logo" width='35%' />
                    <h2 className='pt-4 ml-3'>Los mejores alquileres a los mejores precios</h2>
                </div>
                <div className='d-flex flex-row-reverse align-items-end col-sm'>
                    <a className='rutasPage mr-0 text-dark' href="/">Contactos</a>
                    <a className=' rutasPage mx-3 text-dark' href="/">Destinos</a>
                    <a className='rutasPage mx-3 text-dark' href="/">Home</a>
                </div>
                <div className='d-flex align-items-center col-1'>
                    <a className='pb-3' href="/"><img src={iconUser} alt="logo" width='80%'></img></a>
                </div>
            </div>
        );
    }
}

export default Cabecera;