import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../forgetPassword/forgetPassword.css";

const ResetPassword = () => {

const [password, setPassword] = useState('')
const {resetPassWordToken} = useParams()
const navigate = useNavigate()

const submitHandler = async (e) => {
    e.preventDefault()
    try {
     const res = await axios.post(`http://localhost:4000/resetPassword/${resetPassWordToken}`, {password})   
     console.log(res);
     navigate('/login')
    } catch (error) {
     console.log(error)   
     
    }
}

  return (
    <div>
       
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white text-center p-5 mt-3 center">
          <h3>Reset Password </h3>
          <p>please enter your password</p>
          <form className="pb-3">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password*"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <button type="button" className="btn" onClick={submitHandler} >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
