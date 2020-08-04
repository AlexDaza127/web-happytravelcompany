import React, { Component } from 'react';


//imagenes importadas
import cab from '../../imagenes/cab.jpg';
import cabMasc from '../../imagenes/cabañamascotas.jpg';
import cabFest from '../../imagenes/cabañasfestival.jpg';
import casFam from '../../imagenes/casasfamilia.jpg';
import casNiños from '../../imagenes/casasniños.jpg';
import cas from '../../imagenes/casasdest.jpg';

import '../../estilos/BodyLanding.css';


class Destinos extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row mx-0'>
                <div className='row mx-0 centrar'>
                        <img className='fotos' src={cab} alt="cabaña" width='80%' />
                        <img className='fotos' src={cabMasc} alt="cabaña con mascotas" width='50%' />
                        <img className='fotos' src={cabFest} alt="cabañas en festival" width='50%' />
                </div>
                <div className='row mx-0 centrar'>
                        <img className='fotos' src={casFam} alt="casas familiares" width='50%' />
                        <img className='fotos' src={casNiños} alt="casas con niños" width='50%' />
                        <img className='fotos' src={cas} alt="casas" width='80%' />
                </div>
            </div>
        );
    }
}

export default Destinos;