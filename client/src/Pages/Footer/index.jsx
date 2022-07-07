import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div class="foot ">
        <div class="row">
          <div class="col d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" style={{width:400, marginLeft:100}}>
              <div class="card-body foot">
                <h5 class="footertitle"> CONTACT US</h5>
                <p class="card-tex"> Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />
                  Culpa non ea et ad aut reiciendis <br /> </p>
              </div>
            </div>
          </div>
          <div class="col border-0 d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" style={{width:400, marginLeft:100}} >
              <div class="card-body foot">
                <h5 class="footertitle">LEARN MORE</h5>
                <p class="card-tex"> Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />
                  Culpa non ea et ad aut reiciendis <br /> </p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" style={{width:400, marginLeft:100}}>
              <div class="card-body border-0 foot">
                <h5 class="footertitle border-0">LOCATIONS</h5>
                <p class="card-tex">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />
                  Culpa non ea et ad aut reiciendis <br /></p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;