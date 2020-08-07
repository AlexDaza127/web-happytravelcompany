import React, { Fragment, Component } from 'react';
import '../../estilos/BodyLanding.css';
import '../../estilos/Reservas.css';

//componentes
import InmueblesScroll from './InmueblesScroll';


class Reservar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoInm: '',
            precio: '',
            mascotas: '',
            estrellas: '',
            baños: '',
            ventilacion: '',
            personas: '',
            Habitaciones: ''
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


    render() {
        return (
            <Fragment>
                <div id="lineSelect" className='container bordear'>
                    <div className='espacio '>
                        <select className='bordear py-2 m-0 px-3' value={this.state.tipoInm}
                            onChange={this.handleChangeLogin} type="text"
                            name='tipoInm' required >
                            <option>Tipo de Inmueble</option>
                            <option value="1">Casa</option>
                            <option value="2">Cabaña</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.precio}
                            onChange={this.handleChangeLogin} type="text"
                            name='precio' required >
                            <option>Precio desde</option>
                            <option value="50000">50.000</option>
                            <option value="100000">100.000</option>
                            <option value="150000">150.000</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.mascotas}
                            onChange={this.handleChangeLogin} type="text"
                            name='mascotas' required >
                            <option>¿llevas mascotas?</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.estrellas}
                            onChange={this.handleChangeLogin} type="text"
                            name='estrellas' required >
                            <option>Estrellas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.baños}
                            onChange={this.handleChangeLogin}
                            name='baños' required >
                            <option>Cant. Baños</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">más de 5</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.ventilacion}
                            onChange={this.handleChangeLogin} type="text"
                            name='ventilacion' required >
                            <option>Tipo de ventilación</option>
                            <option value="1">Calefacción</option>
                            <option value="2">Aire Acondicionado</option>
                            <option value="3">Ninguno</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.personas}
                            onChange={this.handleChangeLogin} type="text"
                            name='personas' required >
                            <option>Cant. Personas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">más de 5</option>
                        </select >
                    </div>
                    <div className='espacio'>
                        <select className='bordear py-2 m-0 px-3' value={this.state.Habitaciones}
                            onChange={this.handleChangeLogin} type="text"
                            name='Habitaciones' required >
                            <option>Cant. Habitaciones</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">más de 5</option>
                        </select >
                    </div>
                </div>
                <div>
                    <InmueblesScroll
                        tipoInm={this.state.tipoInm}
                        precio={this.state.precio}
                        mascotas={this.state.mascotas}
                        estrellas={this.state.estrellas}
                        baños={this.state.baños}
                        ventilacion={this.state.ventilacion}
                        personas={this.state.personas}
                        Habitaciones={this.state.Habitaciones}
                    ></InmueblesScroll>
                </div>
            </Fragment>
        );
    }
}

export default Reservar;