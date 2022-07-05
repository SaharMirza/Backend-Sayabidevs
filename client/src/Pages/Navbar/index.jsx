import React from 'react';
import './style.css';

const Navbar = () => {
  
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="image2.png" id="heading" class="rounded mx-auto d-block" alt="..."/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="C:\Users\hp\OneDrive\Desktop\FrontEnd\home.html">Home</a>
          <a class="nav-link " href="#careers">Careers</a>
          <a class="nav-link" href="#about">About Us</a>
          <a class="nav-link " href="#contact">Contact</a>
          <a class="nav-link" href="#service">Services</a>
        </div>
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
