import React, { Component } from 'react';

//Estilos
import '../../estilos/BodyLanding.css';

//componentes
import LoginRegistro from '../login/LoginRegistro';



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
        alert(this.state.user + this.state.pass);
        
    }

    render() {
        
        return (
            <div className='h-min-100vh d-flex flex-wrap align-items-center justify-content-center'>
                    <form className='bordear needs-validation' onSubmit={this.formResponse}>
                        <p className='centrar'>¡Bienvenido a Viaje Feliz!<br /></p>
                        <div className='espacio centrar'>
                            <input className='bordear p-2 m-0 border-1' value={this.state.user}
                                onChange={this.handleChangeLogin} type="text"
                                name='user' placeholder='Digite su identificación' autoFocus required ></input>
                        </div>
                        <div className='espacio centrar'>
                            <input className='bordear p-2 m-0 border-1' value={this.state.pass}
                                onChange={this.handleChangeLogin} type='password'
                                name='pass' placeholder='Digite su contraseña' required></input>
                        </div>
                        <div className='espacio centrar pt-3'>
                            <input className='' type='submit' value="Acceder"></input>
                        </div>
                        <p className='parrafosLog espacio centrar pt-3'>¿No estas Registrado?</p>
                        <a href='/registro'>Regístrate</a>
                    </form>
            </div>
        );
    }
}

export default Login;