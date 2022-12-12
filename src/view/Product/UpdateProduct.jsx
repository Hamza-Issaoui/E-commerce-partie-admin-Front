import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductServices from "../../services/ProductServices";

const UpdateProduct = () => {

    const [data , setData] = useState({})
   
    const [galleries, setGalleries] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const handelChange = (e) => {
        //console.log(e)
        setData({
          ...data, 
          [e.target.name] : e.target.value
        });
      };

      const handelGalleries = (e) => {
        //console.log(e)
        setGalleries(e.target.files);
      };

      const submitHandler = (e) => {
        e.preventDefault()
    
        const formdata = new FormData()

        for (let i = 0; i < galleries.length; i++) {
            formdata.append("photos", galleries[i])
            
          }
    
        formdata.append("ref", data.ref)
        formdata.append("price", data.price)
    
        formdata.append("description", data.description)
        formdata.append("qte", data.qte)
    
        ProductServices.update(id,formdata).then(res => {
          console.log(res)
          setData(res.data.data)
          // ajoutée pour la connexion entre page login et register
          navigate("/getproducts")
    
        }).catch(err=>{
          console.log(err)
        })
    
      }

      const getById = () => {

        ProductServices.getProduct(id).then(res => {
            console.log(res)
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
                    <strong>Update</strong> Product
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
                      Ref
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.ref} type="text" class="form-control" name="ref" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Price
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.price} type="number" class="form-control" name="price" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Description
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.description} type="text" class="form-control" name="description" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Qte
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.qte} type="number" class="form-control" name="qte" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 control-label">Galleries:</label>
                    <div class="col-md-9">
                      <label class="form-label" for="customFile">
                        Insert Picture
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="customFile"
                        value={data.data?.galleries}
                        name="galleries" onChange={handelGalleries}
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

export default UpdateProduct;
