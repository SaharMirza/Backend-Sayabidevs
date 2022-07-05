import React from 'react';
import './order.css';
import { getPackages } from '../Apicalls/orders';

const Menu = () => {
  var [Packages, setPackages] = React.useState([]);
  
  React.useEffect(() => {
    const getPackagesData = async () => {
      await getPackages().then((response) => {
        console.log(response.data)
        setPackages(response.data.All_packages)
      })
    };
    getPackagesData();
  }, [])

  return (
    <div class="container">
      <h2 class="center">
        Pricing<br />
      </h2>
      <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="row">
        {Packages.map((user) => (
          <div class="col">
            <div class="card" id='cardstyle' >
              <div class="card-body">
                <h3 class="card-title">{user.Package_Name}</h3>
                <p class="card-text">
                  $
                  <span id='dollar'> {user.Package_price}</span>
                  <br />monthly
                </p>
                <p>{user.Package_desc}</p>
                <p>{user.Package_deadline}</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Menu;
