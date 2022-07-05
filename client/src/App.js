import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from './Pages/order'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/order" exact element={<Order />} />                   
          <Route path ="*" exact element={"404 NOT FOUND"} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;