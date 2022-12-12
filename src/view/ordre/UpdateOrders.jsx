import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OrderServices from '../../services/OrderServices'

const UpdateOrders = () => {

    const [data , setData] = useState({})
    const {id} = useParams()
 
  const navigate = useNavigate()

 const handelChange = (e) => {
     //console.log(e)
     setData({
       ...data, 
       [e.target.name] : e.target.value
     });
   };

   const submitHandler = (e) => {
    e.preventDefault()

    OrderServices.update(id,data).then(res => {
        console.log(res)
        setData(res.data.data)
        navigate("/getorders")
  
      }).catch(err=>{
        console.log(err)
      })
    }

    const getById = () => {
        OrderServices.getOrder(id).then(res => {
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
                    <strong>Update</strong> Order
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
                      Price Total
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.priceTotal} type="text" class="form-control" name="priceTotal" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Quantity total
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.qtyTotal} type="text" class="form-control" name="qtyTotal" onChange={handelChange} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-3 col-xs-12 control-label">
                      Pay
                    </label>
                    <div class="col-md-6 col-xs-12">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="fa fa-pencil"></span>
                        </span>
                        <input value={data.pay} type="text" class="form-control" name="pay" onChange={handelChange} />
                      </div>
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
  )
}

export default UpdateOrders