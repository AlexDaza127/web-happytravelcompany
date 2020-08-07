import React, { Component } from 'react';
import cab3 from '../../imagenes/cabañas3.jpg';
import DataTableComponent from '../funciones/DataTableComponent';
import cab2 from '../../imagenes/cabañas2.jpg';
import { api } from '../../conexion/api';
import '../../estilos/BodyLanding.css';
import '../../estilos/Reservas.css';
import ReservaInmueble from './ReservarInmueble'
import FormReserva from './FormReserva'
import Modales from '../funciones/Modales';

class InmueblesScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: '',
            inmuebles: []
        };
    }
    async componentDidMount() {
        //Una vez montado el componente se llaman los datos
        await this.traerReservasCliente();
    }
    navPortal(dato) {
        this.setState({
            show: dato
        })
    }

    async traerReservasCliente() {
        //Si entra un IdEncuesta vacío se retorne un objeto vacío
        if (this.props.idInmueble === '') {
            return {}
        }

        try {
            //Se realiza la petición GET
            const datos = await api('GET', 'cliente/reserinm');
            //Si la petición fue exitosa guardar los datos de las encuestas con el método ..spread
            
            if (datos.estado) {
                const datosReservas = datos.data;
                this.setState({
                    inmuebles: datosReservas
                });
            } else {
                alert('No fue posible traer datos de las encuestas');
            }

        } catch (error) {
            alert('Error en servidor');
        }
    }


    render() {
        if (this.state.show === 'vermas') {
            this.componente = <ReservaInmueble id='' />
        } else if (this.state.show === 'modalReser') {
        }
        // const { tipoInm,
        //     precio,
        //     mascotas,
        //     estrellas,
        //     baños,
        //     ventilacion,
        //     personas,
        //     Habitaciones } = this.props;


        return (
            <div >
                {this.state.inmuebles.map(inmuebles => {
                    return (
                        <div className='container bordear d-flex flex-wrap px-1 py-1'>

                            <div className='col-4 p-0 bordear'>
                                <img className=' d-flex fotos' src={cab3} alt="cabaña2" width='100%' />
                                <Modales name="¡Reservala Ya!" titulo='Registra tu reserva aquí'>
                                    <FormReserva></FormReserva>
                                </Modales>
                            </div>
                            <div className='container col-8 bordear d-flex flex-wrap'>
                                <div className=' col-md'>
                                <h3>Id. del Inmueble: </h3>
                                <h4>{inmuebles.idInmueble}</h4>
                                <h3>Precio: </h3>
                                <h4>{inmuebles.precioMin}</h4>
                                <h3>Habitaciones: </h3>
                                <h4>{inmuebles.nHabitaciones}</h4>
                                <h3>Baños: </h3>
                                <h4>{inmuebles.nBaños}</h4>
                                <h3>Cant. Personas: </h3>
                                <h4>{inmuebles.nPersonas}</h4>
                                </div>
                                <div className='col-md'>
                                <h3>Estrellas: </h3>
                                <h4>{inmuebles.nEstrella}</h4>
                                <h3>Mascotas: </h3>
                                <h4>{inmuebles.mascotas}</h4>
                                <h3>Ventilacion: </h3>
                                <h4>{inmuebles.tipo}</h4>
                                <h3>Tipo de Inmueble: </h3>
                                <h4>{inmuebles.nombre}</h4>
                                </div>
                            </div>
                            <div className='col-12 bordear py-0 px-0'>
                                <button onClick={() => this.navPortal('vermas')} className='rutasPage mx-3 text-dark'>Ver más</button>
                                {this.componente}
                            </div>
                        </div>)
                })}



            </div>
        );
    }
}

export default InmueblesScroll;