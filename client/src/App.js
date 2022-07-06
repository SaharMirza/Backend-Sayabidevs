import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/cart';
import Login from './Pages/register';
import Admin from './Admin/orders';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/Admin" exact element={<Admin />} />
          
          <Route path="*" exact element={"404 NOT FOUND"} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;