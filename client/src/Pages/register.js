import React from 'react';
import './register.css';
import { useState } from "react";
import axios from 'axios'
import Login from './login';
import Footer from './Footer';

const Register = () => {
    const [data, setData] = useState({ email: "", password: "", username: "", address: "", phoneNumber: "", role: "customer" });
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
                localStorage.setItem("isLogged", "true")
                window.location = "/Home";
            });

        } catch (error) {
            alert("Email already exists")
        }
    };

    return (
        <>
            <div className='loginnreg'>
                <br />
                <img src="data:image/png;base64,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" style={{ width: 180 }} class="rounded mx-auto d-block" alt="..." />
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
                                {error && <div className="error_msg">{error}</div>}
                                <input type="submit" className="btn btn-danger" id="submitbutton" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <Footer />
            </div>
        </>
    )
};

export default Register;
