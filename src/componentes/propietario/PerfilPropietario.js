import React, { Component, Fragment } from 'react';

//componentes
import PerfilCliente from '../cliente/PerfilCliente';

//imagenes
import '../../estilos/BodyLanding.css';
import '../../estilos/Reservas.css';


class PerfilPropietario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: '',
            barrio: '',
            tipo: '',
            mascotas: '',
            ventilacion: '',
            descripcion: '',
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
                
                <PerfilCliente></PerfilCliente>
                <form className='needs-validation d-flex flex-wrap align-items-center justify-content-center' onSubmit={this.formResponse}>
                <p>Datos de la Propiedad</p>
                    <div className='container bordear d-flex flex-wrap px-2 py-2'>
                        <div className='bordear col-md-6 '>

                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.ciudad}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='ciudad' placeholder='Ciudad' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.barrio}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='barrio' placeholder='Barrio' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.tipo}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='tipo' placeholder='Tipo de Inmueble' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.mascotas}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='mascotas' placeholder='¿Accepta Mascotas?' required></input>
                            </div>
                            <div className='espacio centrar'>
                                <input className='bordear py-2 m-0 border-1 px-5' value={this.state.ventilacion}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='ventilacion' placeholder='Tipo de Ventilación' required></input>
                            </div>

                        </div>
                        <div className='bordear col-md-6'>
                            <div className='espacio'>
                                <textarea className='bordear py-2 m-0 border-1 px-5' value={this.state.descripcion}
                                    onChange={this.handleChangeLogin} type="text"
                                    name='descripcion'
                                    placeholder='Descripción de la Ubicación' maxlength="300" rows='6' required required></textarea>
                            </div>

                            <div className='espacioPerfil espacio centrar'>
                                <input className='text-center' type='submit' value="Actualizar Propiedad"></input>
                            </div>
                            <div className='espacio centrar pt-3'>
                                <input className='text-center' type='submit' value="Eliminar Propiedad"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>

        );
    }
}

export default PerfilPropietario;