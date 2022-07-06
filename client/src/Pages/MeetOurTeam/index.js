import React from 'react';
import './style.css';


const MeetOurTeam = () => {  
  return (
    <div class="cont" id="team">
    <div>
      <br/>
      <h2 class="center">
        MEET OUR TEAM<br/>
      </h2>
      <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="card" style={{marginLeft:300}}>
        <img src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?w=2000" class="card-img-top" alt="..." style={{width:200 ,marginLeft:50}}/>
          <div class="card-body">
            <h5 class="card-titl">Saad Khan</h5>
            <p class="card-tex">Founder</p>
            <h2 class="textskills">
              <img src="https://t4.ftcdn.net/jpg/02/85/44/69/360_F_285446949_eVkqwuNjPXLwR72oq0ctYltBCIflCbwh.webp" style={{width:250}}/>
              
            </h2>
          </div>
        </div>
        <div class="card">
        <img src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?w=2000" class="card-img-top" alt="..." style={{width:200 ,marginLeft:50}}/>
          <div class="card-body">
            <h5 class="card-titl"> Yasir Hussain</h5>
            <p class="card-tex">Co-Founder</p>
            <h2 class="textskills">
            <img src="https://t4.ftcdn.net/jpg/02/85/44/69/360_F_285446949_eVkqwuNjPXLwR72oq0ctYltBCIflCbwh.webp" style={{width:250}}/>
            </h2>
          </div>
        </div>
        <div class="card" >
          <img src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?w=2000" class="card-img-top" alt="..." style={{width:200 ,marginLeft:50}}/>
          <div class="card-body">
            <h5 class="card-titl">Bilal Ahmer</h5>
            <p class="card-tex">Founder</p>
            <h2 class="textskills">
            <img src="https://t4.ftcdn.net/jpg/02/85/44/69/360_F_285446949_eVkqwuNjPXLwR72oq0ctYltBCIflCbwh.webp" style={{width:250}}/>
            </h2>
          </div>
        </div>
      </div>
      </div>
  </div>
  );
};

export default MeetOurTeam;