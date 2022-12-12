import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CategoryServices from '../../services/CategoryServices';

const GetAllCategories = () => {

  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('')
   const navigate = useNavigate()

   const GetAllCats = () => {
    CategoryServices.getAll().then(res => {
        //console.log(res);
        setCategory(res.data.data)
    }
    ).catch(error => {
        console.log(error);
    }) 
}

const deleteCategory = (id) => {

  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

          CategoryServices.deleteCategory(id).then(res => {
              console.log(res)
              GetAllCats();
              setMessage(res.data.msg)
              setShow(true)
              setTimeout(() => {
                setShow(false)
              }, 5000);
              
          })
          .catch(error => {
              console.log(error);
          }) 

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

}

useEffect(() => {
  GetAllCats();
  
}, [])

useEffect(() => {
  const getByName = async () => {
    const res = await axios.get(`http://localhost:4000/cat/GetCategoryByName?q=${query}`)
    setCategory(res.data)
  }
  if (query.length === 0 || query.length > 1)
  getByName()
  }, [query])




  return (
    <div>
    <div class="alert alert-info" role="alert" style={{"display": show ? 'block' : 'none'}}>
{message}
</div>
  <li className="xn-search">
    <form role="form">
      <input type="text" name="q" placeholder="Search..." onChange = {(e) => setQuery(e.target.value)} />
    </form>
  </li>  
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div>
        <div class="panel-heading">
          <h3 class="panel-title">Responsive tables</h3>
        </div>
        <div>
        <button style={{display:"flex", width:"150px", marginLeft:"950px"}} type="button" class="btn btn-primary">Add Category</button>
        </div>
        </div>
        <div class="panel-body panel-body-table">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-actions">
              <thead>
                <tr>
                  
                  <th width="100">index</th>
                  <th width="100">Name</th>
                  <th width="100">Description</th>
                  <th width="100">actions</th>
                </tr>
              </thead>
              <tbody>
              {
                category?.map ((item, index) => {
                  return(
                <tr id="trow_1">
                  <td class="text-center">{index}</td>
                  <td>
                    {item.name}
                  </td>
                 
                  <td>{item.description}</td>
                 
                  <td>
                    <button onClick={() => navigate(`/updatecats/${item._id}`)} class="btn btn-default btn-rounded btn-sm">
                      <span class="fa fa-pencil"></span>
                    </button>
                    <button
                      class="btn btn-danger btn-rounded btn-sm"
                      onClick= {() => deleteCategory(item._id)}
                    >
                      <span class="fa fa-times"></span>
                    </button>
                  </td>
                </tr>
               )
              })
             }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default GetAllCategories