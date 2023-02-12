import React, { useCallback } from "react"
import PlacesContainer from "@/styles/homeStyles/placesContainer"
import { NextComponentType } from "next"
import { useDropzone } from "react-dropzone"
import placesApi from "@/repositories/placesApi"
import showError from "@/utils/showError"
import { toast } from "react-toastify"

const Places: NextComponentType = () => {
    const onDrop = useCallback((uploadedFile: any) => {
        const data = new FormData()
        data.append("file", uploadedFile[0])
        try {
            placesApi.uploadCsvApi(data)
            toast("Sucesso")            
        } catch (error) {
            showError(error)
        }
    }, [])

    const { getRootProps, getInputProps, isDragReject } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            ".csv, application/vnd.ms-excel, text/csv": [""]
        }
    })

    return (
        <PlacesContainer>
            <section className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragReject ?
                    <p>Formato de arquivo não suportado</p>:
                    <p>Carregue um arquivo</p> 
                }
            </section>
            <ul>

            </ul>
        </PlacesContainer>
    )
}

export default Places