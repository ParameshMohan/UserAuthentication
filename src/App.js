import React from 'react';

import Login from './Login/Login';
import EmployeeList from './EmployeeList/EmployeeList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
   <Switch>
   
   <Route path="/employeeList"  component ={EmployeeList} />
   <Route path="/login" component ={Login} />
   <Route path="/" component ={Login} />
   
   </Switch>
    </div>
  );
}

export default App;
