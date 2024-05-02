import React, { useState } from "react";
import { useFormik } from "formik";

import "./Login.css";

const Login = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    error: { name: "", email: "", phone: "", password: "" },
  });

  //validation for email
  const isEmail = (email) =>
    /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/i.test(email);

  //validation for password
  const isPassword = (pass) =>
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,20}$/i.test(pass);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Value: ", state);
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    // console.log(`${name}:${value}`);
    let err = state.error;
    switch (name) {
      case "name":
        if (value.length < 5) {
          err.name = "Name should be more than 5 characters";
        }
    }

    setState({ ...state, [name]: value });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="header">
          <h1>Sign Up</h1>
        </div>
        <hr />
        <div className="label-container">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              placeholder="Phone No."
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
        </div>
        <hr />
        <div className="button-container">
          <input type="submit" value="SignUp" />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
