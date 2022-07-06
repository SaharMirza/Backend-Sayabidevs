import React from 'react';
import './style.css';


const AboutUs = () => {  
  return (
    <div class="container" id="about">
    <h2 class="center">
      About Us<br/>
    </h2>
    <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="row">
      <div class="col">
        <img src="https://ecodesoft.com/wp-content/uploads/2020/06/about-us.png"  class="rounded float-end" alt="..."/>
      </div>
      <div class="col">
        <br/><br/><br/><br/>
        <h1 class="text2">Welcome to Our Site</h1>
        <br/>
        <p class="text3" style={{width:600}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="row">
      <div class="card" style={{width: 300, marginLeft:350}}>
        <div class="card-body">
          <h5 class="card-titl">Our Mission</h5>
          <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="card" style={{width: 300, marginLeft:20}}>
        <div class="card-body">
          <h5 class="card-titl">Our Vision</h5>
          <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="card" style={{width: 300, marginLeft:20}}>
        <div class="card-body">
          <h5 class="card-titl">Our Objective</h5>
          <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
