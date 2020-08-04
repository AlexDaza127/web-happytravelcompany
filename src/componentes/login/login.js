import React, { Component } from 'react';

//Estilos
import '../../estilos/BodyLanding.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        };
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

    }

    render() {
        return (
            <div className='centrar row mx-0'>
                <div className = 'centrar'>
                    <form className='centrar' onSubmit={this.formResponse}>
                        <p>¡Bienvenido a Viaje Feliz!<br /></p>
                        <p>Usuario</p>
                        <div className=''>
                            <input value={this.state.user}
                                onChange={this.handleChangeLogin} type='number'
                                name='user' placeholder='Digite su identificación'></input>
                        </div>
                        <p><br />Contraseña</p>
                        <div className=''>
                            <input value={this.state.pass}
                                onChange={this.handleChangeLogin} type='password'
                                name='pass' placeholder='Digite su contraseña'
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;