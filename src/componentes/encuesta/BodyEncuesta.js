import React, { Fragment, Component } from 'react';
import DataTableComponent from '../funciones/DataTableComponent';
import { api } from '../../conexion/api';


class BodyEncuesta extends Component {
    constructor(props) {
        super(props);
        this.state = { // inicializando states en el constructor
            datos: [{}],
            columnas: [
                {
                    text: 'ID',
                    dataField: 'idEncuesta'
                },
                {
                    text: 'Estrellas',
                    dataField: 'nEstrella'
                },
                {
                    text: 'Observaciones',
                    dataField: 'observaciones'
                }
            ]
        };
    }

    // async componentDidUpdate(prevProps) {
    //     //Se comparan los props para identificar la actualización de los datos y no se vuelva un bucle infinito
    //     if (this.props.idEncuesta !== prevProps.idEncuesta) {
    //         this.traerDetallesEncuestas();
    //     }
    // }

    //Función propia de React que se ejecuta una vez el método render monta el componente
    async componentDidMount() {
        //Una vez montado el componente se llaman los datos
        await this.traerDetallesEncuestas();
    }

    async traerDetallesEncuestas() {
        //Si entra un IdEncuesta vacío se retorne un objeto vacío
        if (this.props.idEncuesta === '') {
            return {}
        }

        try {
            //Se realiza la petición GET
            const datos = await api('GET', 'consultarEncuestas');

            //Si la petición fue exitosa guardar los datos de las encuestas con el método ..spread
            console.log('estado ======= ' + datos.estado)
            if (datos.estado) {
                const datosEncuesta = datos.data;
                this.setState({
                    datos: datosEncuesta
                });
            } else {
                alert('No fue posible traer datos de las encuestas');
            }

        } catch (error) {
            alert('Error en servidor');
        }
    }

    render() {
        return (
            <Fragment>
                <h4 align="center "> Tabla Encuestas</h4>
                <DataTableComponent
                    columnas={this.state.columnas}
                    datos={this.state.datos}
                    idTabla="idEncuesta"
                />

            </Fragment>
        );
    }
}

export default BodyEncuesta;