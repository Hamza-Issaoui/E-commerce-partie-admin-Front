import { Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryServices from '../../services/CategoryServices';
import SubCategoryServices from '../../services/SubCategoryServices';
const { Option } = Select;

const CreateSubCategory = () => {

    const [data, setData] = useState({}); //creer une copie du data
    const [categories, setCategories] = useState([])
    //console.log("categories",categories)
    //const navigate = useNavigate()

    const handleChange = (value) => {
     console.log(`selected ${value}`);
      setData(prev=>({
        ...prev,
        "category":value
      }))
  
      };

      const handelChange = (e) => {
        //console.log(e)
        setData({
          ...data, 
          [e.target.name] : e.target.value
        });
      };

      const submitHandler = (e) => {
        e.preventDefault()
        
        SubCategoryServices.create(data).then(res => {
            //console.log("addsubCategory",res)
            setData(res.data.data)
            // ajoutée pour la connexion entre page login et register
            //navigate("/")
      
          }).catch(err=>{
            console.log(err)
          })
      
        }

        const getAllCat =()=>{
            CategoryServices.getAll().then(res=>{
              console.log("mysubbbbbbb",res)
              setCategories(res.data.data)
            })
          }

          useEffect(() => {
            getAllCat()
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
            <label class="col-md-3 control-label">Name:</label>
            <div class="col-md-9">
              <input
                type="text"
                class="validate[required,maxSize[8]] form-control"
                name="name"
                onChange={handelChange}
              />
              <span class="help-block">Required, max size = 8</span>
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
            <label class="col-md-3 control-label">Category:</label>
            <div class="col-md-9">
              <label class="form-label" for="customFile">
                Choose Category
              </label>
              <Select defaultValue="category" style={{ width: 120, }}  name="category" onChange={handleChange}>
              {categories.map(category=>{
                return(
                  <>
                  <Option key={category._id}  >{category.name}</Option>
                  </>
                )
              })}


              </Select>
               
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
  )
}

export default CreateSubCategory