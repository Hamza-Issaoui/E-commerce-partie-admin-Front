import http from "./AxiosContext"

const getAll = (data) => {
    return http .get('/getAllUsers', data)
}
const deleteUser = (id) => {
    return http .delete(`/deleteUser/${id}`)
}

export default {
    getAll,
    deleteUser
}