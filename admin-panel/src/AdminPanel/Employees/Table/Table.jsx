import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import EditFormModal from '../Modals/EditFormModal';
import DeleteModal from '../Modals/DeleteModal';
import utils from '../../../utils';

class Table extends Component {

    extractDefaultColumnNamesFromTemplate = () =>
        this.props.employeesTemplate ? this.props.employeesTemplate.map((prop) => prop.name) : undefined;

    createColumns = () => {
        return this.extractDefaultColumnNamesFromTemplate()
            .map(key => {
                return {
                    dataField: key,
                    text: utils.capitalize(key),
                    align: 'center',
                    headerAlign: 'center',
                    sort: true
                }
            })
            .concat([{
                dataField: 'actions',
                text: 'Actions',
                align: 'center',
                headerAlign: 'center',
                formatter: this.actionsFormatter
            }]);
    }

    actionsFormatter = (cell, row) => {
        return [
            <EditFormModal
                key={'edit_' + row.id}
                employee={row}
                updateEmployees={this.props.updateEmployees}
                employeesTemplate={this.props.employeesTemplate}
                onSubmit={this.props.editEmployee}
            />,
            <DeleteModal
                key={'delete_' + row.id}
                employeeId={row.id}
                updateEmployees={this.props.updateEmployees}
                onSubmit={() => { return this.props.deleteEmployee(row.id) }}
            />
        ];
    }

    render() {
        return (
            <BootstrapTable
                keyField='id'
                id={this.props.id}
                data={this.props.data}
                columns={this.createColumns()}
                striped={true}
                hover={true}
                bordered={false}
            />
        );
    }

}

export default Table;
