import Axios from '../../../node_modules/axios';

class EmployeesApi {


    static getEmployees = (callback) => {
        Axios.get('http://employeesintern.azurewebsites.net/api/employees')
            .then(res => callback(res.data))
            .catch(this.errorHandler);
    }


    static addEmployee = (employee, callback) => {
        Axios.post('http://employeesintern.azurewebsites.net/api/employees', employee)
            .then(() => EmployeesApi.getEmployees(callback))
            .catch(this.errorHandler);
    }


    static editEmployee = (employee, callback) => {
        let id = employee.id;
        delete employee.id;
        Axios.put('http://employeesintern.azurewebsites.net/api/employees/' + id, employee)
            .then(() => EmployeesApi.getEmployees(callback))
            .catch(this.errorHandler);
    }


    static deleteEmployee = (id, callback) => {
        Axios.delete('http://employeesintern.azurewebsites.net/api/employees/' + id)
            .then(() => EmployeesApi.getEmployees(callback))
            .catch(this.errorHandler);
    }


    errorHandler = error => console.log(error);

}


export default EmployeesApi;
