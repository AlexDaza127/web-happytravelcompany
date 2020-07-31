import React, { Fragment, Component } from 'react';
import { api } from '../../conexion/api';


class BodyEncuesta extends Component {
    constructor(props) {
        super(props);
        this.state = { // inicializando states en el constructor
            objEncuesta: {}
        };
    }

    async componentDidUpdate(prevProps) {
        //Se comparan los props para identificar la actualización de los datos y no se vuelva un bucle infinito
        if (this.props.idEncuesta !== prevProps.idEncuesta) {
            this.traerDetallesEncuestas();
        }
    }

    async componentDidMount(){
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
            console.log('estado = ' + datos.estado);
            if (datos.estado) {
               // const datosEncuesta = datos.data.map();
                 const datosEncuesta = datos.data[0];
                this.setState({
                    objEncuesta: {
                        ...this.state.objEncuesta,
                        ...datosEncuesta
                    }
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
                <h1>Esta es una tabla con los datos de las encuestas</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>idEncuesta</th>
                            <td>
                                {this.state.objEncuesta.idEncuesta}
                            </td>
                        </tr>
                        <tr>
                            <th>Estrellas</th>
                            <td>
                                {this.state.objEncuesta.nEstrellas}
                            </td>
                        </tr>
                        <tr>
                            <th>Observaciones</th>
                            <td>
                                {this.state.objEncuesta.Observaciones}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default BodyEncuesta;