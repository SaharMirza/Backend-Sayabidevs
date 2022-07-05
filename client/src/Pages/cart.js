import React from 'react';
import './cart.css';
import { getservicecats } from '../Apicalls/servicecat';
import { getservices } from '../Apicalls/services';
import { getpackagebyid } from '../Apicalls/packages';
import Dropdown from 'react-bootstrap/Dropdown';
import { addOrder } from '../Apicalls/orders'
import { Navigate } from 'react-router-dom';

const Cart = () => {

    const sid = localStorage.getItem("service")
    const pid = localStorage.getItem("package")

    var [Packages, setPackages] = React.useState([]);
    var [Package, setpackage] = React.useState([]);
    var [services, setservices] = React.useState([]);
    var [pay, setpay] = React.useState("Payment Method");
    var [orderdetails, setorderdetails] = React.useState("");
    var [total, settotal] = React.useState("");
    var [servicename, setservicename] = React.useState("servicename");
    const [navigate, setNavigate] = React.useState(false);

    React.useEffect(() => {
        const getPackagecat = async () => {
            await getservicecats().then((response) => {
                console.log(response.data)
                setPackages(response.data.All_ServicesCat)
            })
        };
        getPackagecat();
    }, [])

    React.useEffect(() => {
        const getservice = async () => {
            await getservices().then((response) => {
                console.log(response.data)
                setservices(response.data.All_Services)
            })
        };
        getservice();
    }, [])

    React.useEffect(() => {
        const getpackage = async () => {

            await getpackagebyid(pid).then((response) => {
                console.log(response.data)
                setpackage(response.data.package)
                settotal(response.data.package.Package_price)
            })
        };
        getpackage();
    }, [])

    if (navigate) {
        return <Navigate to="/home"/>;
      }

    const createorder = () => {
        addOrder(pid, sid, total, pay, orderdetails).then((response) => {
            console.log(response.data)
        })
        alert("Order Confirmed")
        setNavigate(true);
    }

    const handleClick = (ser) => {
        localStorage.setItem("service", ser._id)
        setservicename(ser.Item_Name)
    }

    return (
        <>
            {/* services and service categories */}
            <div class="row">
                {Packages.map((user) => (
                    <div class="card" style={{ height: 300 }}>
                        <div class="card-header">
                            {user.Cat_Name}
                        </div>
                        <ul class="list-group list-group-flush">
                            {services.map((ser) => (
                                ser.Cat_id === user._id ? (
                                    <a class="list-group-item"
                                        onClick={() => handleClick(ser)}>{ser.Item_Name}</a>
                                ) :
                                    (
                                        null
                                    )
                            ))}

                        </ul>
                    </div>
                ))}
                {/* Shopping Cart */}
                <div class="card" style={{ width: 400 }}>
                    <div class="card-body">
                        <h5 class="card-title" >Your Cart</h5>
                        <h6>{Package.Package_Name}
                            <span class="subprice">Rs. {Package.Package_price}</span></h6>
                        {Package.Package_desc}
                        <h4 class="card-text">Your Total  <span class="price"> Rs. {Package.Package_price}</span></h4>
                        <button onClick={createorder} class="btn btn-primary" id="order">Place Order</button>
                    </div>
                </div>
            </div>
            {/* Inputs */}
            <div class="mb-3">
                {/* Order Details */}                
                <label class="form-label" id="label">Selected Service</label>
                <textarea disabled type="text" class="form-control" id='detail'
               value={servicename} 
                     />
                <label class="form-label" id="label">Mention Your Order Details</label>
                <textarea type="text" class="form-control" id='details'
                   onChange={(event) => {
                    setorderdetails(event.target.value);
                }}/>
                <br />
                
                {/* Payment Method */}
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        {pay}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setpay("Jazz Cash")}>
                            Jazz Cash
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setpay("Card")}>
                            Card
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
};

export default Cart;