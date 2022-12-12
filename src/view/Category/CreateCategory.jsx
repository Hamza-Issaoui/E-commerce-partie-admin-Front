import React, { useState } from 'react'
import CategoryServices from '../../services/CategoryServices';





const CreateCategory = () => {

    const [data, setData] = useState({}); //creer une copie du data

    const handelChange = (e) => {
        //console.log(e)
        setData({
          ...data, 
          [e.target.name] : e.target.value
        });
      };

      const submitHandler = (e) => {
        e.preventDefault()
        
        CategoryServices.create(data).then(res => {
            console.log("addCategory",res)
            setData(res.data.data)
            // ajoutée pour la connexion entre page login et register
            //navigate("/")
      
          }).catch(err=>{
            console.log(err)
          })
      
        }

        



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

export default CreateCategory