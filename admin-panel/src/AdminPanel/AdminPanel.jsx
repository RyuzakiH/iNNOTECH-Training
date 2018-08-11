import React from 'react';
import Employees from './Employees/Employees';
import Login from './Login/Login';
import EmployeesApi from './Employees/EmployeesApi';

class AdminPanel extends React.Component {

    state = {
        loggedIn: false,
        employees: []
    }

    loginSuccessHandler = (e) => this.setState({ loggedIn: true });

    componentDidMount() {
        EmployeesApi.getEmployees(employees => this.setState({ employees: employees }))
    }

    render() {
        return (
            <div className="AdminPanel">
                {
                    this.state.loggedIn ?
                        <Employees />
                        :
                        <Login db={this.state.employees} onLoginSuccess={this.loginSuccessHandler} />
                }
            </div>
        );
    }
}

export default AdminPanel;
