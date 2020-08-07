import React, { Component } from 'react';
import '../../estilos/BodyLanding.css';
import '../../estilos/Reservas.css';
import { api } from '../../conexion/api';


class ReservarInmueble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            observaciones: []
        }
    }

    async componentDidMount() {
        //Una vez montado el componente se llaman los datos
        await this.traerObservacionesCliente();
    }


    async traerObservacionesCliente() {
        //Si entra un IdEncuesta vacío se retorne un objeto vacío
        if (this.props.idInmueble === '') {
            return {}
        }

        try {
            //Se realiza la petición GET
            const datos = await api('GET', 'cliente/observaciones');
            //Si la petición fue exitosa guardar los datos de las encuestas con el método ..spread
            console.log(datos.estado)
            if (datos.estado) {
                const datosObservaciones = datos.data;
                this.setState({
                    observaciones: datosObservaciones
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
            <div className='bordear'>
                <p>Opiniones de los clientes</p>
                {this.state.observaciones.map(observaciones => {
                    return <h4>{observaciones.observaciones}</h4>
                })}
                 
            </div>

        );
    }
}

export default ReservarInmueble;