import { Tuser } from "../interfaces"
import axiosInstance from "@/config/axiosInstance"

async function authApi(data: Tuser, url: string) {
    const response = await axiosInstance.post(url, data)
    return response.data
}

export default {
    authApi
}  