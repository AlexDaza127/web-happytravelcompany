import React, { Fragment, Component } from 'react';
//imagenes
import logo from '../../imagenes/logo.png';
import iconUser from '../../imagenes/iconusuario.png';

//Estilos
import '../../estilos/BodyLanding.css';
import '../../estilos/navLateral.css';

//Componentes
import TablaRegistrarPago from '../administrador/TablaRegistrarPago';
import GestionarAdmin from '../administrador/GestionarAdmin';
import GestionarUsuarios from '../administrador/GestionarUsuarios';
import GestionarReservas from '../administrador/GestionarReservas';
import GestionarInmuebles from '../administrador/GestionarInmuebles';


class PortalAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'pago',
            usuarios: '1'
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
        if (this.state.show === 'pago') {
            this.componente = <TablaRegistrarPago />
        }
        else if (this.state.show === 'admin') {
            this.componente = <GestionarAdmin />
        }
        else if (this.state.show === 'usuarios') {
            this.componente = <GestionarUsuarios />
        }
        else if (this.state.show === 'reservas') {
            this.componente = <GestionarReservas />
        }
        else if (this.state.show === 'inmuebles') {
            this.componente = <GestionarInmuebles />
        }

        return (

            <Fragment>
                <header id="secCabecera" className='mx-0'>
                    <div className='row '>
                        <div className='cabecera col-sm '>
                            <img src={logo} alt="logo" width='35%' />
                            <h2 className='pt-4 ml-3'>Los mejores alquileres a los mejores precios</h2>
                        </div>
                        <div className='d-flex flex-row-reverse align-items-end col-sm'>
                            <div className='espacio mb-3'>
                                <select className='bordear py-1 m-0 border-1 px-3' value={this.state.usuarios}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='usuarios' required >
                                    <option>Usuario</option>
                                    <option value="1">Administador</option>
                                    <option value="2">Propietario</option>
                                    <option value="3">Cliente</option>
                                </select >
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-1'>
                            <a onClick={() => this.navPortal('usuarios')} className='pb-3' href="#"><img src={iconUser} alt="logo" width='80%'></img></a>
                        </div>
                    </div>
                </header>
                <section id="trazo" className='mx-0'>
                    <input type='checkbox' id="check"></input>
                    <label for='check'>
                        <i className='fas fa-bars' id="btn"></i>
                        <i className='fas fa-times' id="cancel"></i>
                    </label>
                    <div className=' sidebar'>
                        <header className='p-2 m-2 '></header>
                        <ul>
                            <li><a onClick={() => this.navPortal('pago')} href="#"><i className='fas fa-file-invoice-dollar'></i>Registrar Pagos</a></li>
                            <li><a onClick={() => this.navPortal('admin')} href="#"><i className='fas fa-user'></i>Gestionar Admin.</a></li>
                            <li><a onClick={() => this.navPortal('usuarios')} href="#"><i className='fas fa-users'></i>Gestionar Usuarios</a></li>
                            <li><a onClick={() => this.navPortal('reservas')} href="#"><i className='fas fa-bed'></i>Gestionar Reservas</a></li>
                            <li><a onClick={() => this.navPortal('inmuebles')} href="#"><i className='fas fa-laptop-house'></i>Gestionar Inmuebles</a></li>
                        </ul>
                    </div>
                    <section id="frontera">
                        {this.componente}
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default PortalAdmin;