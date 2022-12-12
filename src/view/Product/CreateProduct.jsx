import React, { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";
import SubCategoryServices from "../../services/SubCategoryServices";

import { Select } from 'antd';
const { Option } = Select;
const CreateProduct = () => {


    const [data, setData] = useState({}); //creer une copie du data
    const [subcategories, setSubcategories] = useState([])
    const [galleries, setGalleries] = useState([])
    


    const handleChange = (value) => {
      //console.log(`selected ${value}`);
    setData(prev=>({
      ...prev,
      "subCategory":value
    }))

    };
  
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
      formdata.append("subCategory", data.subCategory)

      
  
      ProductServices.create(formdata).then(res => {
        console.log("addproduct",res)
        setData(res.data.data)
        // ajoutée pour la connexion entre page login et register
        //navigate("/")
  
      }).catch(err=>{
        console.log(err)
      })
  
    }
    const getAllsub =()=>{
      SubCategoryServices.getAll().then(res=>{
        //console.log("mysubbbbbbb",res)
        setSubcategories(res.data.data)
      })
    }
useEffect(() => {
  getAllsub()
}, [])




  return (
    <div>
      <div class="block">
        <h4>Validation Engine</h4>
        <form
          id="validate"
          role="form"
          class="form-horizontal"
          action="javascript:alert('Form #validate submited');"
          onSubmit={submitHandler}
        >
          <div class="form-group">
            <label class="col-md-3 control-label">Ref:</label>
            <div class="col-md-9">
              <input
                type="text"
                class="validate[required,maxSize[8]] form-control"
                name="ref"
                onChange={handelChange}
              />
              <span class="help-block">Required, max size = 8</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Price:</label>
            <div class="col-md-9">
              <input
                type="number"
                class="validate[required,minSize[5],maxSize[10]] form-control"
                id="price"
                name="price"
                onChange={handelChange}
              />
              <span class="help-block">
                Required, min size = 5, max size = 10
              </span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Description:</label>
            <div class="col-md-9">
              <input
                type="text"
                class="validate[required,maxSize[8]] form-control"
                name="description" 
                onChange={handelChange}
                />
              <span class="help-block">Required</span>
            </div>
          </div>



          <div class="form-group">
            <label class="col-md-3 control-label">sub:</label>
            <div class="col-md-9">
              <label class="form-label" for="customFile">
                choose subCategory
              </label>
              <Select defaultValue="subcat" style={{ width: 120, }}  name="subCategory" onChange={handleChange}>
              {subcategories.map(sub=>{
                return(
                  <>
                  <Option key={sub._id}  >{sub.name}</Option>
                  </>
                )
              })}


              </Select>
               
              <span class="help-block">Required</span>
            </div>
          </div>




          <div class="form-group">
            <label class="col-md-3 control-label">Galleries:</label>
            <div class="col-md-9">
              <label class="form-label" for="customFile">
                Insert Picture
              </label>
              <input multiple type="file" class="form-control" id="customFile" name="galleries" onChange={handelGalleries}
               />
              <span class="help-block">Required</span>
            </div>
          </div>








          <div class="form-group">
            <label class="col-md-3 control-label">Quantité:</label>
            <div class="col-md-9">
              <input
                type="number"
                class="validate[required,minSize[5],maxSize[10]] form-control"
                name="qte"
                onChange={handelChange}
              />
              <span class="help-block">
                Required, min size = 5, max size = 10
              </span>
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
                  />
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

export default CreateProduct;
