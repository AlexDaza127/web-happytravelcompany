import React, { Fragment, Component } from 'react';
import '../../estilos/BodyLanding.css';
import Cabecera from '../principal/Cabecera';
import BodyGrid from '../principal/BodyGrid';

class BodyLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <Fragment>
                <header>
                    <Cabecera></Cabecera>
                </header>
                <section className='mx-0'>
                    <BodyGrid></BodyGrid>
                </section>
            </Fragment>
        );
    }
}

export default BodyLanding;