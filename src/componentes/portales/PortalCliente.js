import React, { Fragment, Component } from 'react';
//imagenes
import logo from '../../imagenes/logo.png';
import iconUser from '../../imagenes/iconusuario.png';

//Estilos
import '../../estilos/BodyLanding.css';
import '../../estilos/navLateral.css';

//componentes
import Reservas from '../cliente/Reservar';
import TablaReservas from '../cliente/TablaReservas';
import PerfilCliente from '../cliente/PerfilCliente';
import LoginPropietario from '../login/LoginPropietario'


class PortalCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'reservas',
            usuarios:'3'
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
        if (this.state.show === 'reservas') {
            this.componente = <Reservas/>
        }
        else if (this.state.show === 'historial') {
            this.componente = <TablaReservas/>
        }
        else if (this.state.show === 'perfil') {
            this.componente = <PerfilCliente />
        }
        else if (this.state.show === 'registrar') {
            this.componente = <LoginPropietario />
        }
        return (

            <Fragment>
                <header id="secCabecera" className='mx-0'>
                    {/* <Cabecera></Cabecera> */}
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
                            <li><a onClick={() => this.navPortal('reservas')} href="#"><i className='fas fa-hotel'></i>Reserva</a></li>
                            <li><a onClick={() => this.navPortal('historial')} href="#"><i className='fas fa-file-invoice-dollar'></i>Historial Pagos</a></li>
                            <li><a onClick={() => this.navPortal('perfil')} href="#"><i className='fas fa-user'></i>Perfil</a></li>
                            <li><a onClick={() => this.navPortal('registrar')} href="#"><i className='fas fa-home'></i>Registrar Inmueble</a></li>
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

export default PortalCliente;