import React, { Component } from 'react';

//Estilos
import '../../estilos/BodyLanding.css';

//componentes
import Login from '../login/Login';


class LoginRegistro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            nombre: '',
            dir: '',
            nacionalidad: '',
            telUno: '',
            telDos: ''
        };
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

    formResponse = async (e) => {
        e.preventDefault();
        alert(this.state.user + this.state.pass);

    }
    render() {
        return (
            <form className='needs-validation d-flex flex-wrap align-items-center justify-content-center' onSubmit={this.formResponse}>
                <div className='bordear col-sm-4 mx-2 px-2'>
                    <p className='centrar'>¡Bienvenido a Viaje Feliz!<br /></p>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.user}
                            onChange={this.handleChangeLogin} type="text"
                            name='user' placeholder='Digite su identificación' autoFocus required ></input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.pass}
                            onChange={this.handleChangeLogin} type='password'
                            name='pass' placeholder='Digite su contraseña' required></input>
                    </div>

                    <div className='espacio centrar pt-3 mt-5'>
                        <input className='' type='submit' value="Registrar como Cliente"></input>
                    </div>
                </div>
                <div className='bordear col-sm-7 row px-1 mx-1 d-flex flex-wrap align-items-center justify-content-center'>
                    <div className='col-sm-5 mx-5'>
                        <div className='espacio centrar'>
                            <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nombre}
                                onChange={this.handleChangeLogin} type="text"
                                name='nombre' placeholder='Digite su nombre' required></input>
                        </div>
                        <div className='espacio centrar'>
                            <input className='bordear py-2 m-0 border-1 px-5' value={this.state.dir}
                                onChange={this.handleChangeLogin} type="text"
                                name='dir' placeholder='Digite su dirección' required></input>
                        </div>
                        <div className='espacio centrar'>
                            <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nacionalidad}
                                onChange={this.handleChangeLogin} type="text"
                                name='nacionalidad' placeholder='Digite su nacionalidad' required></input>
                        </div>
                        <div className='espacio centrar'>
                            <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telUno}
                                onChange={this.handleChangeLogin} type="tel"
                                name='telUno' placeholder='Digite su 1- Teléfono' required></input>
                        </div>
                        <div className='espacio centrar'>
                            <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telDos}
                                onChange={this.handleChangeLogin} type="tel"
                                name='telDos' placeholder='Digite su 2- Teléfono'></input>
                        </div>
                    </div>
                    <div className='col-sm-4 mx-4'>
                        <p className='parrafosLog'>Si tienes una propiedad y quieres ganar dinero alquilándola
                            <br /> <br />¡Regístrala gratis!
                            <br /></p>
                        <div className='espacio centrar pt-3'>
                            <input className='text-center' type='submit' value="Registrar como Propietario"></input>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginRegistro;