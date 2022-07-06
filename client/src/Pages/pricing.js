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
        setPackages(response.data.All_packages)
      })
    };
    getPackagesData();
  }, [])

  const handleClick = (user) => () => {
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
      localStorage.setItem("package", user._id)
      localStorage.setItem("packagename", user.Package_Name)
      setNavigate(true);
    }else{
      alert("You need to be logged in")
    }
  }

  if (navigate) {
    return <Navigate to="/cart" />;
  }

  return (
    <div class="container" id='pricing'>
      <h2 class="center">
        Pricing<br />
      </h2>
      <p class="center1"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa non ea et ad aut Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="row">
        {Packages.map((user) => (
          <div class="col">
            <div class="card" style={{width:350}} id="cardstyle" >
              <div class="card-body" id='pricingcardbody'>
                <h6 class="PackageName">{user.Package_Name}</h6>
                <p className='desc'>{user.Package_desc}</p>
                <p class="rupeesign">
                  Rs.
                  <span id='dollar'> {user.Package_price}</span>
                  <br />monthly
                </p>                
                <p className='deadline'> - Project Ready In: {user.Package_deadline}</p>
                <button id="pricingbutton"class="btn btn-danger" onClick={handleClick(user)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Order;
