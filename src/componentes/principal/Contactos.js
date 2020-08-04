import React, { Component } from 'react';

//imagenes importadas
import ofi from '../../imagenes/ofi.jpeg';
import reg from '../../imagenes/reg.jpg';
import famfeliz from '../../imagenes/famfeliz.jpg';

import '../../estilos/BodyLanding.css';

class Conctactos extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row mx-0'>
                <div className='row mx-0 centrar'>
                    <div className='col-6'>
                        <img className='fotos' src={ofi} alt="oficinas viaje feliz" width='100%' />
                    </div>
                    <div className='col-6'>
                        <p className=''>¿Quieres conocer mas sobre nuestros servicio? <br />Contáctanos
                        <br /> Contactos: 3139876543<br />Dirección: Kr 45 # 65 - 78</p>
                    </div>
                </div>
                <div className='row mx-0 centrar'>
                    <div className='col-6' >
                        <p className='centrar'>Viajes a los mejores lugares de Colombia</p>
                    </div>
                    <div className='col-6' >
                        <img className='fotos' src={reg} alt="regiones viaje feliz" width='100%' />
                    </div>
                    <div className='col-6' >
                        <img className='fotos' src={famfeliz} alt="familias felices" width='100%' />
                    </div>
                    <div className='col-6' >
                        <p className='centrar'>Regístrate gratis y conoce mas sobre los inmuebles que ofrecemos</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conctactos;