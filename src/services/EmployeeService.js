import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:9000/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(e){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, e);   
    }

    getEmployee(id){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + id);
    }

    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + id, employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + id);
    }
}

export default new EmployeeService();