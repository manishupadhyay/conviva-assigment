import React from 'react';
import EmployeeList from './component/employeeList';
import EmployeeDetails from './component/EmployeeDetails';
import { store } from './store/index';
import { Provider } from 'react-redux';
import './component/styles/appLayout.css';

class App extends React.Component {

    render() {
        return(
            <Provider store={store}>
                <div className="flex-container">
                    <div className="container">
                        <EmployeeList />    
                    </div>
                    <div className="container addressDetails">
                        <EmployeeDetails />
                    </div>  
                </div>
                
            </Provider>
        )
    }
}
export default App;