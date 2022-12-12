import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";

const Login = () => {
// ajoutée pour la connexion entre page login et register

    const navigate = useNavigate()

    // pour afficher les message d'erreur
    const initialValues = { email: "", password: "" };
    const [formErrors, setFormErrors] = useState({});
    
    const [isSubmit, setIsSubmit] = useState(false);

    // creer une copie du data
    const [data, setData] = useState( initialValues)

    const handelChange = (e) => {
        //console.log(e)
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault()

        AuthServices.login(data).then(res => {
            console.log(res)
            setData(res.data)

            window.location = "/"
            localStorage.setItem("user", JSON.stringify(res.data))

            // ajoutée pour la connexion entre page login et register
            //navigate("/")


        }).catch(err => {
            console.log(err)

            setFormErrors(validate(data, err));
            setIsSubmit(true);
        })

    }

    useEffect(() => { 
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(data);
        }
      }, [formErrors]);

      const validate = (values, err) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // afficher les erreurs du email
        if (err.response && err.response.status === 404 ) {
            errors.email = err.response.data.msg 
        }
        
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        // afficher les erreurs du mot de passe
        if (err.response && err.response.status === 406 ) {
            errors.password = err.response.data.msg
        }

        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
    

  return (
    <div class="login-container">
      <div class="login-box animated fadeInDown">
        <div class="login-logo"></div>
        <div class="login-body">
          <div class="login-title">
            <strong>Welcome</strong>, Please login
          </div>
          <form action="index.html" class="form-horizontal" method="post" onSubmit={submitHandler}  >
            <div class="form-group">
              <div class="col-md-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handelChange}
                  
                />
                <p style={{color:"white"}}>{formErrors.email}</p>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handelChange}
                />
                <p style={{color:"white"}}>{formErrors.password}</p>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <a href="/forgetpass" class="btn btn-link btn-block">
                  Forgot your password?
                </a>
              </div>
              <div class="col-md-6">
                <button class="btn btn-info btn-block">Log In</button>
              </div>
            </div>
          </form>
        </div>
        <div class="login-footer">
          <div class="pull-left">&copy; 2014 AppName</div>
          <div class="pull-right">
            <a href="#">About</a> |<a href="#">Privacy</a> |
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
