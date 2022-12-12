import axios from "axios";
import React, { useState } from "react";
import "./forgetPassword.css";

const ForgetPassword = () => {

  const [email, setEmail] = useState('');

  const [show, setShow] = useState(false);

const [message, setMessage] = useState('');
  //console.log(email);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/forgetPassword", {email});
      console.log(res);
       setMessage(res.data.msg)
     setShow(true)
     setTimeout(() => {
       setShow(false)
     }, 5000); 
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg)
                setShow(true)
                setTimeout(() => {
                  setShow(false)
                }, 5000);
    }
  };

  return (
    <div>
       <div class="alert alert-info" role="alert" style={{"display": show ? 'block' : 'none'}}>
          {message}
       </div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white text-center p-5 mt-3 center">
          <h3>Forgot Password </h3>
          <p>please enter your email</p>
          <form className="pb-3" >
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email*"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
          <button type="button" className="btn" onClick={submitHandler}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
