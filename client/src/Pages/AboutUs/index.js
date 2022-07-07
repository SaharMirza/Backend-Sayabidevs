import React from 'react';
import './style.css';
import mission from './mission.png'
import vision from './vision.svg'
import values from './values.png'


const AboutUs = () => {
  return (
    <div class="container" id="about">
      <h2 class="center">
        About Us<br />
      </h2>
      <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="row">
        <div class="col">
          <img src="https://ecodesoft.com/wp-content/uploads/2020/06/about-us.png" class="rounded float-end" alt="..." />
        </div>
        <div class="col">
          <br /><br /><br /><br />
          <h1 class="text2">Welcome to Our Site</h1>
          <br />
          <p class="text3" style={{ width: 600 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="row">
        <div class="card" style={{ width: 400, marginLeft: 180 }}>
          <div class="card-body">
            <img src={mission} style={{ width: 100, marginLeft: 130, marginBottom: 20 }} />
            <h5 class="card-titl" style={{ textAlign: 'center', fontWeight: 'bold' }}>Our Mission</h5>
            <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="card" style={{ width: 400, marginLeft: 20 }}>
          <div class="card-body">
            <img src={vision} style={{ width: 100, marginLeft: 130, marginBottom: 20 }} />
            <h5 class="card-titl" style={{ textAlign: 'center', fontWeight: 'bold' }}>Our Vision</h5>
            <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="card" style={{ width: 400, marginLeft: 20 }}>
          <div class="card-body">
            <img src={values} style={{ width: 160, marginLeft: 100, marginBottom: 20 }} />
            <h5 class="card-titl" style={{ textAlign: 'center', fontWeight: 'bold' }}>Our Values</h5>
            <p class="card-tex">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
