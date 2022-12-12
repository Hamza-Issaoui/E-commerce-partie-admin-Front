import http from "./AxiosContext"

const create = (data) => {
    return http .post('/subcat/createSubCategory', data)
}
const getAll = () => {
    return http.get('/subcat/GetAllSubCategories')
}
const deleteSubCategory = (id) => {
    return http .delete(`/subcat/deleteSubCategory/${id}`)
}
const update = (id, data) => {
    
    return http.put(`/subcat/UpdateSubCategory/${id}`, data)
}
const getSubCategory = (id) => {
    
    return http.get(`/subcat/GetSubCategoryById/${id}`)
}


export default {

    create,
    getAll ,
    deleteSubCategory,
    update,
    getSubCategory
   
}