import React from 'react';
import {connect} from 'react-redux';
import './styles/employeeList.css';
import Employee from './employee';

const EmployeeList = (props) => {
    const {employeeList, fetchEmployeeAddress} = props;
    const onclick = () => {
        fetchEmployeeAddress(employeeList)
    };
    return (
        <ul>
            {
                employeeList.map(emp => {
                    return (
                        <Employee details={emp} key= {emp.id}/>
                    )
                }) 
            }
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        employeeList: state.employeeList
    }
}
export default connect(mapStateToProps)(EmployeeList)
