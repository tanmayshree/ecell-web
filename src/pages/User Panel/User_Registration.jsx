import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import logo from "./../../assets/logo-black.png";
import { Button, TextField } from "@mui/material";

import validator from 'validator';
import { useState } from "react";

function UserRegistration() {
  let navigate_to = useNavigate();
  const style = {
    inputProps: {
      style: { textAlign: "left" },
    }
  }
  const [passwordError, setPasswordError] = useState(null);
  // const handleDeleteUser = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const url = "http://127.0.0.1:5000/api/user/delete/"
  //     const init_ob = {
  //       method: "DELETE",
  //       mode: 'cors',
  //       headers: {
  //         'Authentication-Token': token,
  //         "email" : e.target.email.value
  //       },
  //     }
  //     const response = await fetch(url, init_ob)
  //     if (response && response.ok) {
  //       const data = await response.json()
  //       console.log(data)
  //       alert("Delete ho gya")
  //     }
  //   }
  //   else {
  //     alert("Login karke aao pehle")
  //   }
  // }

  const handlePasswordError = (e) => {
    console.log(e.target.value);
    if (validator.isStrongPassword(e.target.value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPasswordError(null)
    } else {
      setPasswordError("Must contain minimum 8 digits with an uppercase letter, a lowercase letter, a digit and a special character.")
    }
  }

  const handleRegister = async (e) => {
    console.log(1);
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      alert("You are already logged in.");
    } else {
      const user = {
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirm: e.target.password_confirm.value,
      };
      console.log(user)
      const url = "http://127.0.0.1:5000/register?include_auth_token";
      const init_ob = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      console.log(2);
      const res = await fetch(url, init_ob);
      console.log(res)
      console.log(3);
      if (res && res.ok) {
        const data = await res.json();
        const auth_token = data.response.user.authentication_token;
        localStorage.setItem("token", auth_token);
        console.log(4);
        const user_details = {
          user_email: e.target.email.value,
          name: e.target.name.value,
          organisation: e.target.organisation.value,
          pass_year: e.target.pass_year.value,
          mobile_no: e.target.mobile_no.value,
        };
        const url = "http://127.0.0.1:5000/api/register/user_details";
        const init_ob = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authentication-Token": auth_token
          },
          body: JSON.stringify(user_details),
        };
        console.log(5);
        const res1 = await fetch(url, init_ob);
        console.log(6);
        if (res1 && res1.ok) {
          alert("Successfully Registered and logged in.");
          console.timeStamp();
          navigate_to(`/add-testimonial`);
        }
        else {
          const token = localStorage.getItem('token');
          if (token) {
            const url = "http://127.0.0.1:5000/api/user/delete/" + e.target.email.value;
            const init_ob = {
              method: "DELETE",
              mode: 'cors',
              headers: {
                'Authentication-Token': token,
              },
            };
            const response = await fetch(url, init_ob);
            if (response && response.ok) {
              // const data = await response.json()
              localStorage.removeItem('token');
              // console.log(data)
              alert("Registration Unsuccessful. Check the details and try again.");
            }
          }
          else {
            alert("You are not logged in 04.");
          }
        }
      }
    }
  };

  useEffect(() => async () => {
    const token = localStorage.getItem('token');
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
        navigate_to("/add-testimonial");
      }
      else {
        localStorage.removeItem('token');
        navigate_to("/");
        console.log("You are not logged in06.");
      }
    }
  });
  return (
    <div className="form_page_wrapper">
      <form action="" onSubmit={handleRegister} className="form_wrapper">
        <div className="form_logo_wrapper"><img className="form_logo" src={logo} alt="" /><div className="form_logo_header">Register Here</div></div>
        <div className="formWrapperFields">
          <TextField className="FormInput" type="email" name="email" label="Enter your email" variant="standard" required color="warning" InputProps={style} />
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="password" name="password" label="Enter your password" variant="standard" required color="warning" onChange={handlePasswordError} InputProps={style} />
          {passwordError && <p className="helperText formErrorMsg">{passwordError}</p>}
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="password" name="password_confirm" label="Confirm your password" variant="standard" required color="warning" InputProps={style} />
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="text" name="name" label="Enter your name" variant="standard" required color="warning" InputProps={style} />
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="text" name="organisation" label="Organisation/Department" variant="standard" required color="warning" InputProps={style} />
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="tel" name="mobile_no" label="Enter your Mobile No." variant="standard" required color="warning" InputProps={style} />
        </div>

        <div className="formWrapperFields">
          <TextField className="FormInput" type="number" name="pass_year" label="Enter your Passing Year" variant="standard" color="warning" step="0" InputProps={style} />
          {<p className="helperText"><i className="fa-regular fa-circle-question" /> If you are a student of NIT Agartala</p>}
        </div>

        <Button type="submit" color="warning" variant="contained">Register</Button>
      </form>
    </div>
  );
}

export default UserRegistration;
