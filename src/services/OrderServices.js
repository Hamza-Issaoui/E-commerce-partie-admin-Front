import http from "./AxiosContext"


const getAll = () => {
    return http.get('/order/GetAllOrders')
}
const deleteOrder = (id) => {
    return http.delete(`/order/deleteOrder/${id}`)
}
const update = (id, data) => {
    
    return http.put(`/order/UpdateOrder/${id}`, data)
}
const getOrder = (id) => {
    
    return http.get(`/order/GetOrderById/${id}`)
}

export default {
     
    getAll ,
    deleteOrder,
    update,
    getOrder
   
   
}