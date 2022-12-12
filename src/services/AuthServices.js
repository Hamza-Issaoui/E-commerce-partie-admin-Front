import http from "./AxiosContext"

const register = (data) => {
    return http .post('/registerAdmin', data)
}
const login = (data) => {
    return http .post('/login', data)
}
const update = (id, data) => {
    
    return http .put(`/updateProfile/${id}`, data)
}
const getOne = (id) => {
    return http .get(`/getOne/${id}`)
}



export default {
    register,
    login,
    update,
    getOne,
   
}