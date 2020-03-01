import {actionList} from '../actions/actionList';
import initialState from '../store/initialState';

export const employeeReducer = (state, action) => {
    if (action.type === actionList.getEmployeeDetails) {
        const newSelectedEmployeeAddress = {selectedAdressList: [...state.employeesAdress[action.payload.id]]};
        return Object.assign({}, state, newSelectedEmployeeAddress);        
    }
    if (action.type === actionList.addNewEmployeeDetails) {
        const newEmployeeAddress = {};
        newEmployeeAddress[action.payload.id] = action.payload.addressList
        const updatedEmployeeList = Object.assign({}, state.employeesAdress, newEmployeeAddress)
        return Object.assign({}, state, {employeesAdress: updatedEmployeeList});
    }
    if (action.type === actionList.requestStatus) {
        return Object.assign({}, state, {fetchStatus: action.payload.requestStatus})
    }
    return state;
}
