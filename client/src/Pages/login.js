import React from 'react';
import './login.css';
import { useState } from "react";
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
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
            var url = "http://localhost:3001/user/login";
            await axios.post(url, data, config).then((response) => {
                var data = response.data
                if (data.user.role === 'customer') {
                    alert('Login successful')
                    localStorage.setItem("isLogged","true")
                    localStorage.setItem("userid",data.user._id)
                    window.location = "/home";
                }
                if(data.user.role === 'admin'){
                    alert('Login successful')
                    localStorage.setItem("isLoggedadmin","true")
                    window.location = "/admin";
                }
               
            });

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500

            ) {
                setError(error.response.data.message);
                console.log(error.response)
                alert('Please check your username and password')
            }
        }
    };

    return (

        <div class="login-box">
            <h1 class="formname">Login</h1>
            <form onSubmit={handleSubmit}>
                {/* Email */}
                <label class="form-label">Email</label>
                <input type="email" name="email" placeholder="Enter Email Address" required onChange={handleChange}
                    value={data.email} class="form-control" />
                {/* Password */}
                <label class="form-label">Password</label>
                <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} value={data.password} class="form-control" />
                {error && <div className="error_msg">{error}</div>}
                <button type="button" id="forgetpass" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Forget Password?
                </button>
                <br />
                <input type="submit" className="btn btn-danger" id="submitbutton" value="Login" />
            </form>
            {/* forget password pop up */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please enter your email</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            We will send a password reset code to your registered email address
                            {/* Email */}
                            <br /><br />
                            <input type="email" name="email" placeholder="Enter your Email Address" required onChange={handleChange}
                                value={data.email} class="form-control" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;
