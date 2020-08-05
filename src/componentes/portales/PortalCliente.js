import React, { Fragment, Component } from 'react';
import '../../estilos/BodyLanding.css';
import logo from '../../imagenes/logo.png';
import iconUser from '../../imagenes/iconusuario.png';

//componentes
import Usuarios from '../principal/Usuarios';

class PortalCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'usuarios',
            usuarios: ''
        }
        this.navPortal = this.navPortal.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
    }

    handleChangeLogin(event) {
        const target = event.target;
        const valor = target.value;
        const nombreCampo = target.name;

        this.setState({
            [nombreCampo]: valor
        });
    }

    navPortal(dato) {
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
                <header className='mx-0'>
                    {/* <Cabecera></Cabecera> */}
                    <div className='row '>
                        <div className='cabecera col-sm '>
                            <img src={logo} alt="logo" width='35%' />
                            <h2 className='pt-4 ml-3'>Los mejores alquileres a los mejores precios</h2>
                        </div>
                        <div className='d-flex flex-row-reverse align-items-end col-sm'>
                            {/* <a onClick={() => this.navPortal('contactos')}className='rutasPage mr-0 text-dark'>Contactos</a>
                            <a onClick={() => this.navPortal('destinos')} className=' rutasPage mx-3 text-dark'>Destinos</a>
                            <a onClick={() => this.navPortal('home')} className='rutasPage mx-3 text-dark'>Home</a> */}
                            <div className='espacio mb-3'>
                                <select className='bordear py-1 m-0 border-1 px-3' value={this.state.usuarios}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='usuarios' required >
                                    <option value="" disabled>Usuario</option>
                                    <option value="1">Administador</option>
                                    <option value="2">Propietario</option>
                                    <option value="3">Cliente</option>
                                </select >
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-1'>
                            <a onClick={() => this.navPortal('usuarios')} className='pb-3'><img src={iconUser} alt="logo" width='80%'></img></a>
                        </div>
                    </div>
                </header>
                <section className='mx-0'>
                    {/* {this.componente} */}
                    <nav className='mx-0'>

                    </nav>
                    <aside className='mx-0 '>
                        <Usuarios></Usuarios>
                        <Usuarios></Usuarios>
                    </aside>

                </section>
            </Fragment>
        );
    }
}

export default PortalCliente;