import {actionList} from './actionList';
import axios from 'axios';

export const fetchEmployeeAddress = (id) => {
    return (dispatch) => {
        dispatch(fetchRequestStatus('inProgress'));
        axios.get(`/api/employeeDetails/address/${id}`)
        .then((response)=> {
            dispatch(fetchRequestStatus('complete'));
            dispatch(addEmployeeAddress(id, response.data.empAddress));
            dispatch(getEmployeeAddress(id));
        })
        .catch((err)=>{
            dispatch(fetchRequestStatus('error'));
        });
    }
};

export const getEmployeeAddress = (id) => {
    return  {
        type: actionList.getEmployeeDetails,
        payload: { id }
    }
}
export const addEmployeeAddress = (id, addressList) => {
    return  { 
        type: actionList.addNewEmployeeDetails,
        payload: {
            id,
            addressList
        }
    }
}
export const fetchRequestStatus = (requestStatus) =>  {
    return {
        type: actionList.requestStatus,
        payload: {requestStatus}
    }
}
