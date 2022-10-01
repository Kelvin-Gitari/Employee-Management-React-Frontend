import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import './App.css'
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Component/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path="/" exact component = {ListEmployeeComponent}></Route>
            <Route path="/employees" component = {ListEmployeeComponent}></Route> 
            <Route path="/add-employees/:id" component = {CreateEmployeeComponent}></Route> 
            <Route path="/view-employees/:id" component = {ViewEmployeeComponent}></Route> 
            {/* <Route path="/update-employee/:id" component = {UpdateEmployeeComponent}></Route>  */}
          </Switch>

        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
    


  );
}

export default App;
