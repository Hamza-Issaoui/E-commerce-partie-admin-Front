import http from "./AxiosContext"

const create = (data) => {
    return http .post('/cat/createCategory', data)
}
const getAll = () => {
    return http.get('/cat/GetAllCategories')
}
const deleteCategory = (id) => {
    return http .delete(`/cat/deleteCategory/${id}`)
}
const update = (id, data) => {
    
    return http.put(`/cat/UpdateCategory/${id}`, data)
}
const getCategory = (id) => {
    
    return http.get(`/cat/GetCategoryById/${id}`)
}

export default {
     
    create,
    getAll ,
    deleteCategory,
    update,
    getCategory
   
   
}