import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Employees from './Employees/Employees';
import Login from './Login/Login';
import reduxComponent, { Reduxx } from '../reduxUtils';
import reducer from './Store/reducer';
import * as actions from './Store/actions';

class AdminPanel extends React.Component {

    componentDidMount() {
        this.props.onEmployeesGet();
    }

    render() {

        if (!this.props.isAuthenticated) {

            console.log('admin-panel', this.props.isAuthenticated);

            this.props.loginSuccessTest();

            return (
                <Redirect to={{
                    pathname: "/admin-panel-redux/login",
                    state: { redirect: '/admin-panel-redux' }
                }} />
            );
        }



        return (
            <div className="AdminPanel" >
                <Switch>
                    <Route path="/admin-panel-redux/employees" component={Employees} />
                    <Redirect to='/admin-panel-redux' />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees,
        isAuthenticated: state.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEmployeesGet: () => dispatch(actions.getEmployees()),
        loginSuccessTest: () => dispatch(actions.loginSuccess())
    };
}

export default reduxComponent(AdminPanel, new Reduxx(reducer, true, [], mapStateToProps, mapDispatchToProps));
