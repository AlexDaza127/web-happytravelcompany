import React, { Component, Fragment } from 'react';
import Home from '../principal/Home';

class BodyGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <Home></Home>
            </Fragment>
        );
    }
}

export default BodyGrid;