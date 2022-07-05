import React from 'react';
import './register.css';
import { useState } from "react";
import axios from 'axios'
import Login from './login';

const Register = () => {
    const [data, setData] = useState({ email: "", password: "", username: "", address: "", phoneNumber: "", role: "customer"});
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            var url = "http://localhost:3001/user/register";

            await axios.post(url, data, config).then((response) => {
                var data = response.data
                alert('Register successful')
                localStorage.setItem("isLogged","true")
                window.location = "/Home";
            });

        } catch (error) {
            alert("Email already exists")
        }
    };

    return (
        <>
            {/* logo in center */}
           
            
            <div className='loginnreg'>
                <div class="row">
                    <div class="col">
                        {/* login user */}
                        <Login />
                    </div>
                    <div class="col">
                        {/* register user */}
                        <h1 class="formname">Create New Account</h1>
                        <div class="login-box">
                        <form onSubmit={handleSubmit}>
                            {/* Username */}
                            <label class="form-label">Username</label>
                            <input type="text" name="username" placeholder="Enter Username" required onChange={handleChange} value={data.username} class="form-control" />
                            {/* Email Address */}
                            <label class="form-label">Email</label>
                            <input type="email" name="email" placeholder="Enter Email Address" required onChange={handleChange}
                                value={data.email} class="form-control" />
                            {/* Phone Number */}
                            <label class="form-label">Mobile Number</label>
                            <input type="text" name="phoneNumber" placeholder="Enter Your Mobile Number" required onChange={handleChange} value={data.phoneNumber} class="form-control" />
                            {/* Address */}
                            <label class="form-label">Address</label>
                            <input type="text" name="address" placeholder="Enter Full Address" required onChange={handleChange} value={data.address} class="form-control" />
                            {/* Password */}
                            <label class="form-label">Password</label>
                            <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} value={data.password} class="form-control" />
                            {/* Confirm Password */}
                            <label class="form-label">Confirm Password</label>
                            <input type="password" placeholder="Confirm your Password" class="form-control" />
                            {error && <div className="error_msg">{error}</div>}
                            <input type="submit" className="btn btn-danger" id ="submitbutton" value="Register" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
};

export default Register;
