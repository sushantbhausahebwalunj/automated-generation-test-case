import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const signup = async () => {
    if(!name){
      alert("Name is required");
      return;
    }

    if(!email){
      alert("Email is required");
      return;
    }

    if(!password){
      alert("Password is required");
      return;
    }

    if(!mobile){
      alert("Mobile is required");
      return;
    }

    const response = await axios.post("/signup", {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    })

    alert(response?.data?.message);

    if(response?.data?.success){
      window.location.href = "/login";
    }
  };

  useEffect(()=>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if(storageUser?.email){
      alert("You are already logged in!");
      window.location.href = "/";
    }

  }, [])

  return (
    <div>
      <Navbar />
      <form className="signup-form">
        <h1 className='text-center'>Signup</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text"
            placeholder="Enter your name"
            id="name"
            className="form-group"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email"
            placeholder="Enter your email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password"
            placeholder="Enter your password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="text"
            placeholder="Enter your mobile"
            id="mobile"
            className="form-control"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }} />
        </div>


        <button type="button"
                className="btn signup-btn"
                onClick={signup}>
          Signup
        </button>

        <p className="text-right">
          <Link to="/login">Already have an account?</Link>
        </p>
      </form>
      <Footer />
    </div>
  )
}

export default Signup