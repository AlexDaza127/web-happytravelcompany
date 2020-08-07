import React, { Fragment, Component } from 'react';
import DataTableComponent from '../funciones/DataTableComponent';
import { api } from '../../conexion/api';


class GestionarUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [{}],
            columnas: [
                {
                    text: 'ID',
                    dataField: 'idUsuario'
                },
                {
                    text: 'Nombre Cliente',
                    dataField: 'nombre'
                },
                {
                    text: 'Dirección',
                    dataField: 'direccion'
                },
                {
                    text: '1- Teléfono',
                    dataField: 'telUno'
                },
                {
                    text: '2- Teléfono',
                    dataField: 'telDos'
                },
                {
                    text: 'Nacionalidad',
                    dataField: 'nacionalidad'
                },
                {
                    text: 'detalles'
                }
            ]
        }
    }

    async componentDidMount() {
        //Una vez montado el componente se llaman los datos
        await this.traerDetallesEncuestas();
    }

    async traerDetallesEncuestas() {
        //Si entra un IdEncuesta vacío se retorne un objeto vacío
        if (this.props.idReserva === '') {
            return {}
        }

        try {
            //Se realiza la petición GET
            const datos = await api('GET', 'consultarReservas');

            //Si la petición fue exitosa guardar los datos de las encuestas con el método ..spread
            console.log('estado ======= ' + datos.estado)
            if (datos.estado) {
                const datosReservas = datos.data;
                this.setState({
                    datos: datosReservas
                });
            } else {
                alert('No fue posible traer datos de las reservas');
            }

        } catch (error) {
            alert('Error en servidor');
        }
    }


    render() {
        return (
            <Fragment>
                <div className='container'>
                    <DataTableComponent
                        columnas={this.state.columnas}
                        datos={this.state.datos}
                        idTabla="idReserva"
                    />
                </div>

            </Fragment>
        );
    }
}

export default GestionarUsuarios;