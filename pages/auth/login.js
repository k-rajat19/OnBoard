import React, { useState } from "react";
import Router from 'next/router'
import NavBar from "../../components/Theme_1/NavBar";
import { loginUserRequest } from "../../services/auth";
import { userAuth } from "../../services/Atom";
import { useRecoilState } from 'recoil';


const Signin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState([]);

  const [auth, setAuth] = useRecoilState(userAuth)

  // const ls = JSON.parse(localStorage.getItem("auth-edu-onboard"));

  // console.log('Ls is', ls.token)
  // post api

  // console.log(userData.result.subdomain)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    const res = await loginUserRequest(payload);
    if(!res.api_error){
      console.log({res});
      console.log("t" + res.api_data.token);
      // Handle Token in localstorage here
      setAuth({ token: res.api_data.token })
      alert("Login Successful")
      Router.push(`/`)

      
    }else{
      console.log({res});
      alert("Error:",res?.api_data)
    }
  };

  return (
    <>
    <NavBar/>

    <div className="signin-section">

      <div className="inner-container">
        <form className="form" onSubmit={e=>handleFormSubmit(e)}>
          <div className="form-header">
            <h1>Sign In</h1>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-group">

            <label htmlFor="firstName">First Name</label>
            <input type="text" name="email" className="form-control" placeholder="First Name" />
          </div>
          <div className="form-group">

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="email" className="form-control" placeholder="Last Name" />
          </div> */}
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="email"
              className="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signin;
