import React, { Component, Fragment } from 'react';
import cab1 from '../../imagenes/cabañas1.jpg';
import cab2 from '../../imagenes/cabañas2.jpg';
import cab3 from '../../imagenes/cabañas3.jpg';
import cas1 from '../../imagenes/casas1.jpg';
import cas2 from '../../imagenes/casas2.jpg';
import '../../estilos/BodyLanding.css';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className='row mx-0'>
                    <div className='d-flex align-items-center col-5 '>
                        <img className='fotos' src={cab3} alt="cabaña3" width='90%' height='80%'/>
                    </div>
                    <div className='col-5 py-4'>
                        <div className='row'>
                            <img className='fotos' src={cab2} alt="cabaña2" width='50%' />
                            <img className='fotos' src={cas1} alt="casa1" width='50%' />
                        </div>
                        <div className='row '>
                            <img className='fotos' src={cab1} alt="cabaña1" width='50%' />
                            <img className='fotos' src={cas2} alt="casa2" width='50%' />
                        </div>
                    </div>
                    <div className='col-2 d-flex align-content-center justify-content-center'>
                        <p className='parrafos p-3'>Viajes a los mejores lugares de Colombia, sea adentro a afuera de las ciudades mas hermosas.<br/><br/>¡Precios a la medida!</p>
                        
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Home;