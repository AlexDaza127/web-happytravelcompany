import React, { Component, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

class DataTableComponent extends Component {
    render() {
        const { SearchBar } = Search;

        const customTotal = (from, to, size) => (
            <span className="ml-1 react-bootstrap-table-pagination-total text-14">
                Mostrando {from} al {to} de {size}
            </span>
        );

        const pagination = !this.props.noPaginar ? paginationFactory({
            page: 1,
            showTotal: true,
            paginationTotalRenderer: customTotal
        }) : undefined;

        return (
            <Fragment>
                <ToolkitProvider
                    keyField={this.props.idTabla}
                    data={this.props.datos}
                    columns={this.props.columnas}
                    search
                >
                    {
                        props => (
                            <div>
                                {!this.props.noBuscar && <SearchBar
                                    {...props.searchProps}
                                    className="form-control-sm mb-3"
                                    placeholder="Buscar"
                                />}
                                <BootstrapTable
                                    {...props.baseProps}
                                    condensed
                                    classes="text-14"
                                    bootstrap4={true}
                                    pagination={pagination}
                                    noDataIndication="No hay datos"
                                    expandRow={this.props.expandir}
                                    wrapperClasses="table table-responsive-md"
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </Fragment>
        );
    }
}

export default DataTableComponent;