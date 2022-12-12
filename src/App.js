import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgetPassword from "./Auth/forgetPassword/ForgetPassword";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ResetPassword from "./Auth/resetPassword/ResetPassword";
import Container from "./components/Container";
import CreateCategory from "./view/Category/CreateCategory";
import GetAllCategories from "./view/Category/GetAllCategories";
import UpdateCategory from "./view/Category/UpdateCategory";
import Home from "./view/home/Home";
import GetAllOrders from "./view/ordre/GetAllOrders";
import UpdateOrders from "./view/ordre/UpdateOrders";
import CreateProduct from "./view/Product/CreateProduct";
import GetAllProduct from "./view/Product/GetAllProduct";
import UpdateProduct from "./view/Product/UpdateProduct";
import CreateSubCategory from "./view/SubCategory/CreateSubCategory";
import { GetAllSubCategories } from "./view/SubCategory/GetAllSubCategories";
import UpdateSubCategory from "./view/SubCategory/UpdateSubCategory";
import GetAllUsers from "./view/Users/GetAllUsers";
import UpdateUser from "./view/Users/UpdateUser";
import Error from "./components/error/Error"
import OrderDetails from "./view/ordre/OrderDetails";


function App() {

  //Affichage seulement pour user
const user = JSON.parse(localStorage.getItem("user"))
//console.log("Userrrr",user?.__t)

// private route for user
const PrivateRoute = ({children}) => {
return user ? children : <Navigate to = "/login"/>

}

// private route for admin
const PrivateRoute1 = ({children}) => {
  return user?.__t ==="Admin" ? children : <Navigate to = "/error"/>
  
  }

  return (
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Home />   }> 
      <Route index path="/" element={<Container />}/>
      <Route index path="/getusers" element={<GetAllUsers />}/>
      <Route index path="/updateUsers/:id" element={<PrivateRoute1><UpdateUser /></PrivateRoute1>}/>

      <Route index path="/createproduct" element={<CreateProduct />}/>
      <Route index path="/getproducts" element={<GetAllProduct />}/>
      <Route index path="/updateProduct/:id" element={<UpdateProduct />}/>

      <Route index path="/createsubcat" element={<CreateSubCategory />}/>
      <Route index path="/getsubcats" element={<GetAllSubCategories />}/>
      <Route index path="/updatesubcats/:id" element={<UpdateSubCategory />}/>

      <Route index path="/createcat" element={<CreateCategory />}/>
      <Route index path="/getcats" element={<GetAllCategories  />}/>
      <Route index path="/updatecats/:id" element={<UpdateCategory />}/>

      <Route index path="/getorders" element={<GetAllOrders  />}/>
      <Route index path="/updateorders/:id" element={<UpdateOrders />}/>



      </Route>
      <Route index path="/orderdetails" element={<OrderDetails />}/>

  
      <Route path="/resetPassword/:resetPassWordToken" element={<ResetPassword />}/>
      <Route path="/forgetpass" element={<ForgetPassword />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/error" element={<Error />}/>

      
    </Routes>
    
  </BrowserRouter>
  )
}

export default App;
