import React from 'react';
import {connect} from 'react-redux';

const EmployeeDetails = (props) => {
    const {addressList, fetchDataStatus} = props;
    const getAddressList = () => {
        return (
            <ul>
                { addressList.map( (address, index) => {
                    return (
                        <li key={index}>{address}</li>
                    );
                })}
            </ul>
        )
    }
    const getLoading = () => {
        return (
            <div>...loading</div>
        )
    }

    const getError = () => {
        return (
            <div>Address Details not found Employee</div>
        )
    }

    if(fetchDataStatus === 'inProgress') {
        return getLoading();
    }

    if(fetchDataStatus === 'complete') {
        return getAddressList();
    }

    if(fetchDataStatus === 'error') {
        return getError();
    }

    return (
        <div> please select employee list to address details</div>
    )
}

const mapStateToProps = (state) => {
    return {
        addressList: state.selectedAdressList,
        fetchDataStatus: state.fetchStatus
    }
}
export default connect(mapStateToProps)(EmployeeDetails);