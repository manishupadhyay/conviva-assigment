import React from 'react';
import {connect} from 'react-redux';
import { fetchEmployeeAddress } from '../actions/employeeDetailsAction'

const Employee = (props) => {
    const {details: emp, fetchEmployeeAddress} = props;

    const onclick = () => {
        fetchEmployeeAddress(emp.id);
    }

    return (
        <li onClick={onclick} className="employeeList">
            <div>
                <span>Name: {emp.name}</span>
            </div>
            <div>
                <span>Id: {emp.id}</span>
            </div>
            <div>
                <span>age: {emp.age}</span>
            </div>
            <div>
                <span>Sex: {emp.sec}</span>
            </div>
        </li>
    )
}
export default connect(null, {fetchEmployeeAddress})(Employee);