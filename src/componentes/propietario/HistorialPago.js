import React, { Component } from 'react';
import TablaReserva from '../cliente/TablaReservas'

class HistorialPago extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <TablaReserva></TablaReserva>
         );
    }
}
 
export default HistorialPago;