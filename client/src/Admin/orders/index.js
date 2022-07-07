import React from 'react';
import './style.css';
import { getOrders } from '../../Apicalls/orders';
import { getusers } from '../../Apicalls/user';
import AdminNavbar from '../AdminNavbar'
import Group9 from './Group9.png'

const AdminOrder = () => {

    var [orders, setOrder] = React.useState([]);
    var [users, setusers] = React.useState([]);

    React.useEffect(() => {
        const getorder = async () => {
            await getOrders().then((response) => {
                setOrder(response.data.All_Orders)
            })
        };
        getorder();
    }, [])

    React.useEffect(() => {
        const getUser = async () => {
            await getusers().then((response) => {
                setusers(response.data.Users)
            })
        };
        getUser();
    }, [])

    const username = (id) => {
        for (var item in users) {
            if (users[item]._id === id) {

                return users[item].username
            }
        }
    }

    const useremail = (id) => {
        for (var item in users) {
            if (users[item]._id === id) {
                return users[item].email
            }
        }
    }

    const userphone = (id) => {
        for (var item in users) {
            if (users[item]._id === id) {
                return users[item].phoneNumber

            }
        }
    }

    return (
        <>
            <AdminNavbar />
            <br/>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="adminheading">ADMIN DASHBOARD</h1>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <img src={Group9} />
                    </div>
                </div>
                <h1 class="ordersummary ">ORDERS SUMMARY</h1>
            </div>
            <br />             
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Order Details</th>
                        <th scope="col">Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((user) => (<tr>
                        <td>{username(user.User_id)}</td>
                        <td>{useremail(user.User_id)}</td>
                        <td>{userphone(user.User_id)}</td>
                        <td>{user.Packages_ID}</td>
                        <td>{user.Service_ID}</td>
                        <td>{user.Payment_Method}</td>
                        <td>{user.Order_details}</td>
                        <td>{user.Order_Status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <br /> <br /> <br /> 
        </>
    )
};

export default AdminOrder;