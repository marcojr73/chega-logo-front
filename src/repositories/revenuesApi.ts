import authorizationApi from "@/config/authorizationApi"
import axiosInstance from "@/config/axiosInstance"

async function postRevenueApi(value: number){
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.post("revenues", {value: Math.round(value)}, config)
    return response.data
}

export default {
    postRevenueApi
}