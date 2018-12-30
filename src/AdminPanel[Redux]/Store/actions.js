import * as actionTypes from './actionTypes';
import EmployeesApi from '../Employees/EmployeesApi';
import utils from '../../utils'

export const getEmployees = () => {
    return dispatch => {

        EmployeesApi.getEmployees((employees) => dispatch(setEmployees(employees)));

    };
};

export const setEmployees = (employees) => {
    return {
        type: actionTypes.SET_EMPLOYEES,
        employees: employees
    };
};

export const editEmployee = (employee) => {
    return {
        type: actionTypes.EDIT_EMPLOYEE,
        employee: employee
    };
};

export const deleteEmployee = (employeeId) => {
    return {
        type: actionTypes.DELETE_EMPLOYEE,
        employeeId: employeeId
    };
};

// Should getEmployees first
export const login = (username, password) => {
    return (dispatch, getState) => {

        //dispatch(getEmployees());

        const employees = getState().employees;

        if (isValidUser(employees, username, password))
            dispatch(loginSuccess());
        else
            dispatch(loginFail());

    }
};

const isValidUser = (employees, username, password) => {
    return utils.isObject(employees.find(emp =>
        emp.userName.toLowerCase() === username.toLowerCase() &&
        emp.password.toLowerCase() === password.toLowerCase()))
};


export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCES
    };
};

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL,
    };
};

export const setLoginRedirectPath = (path) => {
    return {
        type: actionTypes.SET_LOGIN_REDIRECT_PATH,
        path: path
    };
};