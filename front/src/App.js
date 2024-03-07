import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Auth from './Auth';
import RegUser from './RegUser';
import RegRestaurant from './RegRestaurant';
import RegDelivery from './RegDelivery';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/Registration' element={<RegUser/>}/>
        <Route path='/RegistrationRestaurant' element={<RegRestaurant/>}/>
        <Route path='/RegistrationDelivery' element={<RegDelivery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
