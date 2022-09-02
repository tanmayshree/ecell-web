import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from "./../../assets/logo-black.png";


import "./form.css"
const UserLogin = () => {
      let navigate_to = useNavigate();

      const handleLogin = async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            if (token) {
                  navigate_to("/")
                  alert("You are already logged in.");
            } else {
                  const user = {
                        email: e.target.email.value,
                        password: e.target.password.value,
                  };
                  const url = "http://127.0.0.1:5000/login?include_auth_token";
                  const init_ob = {
                        method: "POST",
                        mode: "cors",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                  };

                  const res = await fetch(url, init_ob)
                  if (res && res.ok) {
                        const data = await res.json();
                        const auth_token = data.response.user.authentication_token;
                        localStorage.setItem("token", auth_token);
                        navigate_to("/add-testimonial");
                  }
                  else {
                        alert("Invalid Email or Password.");
                  }
            }
      };

      useEffect(() => async () => {
            const token = localStorage.getItem('token')
            if (token) {
                  const url = "http://127.0.0.1:5000/api/user_validation";
                  const init_ob = {
                        method: "GET",
                        mode: "cors",
                        headers: {
                              "Authentication-Token": token,
                        },
                  };
                  const res1 = await fetch(url, init_ob);
                  if (res1 && res1.ok) {
                        console.log("Previous Login Success01")
                        navigate_to("/add-testimonial")
                  }
                  else {
                        localStorage.removeItem('token')
                        navigate_to("/")
                        console.log("You are not logged in03.")
                  }
            }
      });

      return (
            <>

                  <form action="" onSubmit={handleLogin} className="form_wrapper">
                        <div className="form_logo_wrapper"><img className="form_logo" src={logo} alt="" /><div className="form_logo_header">Login Here</div></div>
                        <TextField className="FormInput" id="standard-basic" type="email" name="email" label="Email" variant="standard" required color="warning" />
                        <TextField className="FormInput" id="standard-basic" type="password" name="password" label="Password" variant="standard" required color="warning" />
                        <Button type="submit" variant="contained" color="warning">Login</Button>

                  </form>
            </>
      );
}

export default UserLogin;