import React, { Component } from 'react';
import iconFoto from '../../imagenes/foto.png'


class LoginPropietario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dirInm: '',
            preMin: '',
            desc: '',
            ciudad: '',
            barrio: '',
            tipoInm: '',
            mascotas: '',
            venti: '',
            foto: []
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
        alert(this.state.dirInm + "  " +
            this.state.preMin + "  " +
            this.state.desc + "  " +
            this.state.ciudad + "  " +
            this.state.barrio + "  " +
            this.state.tipoInm + "  " +
            this.state.mascotas + "  " +
            this.state.venti + "  " +
            this.state.foto);

    }

    render() {
        return (
            <form className='bordear row ml-4 mx-0 p-5 needs-validation d-flex flex-wrap align-items-center justify-content-center' onSubmit={this.formResponse}>
                <div className=' col-sm-4'>

                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.dirInm}
                            onChange={this.handleChangeLogin} type="text"
                            name='dirInm' placeholder='Direccion del Inmueble' autoFocus required ></input>
                    </div>

                    <div className='espacio centrar'>
                        <p className='parrafosLog'>Precio Mínimo (por día):</p>
                        <input className='bordear py-2 m-0 border-1 ml-2 px-5' value={this.state.preMin}
                            onChange={this.handleChangeLogin} type="number" min="50000" max="500000"
                            name='preMin' placeholder='precio' required ></input>
                    </div>

                    <div className='espacio centrar'>
                        <textarea className='bordear text-left py-2 m-0 border-1 px-5' value={this.state.desc}
                            onChange={this.handleChangeLogin} rows='6'
                            name='desc' placeholder='Descripción de la Ubicación' maxlength="300" required ></textarea>
                    </div>

                </div>
                <div className=' col-sm-4'>

                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.ciudad}
                            onChange={this.handleChangeLogin} type="text"
                            name='ciudad' placeholder='Ciudad' required ></input>
                    </div>

                    <div className='espacio centrar'>
                        <input className='bordear py-2 m-0 border-1 px-5' value={this.state.barrio}
                            onChange={this.handleChangeLogin} type="text"
                            name='barrio' placeholder='Barrio' required ></input>
                    </div>

                    <div className='espacio centrar'>
                        <select className='bordear py-1 m-0 border-1 px-5' value={this.state.tipoInm}
                            onChange={this.handleChangeLogin} type="text"
                            name='tipoInm' required >
                            <option value="" disabled>Tipo de Inmueble</option>
                            <option value="1">Casa</option>
                            <option value="2">Cabaña</option>
                        </select >
                    </div>

                    <div className='espacio centrar'>
                        <select className='bordear py-1 m-0 border-1 px-5' value={this.state.mascotas}
                            onChange={this.handleChangeLogin} type="text"
                            name='mascotas' required >
                            <option value="" disabled>¿Acepta Mascotas?</option>
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select >
                    </div>

                    <div className='espacio centrar'>
                        <select className='bordear py-1 m-0 border-1 px-5' value={this.state.venti}
                            onChange={this.handleChangeLogin} type="text"
                            name='venti' required >
                            <option value="" disabled>¿Tiene Ventilación?</option>
                            <option value="1">Calefacción</option>
                            <option value="2">Aire Acondicionado</option>
                            <option value="3">Ninguno</option>
                        </select >
                    </div>

                </div>
                <div className=' col-sm-4'>
                    <img src={iconFoto} alt="Fotos casas" width='50%' />
                    <div className='espacio centrar' >
                        <input className='py-2 m-0 border-1 px-5' type="file" id="myfile" name="foto" multiple
                            value={this.state.foto}
                            onChange={this.handleChangeLogin}></input><br></br>

                    </div>

                    <div className='espacio centrar pt-3 mt-5'>
                        <input className='' type='submit' value="Registrar Inmueble"></input>
                    </div>

                </div>
            </form>
        );
    }
}

export default LoginPropietario;