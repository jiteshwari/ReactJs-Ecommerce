import axios from "axios";
const axiosapi= axios.create({
    baseURL: "http://makeup-api.herokuapp.com/api/v1"
});
export  default axiosapi;