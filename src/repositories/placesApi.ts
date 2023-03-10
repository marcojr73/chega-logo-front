import authorizationApi from "@/config/authorizationApi"
import axiosInstance from "@/config/axiosInstance"

async function uploadCsvApi(file: any) {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            type: "formData",
            authorization: `Bearer ${token}`
        }
    }
    const response = await axiosInstance.post("/places", file, config)
    return response.data
}

async function findPlacesApi(page: number){
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.get(`/places?page=${page}`, config)
    return response.data
}

async function deletePlacesApi(id: number){
    const config = authorizationApi.getHeadersConfig()
    const response = await axiosInstance.delete(`/places/${id}`, config)
    return response.data
}

export default {
    uploadCsvApi,
    findPlacesApi,
    deletePlacesApi
}  