import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";

const Register = () => {
  const [data, setData] = useState({}); //creer une copie du data

  const [picture, setPicture] = useState('')

// ajoutée pour la connexion entre page login et register
const navigate = useNavigate()

  const handelChange = (e) => {
    //console.log(e)
    setData({
      ...data, 
      [e.target.name] : e.target.value
    });
  };
  const handelPicture = (e) => {
    //console.log(e)
    setPicture(e.target.files[0]);
  };
  const submitHandler = (e) => {
    e.preventDefault()

    const formdata = new FormData()

    formdata.append("fullname", data.fullname)
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    formdata.append("phone", data.phone)
    formdata.append("photo", picture)

    AuthServices.register(formdata).then(res => {
      console.log(res)
      setData(res.data.data)
      // ajoutée pour la connexion entre page login et register
      navigate("/login")

    }).catch(err=>{
      console.log(err)
    })

  }


  return (
    <div>
      <div class="block">
        <h4>Validation Engine</h4>
        <form
           onSubmit={submitHandler}  
        >
          <div class="form-group">
            <label class="col-md-3 control-label">Fullname:</label>
            <div class="col-md-9">
              <input
                type="text"
                class="validate[required,maxSize[8]] form-control"
                name="fullname"
                onChange={handelChange}
              />
              <span class="help-block">Required, max size = 8</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-9">
              <input
                type="password"
                class="validate[required,minSize[5],maxSize[10]] form-control"
                id="password"
                name="password"
                onChange={handelChange}
              />
              <span class="help-block">
                Required, min size = 5, max size = 10
              </span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Email:</label>
            <div class="col-md-9">
              <input
                type="email"
                name="email"
                class="validate[required,equals[password]] form-control"
                onChange={handelChange}
              />
              <span class="help-block">Required, equals Password</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Phone:</label>
            <div class="col-md-9    ">
              <input
                type="number"
                class="validate[required,custom[integer],min[18],max[120]] form-control"
                name="phone"
                onChange={handelChange}
              />
              <span class="help-block">
                Required, integer, min value = 18, max = 120
              </span>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-3 control-label">Picture:</label>
            <div class="col-md-9">
              <label class="form-label" for="customFile">
                Insert Picture
              </label>
              <input type="file" class="form-control" id="customFile" name="picture"  onChange={handelPicture}/>
              <span class="help-block">Required</span>
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-12">
              <label class="checkbox">
                <label>
                  <input
                    type="checkbox"
                    class="validate[required]"
                    name="terms"
                    value="1"
                  />{" "}
                  Yes, I accept your terms and conditions.
                </label>
              </label>
            </div>
          </div>
          <div class="btn-group pull-right">
        
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
