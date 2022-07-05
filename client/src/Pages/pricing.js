import React from 'react';
import './pricing.css';
import { getPackages } from '../Apicalls/packages';
import { Navigate } from 'react-router-dom';

const Order = () => {
  var [Packages, setPackages] = React.useState([]);
  const [navigate, setNavigate] = React.useState(false);

  React.useEffect(() => {
    const getPackagesData = async () => {
      await getPackages().then((response) => {
        console.log(response.data)
        setPackages(response.data.All_packages)
      })
    };
    getPackagesData();
  }, [])

  const handleClick = (user) => () => {
    localStorage.setItem("package",user._id)
    setNavigate(true);
  } 
  
  if (navigate) {
    return <Navigate to="/cart"/>;
  }

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
                <h3 class="card-titl">{user.Package_Name}</h3>
                <p class="card-tex">
                  $
                  <span id='dollar'> {user.Package_price}</span>
                  <br />monthly
                </p>
                <p>{user.Package_desc}</p>
                <p>{user.Package_deadline}</p>
                <button  class="btn btn-primary" onClick={handleClick(user)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Order;
