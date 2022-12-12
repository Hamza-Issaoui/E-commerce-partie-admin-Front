import axios from "axios";
//pour l'authorisation jwt
const TOKEN =  JSON.parse(localStorage.getItem("user"))  ?  JSON.parse(localStorage.getItem("user")).token : ""
//console.log(TOKEN)

export default axios.create({
    baseURL: "http://localhost:4000",

    //l'emplacement du token
headers: {
    authorization: `${TOKEN}`
}

})

