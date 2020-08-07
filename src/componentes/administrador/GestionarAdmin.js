import React, { Component, Fragment } from 'react';


class GestionarAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            nombre: '',
            nacionalidad: '',
            direccion: '',
            telUno: '',
            telDos: '',
            contraseña: '',
            contraNueva: '',
            contreRepet: '',
        }
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
            <Fragment>
                <form className='needs-validation d-flex flex-wrap align-items-center justify-content-center' onSubmit={this.formResponse}>
                    <div className='container bordear d-flex flex-wrap px-2 py-2'>

                        <div className='bordear col-md-6 '>

                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.idUsuario}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='idUsuario' placeholder='Digite su identificación' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nombre}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='nombre' placeholder='Digite su nombre' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nacionalidad}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='nacionalidad' placeholder='nacionalidad' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.direccion}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='direccion' placeholder='Dirección de Residencia' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telUno}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='telUno' placeholder='1- Teléfono' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telDos}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='telDos' placeholder='2- Teléfono' required></input>
                            </div>

                        </div>
                        <div className='bordear col-md-6'>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.contraseña}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='contraseña' placeholder='Digite su contraseña' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.contraNueva}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='contraNueva' placeholder='Nueva Contraseña' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.contraRepet}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='contraRepet' placeholder='Repetir Contraseña' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='text-center' type='submit' value="Agregar Admin"></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='text-center' type='submit' value="Actualizar Admin"></input>
                            </div>
                            <div className='espacio centrar pt-3'>
                                <input className='text-center' type='submit' value="Eliminar Admin"></input>
                            </div>
                            <div className='espacio centrar pt-3'>
                                <input className='text-center' type='submit' value="¿Quieres registrarlo como cliente?"></input>
                            </div>
                            <div className='espacio centrar pt-3'>
                                <input className='text-center' type='submit' value="Quieres registrar una propiedad"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default GestionarAdmin;