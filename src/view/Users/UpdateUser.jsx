import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthServices from "../../services/AuthServices";

const UpdateUser = () => {

const [data , setData] = useState({})
const [picture, setPicture] = useState('')
const {id} = useParams()
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

    formdata.append("city", data.city)
    formdata.append("photo", picture)

    AuthServices.update(id,formdata).then(res => {
      console.log(res)
      setData(res.data.data)
      // ajoutée pour la connexion entre page login et register
      navigate("/getusers")

    }).catch(err=>{
      console.log(err)
    })

  }


const getById = () => {

    AuthServices.getOne(id).then(res => {
        //console.log(res)
        setData(res.data.data)
    }).catch(error => {
        console.log(error)
    })
}

useEffect(() => {
 getById()
}, [])




  return (
    <div>
      <div class="page-content-wrap">
        <div class="row">
          <div class="col-md-12">
            <form class="form-horizontal" onSubmit={submitHandler}>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <strong>update</strong> user
                  </h3>
                  <ul class="panel-controls">
                    <li>
                      <a href="#" class="panel-remove">
                        <span class="fa fa-times"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="panel-body">
              
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Fullname
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.fullname} type="text" class="form-control" name="fullname" onChange={handelChange} />
                      </div>
                      
                    </div>
                  </div>

                  {/* <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Password
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-unlock-alt"></span>
                        </span>
                        <input type="password" class="form-control" />
                      </div>
                      <span class="help-block">Password field sample</span>
                    </div>
                  </div> */}
                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Email
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.email} type="email" class="form-control" name="email" onChange={handelChange} />
                      </div>
                     
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      City
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.city} type="text" class="form-control" name="city" onChange={handelChange} />
                      </div>
                     
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label">Picture:</label>
                    <div class="col-md-9">
                      <label class="form-label" for="customFile">
                        Insert Picture
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="customFile"
                        value={data.data?.picture}
                        name="picture" onChange={handelPicture}
                      />
                      <span class="help-block">Required</span>
                    </div>
                  </div>
                </div>
                <div class="panel-footer">
          
                  <button class="btn btn-primary pull-right" type="submit" >Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
