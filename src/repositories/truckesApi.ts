import authorizationApi from "@/config/authorizationApi"
import axiosInstance from "@/config/axiosInstance"
import { Ttruck } from "@/interfaces"

async function newTruckApi(data: Ttruck) {
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.post("/truckes", data, config)
    return response.data
}

async function findTruckesApi(page: number) {
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.get(`/truckes?page=${page}`, config)
    return response.data
}

async function updateTruckApi(data: Ttruck) {
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.put("/truckes", data, config)
    return response.data
}

async function deleteTruckApi(licensePlate: string) {
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.delete(`/truckes/${licensePlate}`, config)
    return response.data
}


export default {
    newTruckApi,
    findTruckesApi,
    updateTruckApi,
    deleteTruckApi
}  