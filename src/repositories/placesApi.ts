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

export default {
    uploadCsvApi,
}  