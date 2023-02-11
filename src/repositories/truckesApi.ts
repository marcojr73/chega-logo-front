import authorizationApi from "@/config/authorizationApi"
import axiosInstance from "@/config/axiosInstance"
import { Ttruck } from "@/interfaces"

async function newTruckApi(data: Ttruck) {
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.post("/truck", data, config)
    return response.data
}

export default {
    newTruckApi
}  