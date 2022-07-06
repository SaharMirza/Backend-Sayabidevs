import React from 'react';
import './style.css';

const ContactUs = () => {
  return (
    <div class="container" id="contact">
      <div class="container">
        <h2 class="center">
          Contact Us<br />
        </h2>
        <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="container1">
        <div class="row" style={{ marginTop: 50 }}>
          <div class="col">
            <div class="row" >
              <div class="col" style={{ marginLeft: 200 }}>
                <h2 class="text6 ">
                  Address
                </h2>
                <h6 class="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa non ea et ad aut
                </h6>
                <h2 class="text6 " style={{ marginTop: 50 }}>
                  Phone
                </h2>
                <h6 class="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa non ea et ad aut
                </h6>
              </div>
              <div class="col" >
                <h2 class="text6 ">
                  Email
                </h2>
                <h6 class="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa non ea et ad aut
                </h6>
                <h2 class="text6 " style={{ marginTop: 50 }}>Socials
                </h2>
                <h2 class="texts">
                  <img src="https://t4.ftcdn.net/jpg/02/85/44/69/360_F_285446949_eVkqwuNjPXLwR72oq0ctYltBCIflCbwh.webp" style={{ width: 250 }} />
                </h2>
              </div>
            </div>
          </div>
          <div class="col" style={{ marginLeft: 100 }}>
            <div class="card" style={{ height: 400, width: 400 }}>
              <form class="formdetails">
                <fieldset>
                  <legend style={{marginLeft:110, marginTop:30}}>Send Message</legend>
                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Full Name</label>
                    <input type="text" id="disabledTextInput" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Email</label>
                    <input type="text" id="disabledTextInput" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label" >Send Message</label>
                    <input type="text" id="disabledTextInput" class="form-control" />
                  </div>
                  <button type="submit" class="btn btn-danger" style={{marginLeft:110}}>Send</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;