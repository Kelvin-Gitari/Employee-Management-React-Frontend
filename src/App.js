import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component = {ListEmployeeComponent}></Route>
            <Route path="/employees" component = {ListEmployeeComponent}></Route> 
          </Switch>

        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
    


  );
}

export default App;
