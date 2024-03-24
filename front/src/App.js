import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegUser from './RegUser';
import RegRestaurant from './RegRestaurant';
import RegDelivery from './RegDelivery';
import MainPageForAuthUser from './MainPageForAuthUser';
import AllFood from './AllFood';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPageForAuthUser/>}/>
        <Route path='/Registration' element={<RegUser/>}/>
        <Route path='/RegistrationRestaurant' element={<RegRestaurant/>}/>
        <Route path='/RegistrationDelivery' element={<RegDelivery/>}/>
        <Route path='/Dishes' element={<AllFood/>}/>
      </Routes>
    </Router>
  );
}

export default App;
