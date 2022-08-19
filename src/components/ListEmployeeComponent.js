import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, [])


    const getAllEmployees = () =>{
        EmployeeService.getAllEmployees().then((res) => {
            setEmployees(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteEmployee = (id) =>{
        EmployeeService.deleteEmployee(id).then((res)=>{
            getAllEmployees();
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <Link to="/addEmployee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.empId}>
                                    <td>{employee.empId}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link to={`/get-employee/${employee.empId}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteEmployee(employee.empId)} style={{marginLeft:"10px"}}> Delete</button>
                                </td>
                                </tr>
                )
                    }
            </tbody>
        </table>
        </div >
    )
}

export default ListEmployeeComponent