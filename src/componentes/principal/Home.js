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
                <div className='row mx-0 pt-4'>
                    <div className='row mx-0 centrar'>

                        <div className='contener'>
                            <div className='col-8'>
                                <img className='fotos' src={cab3} alt="cabaña3" width='100%' />
                                <div className='overlay'>
                                    <p className='text-light pt-5'>Bienvenido a Viaje Feliz</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className='col-4 col-sm'>
                            <p className=''>Viajes a los mejores lugares de Colombia, sea adentro o afuera de las ciudades mas hermosas.<br /><br />¡Precios a la medida!</p>
                        </div>
                    </div>

                    <div className='row mx-0'>
                        <div className='row mx-0' >
                            
                            <div className='col-6'>
                                <img className='fotos' src={cab2} alt="cabaña2" width='100%' />
                            </div>

                            <div className='col-6'>
                                <img className='fotos' src={cab1} alt="cabaña2" width='100%' />
                            </div>
                        </div>
                        <div className='row mx-0' >
                            <div className='col-6'>
                                <img className='fotos' src={cas1} alt="cabaña1" width='100%' />
                            </div>
                            <div className='col-6'>
                                <img className='fotos' src={cas2} alt="cabaña1" width='100%' />
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Home;