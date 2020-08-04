import React, { Component } from 'react';

//imagenes importadas
import cab1 from '../../imagenes/cabañas1.jpg';
import cab2 from '../../imagenes/cabañas2.jpg';
import cab3 from '../../imagenes/cabañas3.jpg';
import cas1 from '../../imagenes/casas1.jpg';
import cas2 from '../../imagenes/casas2.jpg';

import '../../estilos/BodyLanding.css';

class Conctactos extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row'>
                <div className='row'>
                    <div className='col-7'>
                        <img className='' src={cab3} alt="cabaña3" width='30%' />
                    </div>
                    <div className='col-5'>
                        <p className='parrafos p-3'>Viajes a los mejores lugares de Colombia, sea adentro a afuera de las ciudades mas hermosas.<br /><br />¡Precios a la medida!</p>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 d-flex'>

                        <img className='' src={cab2} alt="cabaña3" width='30%' />
                        <p className='parrafos p-3'>Viajes a los mejores lugares de Colombia, sea adentro a afuera de las ciudades mas hermosas.<br /><br />¡Precios a la medida!</p>

                    </div>
                    <div className='col-7'>
                        <div className='col-6'>
                            <img className='' src={cab1} alt="cabaña3" width='30%' />
                        </div>
                        <div className='col-6'>
                            <p className='parrafos p-3'>Viajes a los mejores lugares de Colombia, sea adentro a afuera de las ciudades mas hermosas.<br /><br />¡Precios a la medida!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conctactos;