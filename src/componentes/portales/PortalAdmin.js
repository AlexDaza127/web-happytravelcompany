import React, {Fragment, Component } from 'react';
import '../../estilos/BodyLanding.css';
import logo from '../../imagenes/logo.png';
import iconUser from '../../imagenes/iconusuario.png';

class PortalAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:'usuarios'
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
            //this.componente = <Home/>
        }
        else if (this.state.show === 'destinos') {
            //this.componente = <Destinos />
        }
        else if (this.state.show === 'contactos') {
            //this.componente = <Contactos />
        }
        else if (this.state.show === 'usuarios') {
            //this.componente = <Usuarios />
        }
        return (
            
            <Fragment>
                <header>
                    {/* <Cabecera></Cabecera> */}
                    <div className='row'>
                        <div className='cabecera col-sm'>
                            <img src={logo} alt="logo" width='35%' />
                            <h2 className='pt-4 ml-3'>Los mejores alquileres a los mejores precios</h2>
                        </div>
                        <div className='d-flex flex-row-reverse align-items-end col-sm'>
                            <a onClick={() => this.navPortal('contactos')}className='rutasPage mr-0 text-dark'>Contactos</a>
                            <a onClick={() => this.navPortal('destinos')} className=' rutasPage mx-3 text-dark'>Destinos</a>
                            <a onClick={() => this.navPortal('home')} className='rutasPage mx-3 text-dark'>Home</a>
                        </div>
                        <div className='d-flex align-items-center col-1'>
                            <a onClick={() => this.navPortal('usuarios')} className='pb-3'><img src={iconUser} alt="logo" width='80%'></img></a>
                        </div>
                    </div>
                </header>
                <section className='mx-0'>
                        {/* {this.componente} */}
                </section>
            </Fragment>
        );
    }
}
 
export default PortalAdmin;