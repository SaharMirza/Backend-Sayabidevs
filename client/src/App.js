import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/cart';
import Login from './Pages/register';
import Admin from './Admin/orders';

const App = () => {
  const adminlog = localStorage.getItem("isLoggedadmin")

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          {/* <adminlog && Route path="/Admin" exact element={<Admin />} />   */}
          <Route path="/admin">
            {adminlog && <Route index element={< Admin />} />}
            {!adminlog && <Route index element={<Login />} />}
          </Route>
          <Route path="*" exact element={"404 NOT FOUND"} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;