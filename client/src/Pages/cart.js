import React from 'react';
import './cart.css';
import { getservicecats } from '../Apicalls/servicecat';
import { getservices } from '../Apicalls/services';
import { getpackagebyid } from '../Apicalls/packages';
import Dropdown from 'react-bootstrap/Dropdown';
import { addOrder } from '../Apicalls/orders'
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

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

                setPackages(response.data.All_ServicesCat)
            })
        };
        getPackagecat();
    }, [])

    React.useEffect(() => {
        const getservice = async () => {
            await getservices().then((response) => {

                setservices(response.data.All_Services)
            })
        };
        getservice();
    }, [])

    React.useEffect(() => {
        const getpackage = async () => {

            await getpackagebyid(pid).then((response) => {

                setpackage(response.data.package)
                settotal(response.data.package.Package_price)
            })
        };
        getpackage();
    }, [])

    if (navigate) {
        return <Navigate to="/home" />;
    }

    const createorder = () => {
        addOrder(pid, sid, total, pay, orderdetails).then((response) => {
            if (response.data === undefined) {
                alert("fill all fields")
            } else {
                alert("Order Confirmed")
                setNavigate(true);
            }
        })

    }

    const handleClick = (ser) => {
        localStorage.setItem("service", ser._id)
        setservicename(ser.Item_Name)
    }

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* services and service categories */}
            <p className='serviceselect'>Select Your Service</p>
            <div class="row">
                {Packages.map((user) => (
                    <div class="card" style={{ height: 200 }}>
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
                <label class="form-labe" id="cartlabel">Selected Service</label>
                <br/>
                <textarea disabled type="text" class="orm-control" id='cartdetail'
                    value={servicename}
                />
                <br/>
                <label class="form-labe" id="cartlabel">Mention Your Order Details</label>
                <br/>
                <textarea type="text" class="form-contrl" id='cartdetails'
                    onChange={(event) => {
                        setorderdetails(event.target.value);
                    }} />
                <br /><br/>
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
            {/* footer */}
            <Footer />
        </>
    )
};

export default Cart;