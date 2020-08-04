import React, { Component } from 'react';

//componentes 
import Login from '../login/login';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Login></Login>
            </div>
         );
    }
}
 
export default Usuarios;