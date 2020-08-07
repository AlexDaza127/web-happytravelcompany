import React, { Component, Fragment } from 'react';
import '../../estilos/BodyLanding.css';
import '../../estilos/Reservas.css';
import iconFoto from '../../imagenes/foto.png'

class FormReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            nombre: '',
            nacionalidad: '',
            direccion: '',
            telUno: '',
            telDos: '',
            nPersonas: '',
            mascotas: '',
            fechaInicio: '',
            fechaFin: '',
            foto: ''

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
        alert(this.state.fechaFin + this.state.fechaInicio);

    }
    render() {
        return (
            <Fragment>
                <form className='needs-validation d-flex flex-wrap align-items-center justify-content-center' onSubmit={this.formResponse}>


                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.idUsuario}
                            onChange={this.handleChangeLogin} type="text"
                            name='idUsuario' placeholder='Documento de Identidad' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nombre}
                            onChange={this.handleChangeLogin} type="text"
                            name='nombre' placeholder='Nombre del títular' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nacionalidad}
                            onChange={this.handleChangeLogin} type="text"
                            name='nacionalidad' placeholder='Nacionalidad' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.direccion}
                            onChange={this.handleChangeLogin} type="text"
                            name='direccion' placeholder='Dirección de Residencia' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telUno}
                            onChange={this.handleChangeLogin} type="text"
                            name='telUno' placeholder='1- Telefono' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.telDos}
                            onChange={this.handleChangeLogin} type="text"
                            name='telDos' placeholder='1- Telefono'>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.nPersonas}
                            onChange={this.handleChangeLogin} type="text"
                            name='nPersonas' placeholder='Número de Personas' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <select className='bordear py-2 m-0 px-3 mx-3' value={this.state.mascotas}
                            onChange={this.handleChangeLogin} type="text"
                            name='mascotas' required >
                            <option>¿llevas mascotas?</option>
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select >
                    </div>
                    <div className='espacio centrar'>
                        <p className='parrafosLog'>Fecha Inicio: </p>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.fechaInicio}
                            onChange={this.handleChangeLogin} type="datetime-local"
                            name='fechaInicio' required>
                        </input>
                    </div>
                    <div className='espacio centrar'>
                        <p className='parrafosLog'>Fecha Fin: </p>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.fechaFin}
                            onChange={this.handleChangeLogin} type="datetime-local"
                            name='fechaFin' required>
                        </input>
                    </div>
                    <p className='parrafosLog pb-0 pt-2'>Subir Consignación</p>
                    <div className='espacio centrar' >
                        <input className='bordear m-0 border-1 px-5' type="file" id="myfile" name="foto" multiple
                            value={this.state.foto}
                            onChange={this.handleChangeLogin}></input><br></br>

                    </div>
                    <div className='col-sm-4 mx-4'>
                        <div className='espacio centrar pt-3'>
                            <input className='text-center' type='submit' value="Registrar Reserva"></input>
                        </div>
                    </div>
                    <div className='col-sm-4 mx-4'>
                        <div className='espacio centrar pt-3'>
                            <input className='text-center' type='submit' value="Actualizar Reserva"></input>
                        </div>
                    </div>

                </form>
            </Fragment>
        );
    }
}

export default FormReserva;