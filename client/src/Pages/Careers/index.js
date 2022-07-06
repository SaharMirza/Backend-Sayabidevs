import React from 'react';
import './style.css';


const Careers = () => {
  return (
    <>
      <div class="container" id="careers">
        <div class="container">
          <div class="row">
            <div class="col">
              <br /><br /><br />
              <h1 class="team">Join Our Team At </h1>
              <h2 class="name">
                <br/>
                SayabiDevs
              </h2>
              <br/>
              <h5 class="text text3"> Work at the most dynamic and sucessfull software house.</h5>
              <a href="#scrollspyHeading1" class="btn btn-danger">View Openings</a>
            </div>
            <div class="col">
              <img src="https://image.shutterstock.com/image-vector/world-business-earth-map-global-260nw-1548967709.jpg" id="image1" class="rounded float-end" style={{ width: 600, height: 300, marginTop: 50 }} alt="..." />
            </div>
          </div>
        </div>
        <div class="container" id="scrollspyHeading1">
          <p class="text-center fs-1" id="subtext1">Job Openings</p>
          <div class="row">
            <div class="card" style={{ width: 300, marginLeft: 200 }}>
              <div class="card-body">
                <h5 class="card-titl">Data Scientist</h5>
                <p class="card-tex">Experiennce: Fresh Graduates</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>

            <div class="card" style={{ width: 300, marginLeft: 100 }}>
              <div class="card-body">
                <h5 class="card-tite">Product Designer</h5>
                <p class="card-tex">Experiennce: 3+ years</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>

            <div class="card" style={{ width: 300, marginLeft: 100 }}>
              <div class="card-body">
                <h5 class="card-tile">WordPress Developer</h5>
                <p class="card-tet">Experiennce: Fresh Graduates</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card" style={{ width: 300, marginLeft: 200, marginTop: 50 }}>
              <div class="card-body">
                <h5 class="card-tile">Junior Graphic Designer</h5>
                <p class="card-tet">Experiennce: Fresh Graduates</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>

            <div class="card" style={{ width: 300, marginLeft: 100, marginTop: 50 }}>
              <div class="card-body">
                <h5 class="card-ttle">Digital Marketer</h5>
                <p class="card-tex">Experiennce: 3+ years</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>

            <div class="card" style={{ width: 300, marginLeft: 100, marginTop: 50 }}>
              <div class="card-body">
                <h5 class="card-tite">WordPress Developer</h5>
                <p class="card-tet">Experiennce: Fresh Graduates</p>
                <a href="#" class="btn btn-danger">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <p class="text-center fs-1" id="subtext1">Learn Our Recruitemnt Process</p>
      <br />
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" >
              <div class="card-body">
                {/* <img src="cv.svg" id="icons1" class="card-img-top" alt="..."/> */}
                <h5 class="card-title1"> 1. CV Submission</h5>
                <p class="card-text1">Send us your CV at sayabidevs@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col border-0 d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" >
              <div class="card-body">
                {/* <img src="phone.svg" id="icons1" class="card-img-top" alt="..."/> */}
                <h5 class="card-title1">2. Phone Screening</h5>
                <p class="card-text1">After looking at your CV you will recieve a call from us to schedule an
                  interview </p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" >
              <div class="card-body border-0">
                {/* <img src="assessment.svg" id="icons1" class="card-img-top" alt="..."/> */}
                <h5 class="card-title1 border-0">3. Skill Assessment</h5>
                <p class="card-text1">A skill Assesment will be emailed to you.</p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center" id="service">
            <div class="card1 border-0 d-flex justify-content-center" id="card1" >
              <div class="card-body border-0">
                {/* <img src="finalinterview.svg" id="icons1" class="card-img-top" alt="..."/> */}
                <h5 class="card-title1 border-0">4. Final Interview</h5>
                <p class="card-text1"> A final interview will be conducted by the leads after which you will be
                  Recruited.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;