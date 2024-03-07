import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Auth from './Auth';
import RegUser from './RegUser';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/Registration' element={<RegUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
