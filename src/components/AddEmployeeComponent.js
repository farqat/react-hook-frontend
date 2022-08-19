import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import{Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const history  = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee= (e) =>{
        e.preventDefault();

        const employee = {firstName, lastName, emailId};

        if(id){
            EmployeeService.updateEmployee(id, employee).then((res)=>{
                history('/employees')
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            EmployeeService.createEmployee(employee).then((res)=>{
                console.log(res.data);
                
                history('/');
            }).catch((err)=>{
                console.log(err)
            });
        }
        
    }

    useEffect(() => {
      
        EmployeeService.getEmployee(id).then((res)=>{
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmailId(res.data.emailId);
        }).catch((err)=>{
            console.log(err);
        })

    }, [])


    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    

    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter first name'
                                        name='firstname'
                                        className='form-control'
                                        value={firstName}
                                        onChange = {(e)=> setFirstName(e.target.value)} 
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter last name'
                                        name='lastname'
                                        className='form-control'
                                        value={lastName}
                                        onChange = {(e)=> setLastName(e.target.value)} 
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter email'
                                        name='email'
                                        className='form-control'
                                        value={emailId}
                                        onChange = {(e)=> setEmailId(e.target.value)} 
                                    />
                                </div>

                                <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to="/employees" className='btn btn-danger'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent