import React, { useState } from "react";
import NavBar from "../../components/Theme_1/NavBar";
import Router from 'next/router'
import { registerUserRequest } from "../../services/auth";



const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [subdomain, setSubdomain] = useState("");

  //  post data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      subdomain: subdomain,
    };
    const res = await registerUserRequest(payload);
    if(!res.api_error){
      console.log({res});
      alert(res?.api_data?.message)
      setAuth({ token: res.api_data.token })

    }else{
      console.log({res});
      alert("Error:",res?.api_data)
    }
    

    // if(data.error === true){
    //  alert(data.message)
    // }else{
    //   alert(data.message)
    //   window.location.href=`http://${data.result.subdomain}.localhost:3000`


    // }

  };
  return (
    <>
        <NavBar/>

    <div className="signin-section">
      <div className="inner-container">
        <form className="form" onSubmit={(e)=>handleFormSubmit(e)}>
          <div className="form-header">
            <h1>Sign Up</h1>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

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
          <div className="form-group">
            <label htmlFor="subdomain">sub Domain</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="subdomain"
              onChange={(e) => setSubdomain(e.target.value)}
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

// export async function getServerSideProps(context) {

//   const res = await signupUserApi('akshayr@gmail.com', 'akshay', 'rathod','password','Akdomain');
//   console.log(res)
//   return {
//     props: {},
//   }
// }

export default Register;
