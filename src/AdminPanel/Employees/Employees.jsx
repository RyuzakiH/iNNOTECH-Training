import React, { Component } from 'react'
import './Employees.css'
import AddFormModal from './Modals/AddFormModal'
import EmployeesApi from './EmployeesApi'
import Table from './Table/Table';
import { InputTypes } from './UI/Form/Form'

class Employees extends Component {

    constructor() {
        super();

        this.state = { employees: [] };

        this.employeesTemplate = [
            { name: 'id', type: InputTypes.NUMBER, readOnly: false, required: true },
            { name: 'name', type: InputTypes.TEXT, readOnly: false, required: true },
            { name: 'mobile', type: InputTypes.TEXT, readOnly: false, required: true },
            { name: 'telephone', type: InputTypes.TEXT, readOnly: false, required: true },
            { name: 'address', type: InputTypes.TEXT, readOnly: false, required: true },
            { name: 'userName', type: InputTypes.TEXT, readOnly: false, required: true },
            { name: 'password', type: InputTypes.PASSWORD, readOnly: false, required: true }
        ];
    }

    componentDidMount() {
        document.title = "Manage Employees";
        this.updateEmployeesHandler();
    }

    updateEmployeesHandler = () => EmployeesApi.getEmployees(employees => this.setState({ employees: employees }));


    addEmployeeHandler = (employee) => EmployeesApi.addEmployee(employee, this.updateEmployeesHandler);

    editEmployeeHandler = (employee) => EmployeesApi.editEmployee(employee, this.updateEmployeesHandler);

    deleteEmployeeHandler = (employeeId) => EmployeesApi.deleteEmployee(employeeId, this.updateEmployeesHandler);


    render() {

        return (
            <div className="Employees">
                <div id="main">

                    <div id="page-content">

                        <div id="page-header">
                            <h1>Manage Employees</h1>
                            <hr />
                        </div>

                        <div className="panel">
                            <div className="panel-body">
                                <h3>Employees</h3>

                                <button
                                    id="btnUpdate"
                                    className="btn btn-success"
                                    onClick={this.updateEmployeesHandler}
                                >
                                    Update
                                </button>

                                <AddFormModal
                                    employeesTemplate={this.employeesTemplate}
                                    updateEmployees={this.updateEmployeesHandler}
                                    onSubmit={this.addEmployeeHandler}
                                    style={{ float: 'right', marginBottom: '8px' }} />

                                <hr />

                                <Table
                                    id="tblEmployees"
                                    data={this.state.employees}
                                    employeesTemplate={this.employeesTemplate}
                                    editEmployee={this.editEmployeeHandler}
                                    deleteEmployee={this.deleteEmployeeHandler}
                                    updateEmployees={this.updateEmployeesHandler} />

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default Employees;