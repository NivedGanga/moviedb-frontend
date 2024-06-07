import axios from "axios";
import { BaseUrl } from "../utils/EndPoints";


const axiosInstance = axios.create({
    baseURL: BaseUrl,
    withCredentials: true
})


export default axiosInstance;