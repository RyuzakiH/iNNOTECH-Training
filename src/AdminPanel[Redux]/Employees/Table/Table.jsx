import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
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


    customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            &nbsp;&nbsp;Showing {from} to {to} of {size} Results
        </span>
    );

    options = {
        paginationSize: 4,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: this.customTotal,
        sizePerPageList: [5, 10, 20, 50, 100]
    };

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
                pagination={paginationFactory(this.options)}
            />
        );
    }

}

export default Table;
