import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import InmueblesScroll from '../cliente/InmueblesScroll';
import '../../estilos/Reservas.css';

class Modales extends Component {
    state = {
        abierto: false,
        show: ''
    }

    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto }
        );
    }

    render() {
        const modalStyles={
            position: "absolute",
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
          }

        return (
            <>
                <div className="pt-3 principal">
                    <div className="secundario">
                        <Button className='boton' onClick={this.abrirModal}>{this.props.name}</Button>
                    </div>
                </div>

                <Modal isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader  id='tamañoModalHeader'>
                        <p className='tituloModal'>{this.props.titulo}</p>
                    </ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>

                    <ModalFooter id='tamañoModalHeader'>
                        <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Modales;