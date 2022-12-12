import http from "./AxiosContext"

const create = (data) => {
    return http .post('/product/createProduct', data)
}
const getAll = () => {
    return http .get('/product/GetAllProducts')
}
const deleteProduct = (id) => {
    return http .delete(`/product/deleteProduct/${id}`)
}
const update = (id, data) => {
    
    return http.put(`/product/UpdateProduct/${id}`, data)
}
const getProduct = (id) => {
    
    return http .get(`/product/GetProductById/${id}`)
}

export default {
    create,
    getAll ,
    deleteProduct,
    update,
    getProduct
}