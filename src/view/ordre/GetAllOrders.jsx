import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import OrderServices from '../../services/OrderServices';

const GetAllOrders = () => {

  const [order, setOrder] = useState([]);
  const [show, setShow] = useState(false);
  
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('')
   const navigate = useNavigate()

   const GetAllOrders = () => {
    OrderServices.getAll().then(res => {
        //console.log(res);
        setOrder(res.data.data)
    }
    ).catch(error => {
        console.log(error);
        
         //ajouter pour l'expiration du token (jwt)
        if(error.response && error.response.status >= 401) {
          alert(error.response.data.msg)
          window.location = "/login"

        }
    }) 
}

const deleteOrder = (id) => {

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

          OrderServices.deleteOrder(id).then(res => {
              console.log(res)
              GetAllOrders();
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
  GetAllOrders();
  
}, [])





  return (
    <div>
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
        <button style={{display:"flex", width:"150px", marginLeft:"950px"}} type="button" class="btn btn-primary">Add Order</button>
        </div>
        </div>
        <div class="panel-body panel-body-table">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-actions">
              <thead>
                <tr>
                  
                  <th width="100">index</th>
                  <th width="100">Ref</th>
                  <th width="100">Price Total</th>
                  <th width="100">Qte Total</th>
                  <th width="100">Product</th>
                  <th width="100">actions</th>
                </tr>
              </thead>
              <tbody>
              {
                order?.map ((item, index) => {
                  return(
                <tr id="trow_1">
                  <td class="text-center">{index}</td>
                  <td>
                    {item.ref}
                  </td>
                 
                  <td>{item.priceTotal}</td>
                 
                  <td>{item.qtyTotal}</td>

                  <td>{item.products.length}</td>

                  <td>
                    
                  <button onClick={() => navigate(`/orderdetails/${item._id}`)}  class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-eye" aria-hidden="true"></i></button>

                    <button onClick={() => navigate(`/updateorders/${item._id}`)} class="btn btn-default btn-rounded btn-sm">
                      <span class="fa fa-pencil"></span>
                    </button>
                    
                    <button
                      class="btn btn-danger btn-rounded btn-sm"
                      onClick= {() => deleteOrder(item._id)}
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
    </div>
  )
}

export default GetAllOrders