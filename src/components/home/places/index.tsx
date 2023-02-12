import React, { useCallback, useContext, useEffect, useState } from "react"
import PlacesContainer from "@/styles/homeStyles/placesContainer"
import { NextComponentType } from "next"
import { useDropzone } from "react-dropzone"
import placesApi from "@/repositories/placesApi"
import showError from "@/utils/showError"
import { toast } from "react-toastify"
import { placesContext } from "@/providers/placesProvider"
import { MdDelete } from "react-icons/md"

const Places: NextComponentType = () => {
    const { places, setPlaces } = useContext(placesContext)
    const [page, setPage] = useState(1)

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

    useEffect(() => {
        (async function () {
            try {
                const response = await placesApi.findPlacesApi(page)
                setPlaces(response)
            } catch (error) {
                showError(error)
            }
        })()
    }, [page])

    return (
        <PlacesContainer>
            <section className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragReject ?
                        <p >Formato de arquivo não suportado</p> :
                        <p >Carregue um arquivo</p>
                }
            </section>
            <ul>
                <li>
                    <p className="name">Nome</p>
                    <p className="distance">Distância</p>
                    <span></span>
                </li>
                {
                    places[0]?.id === -1 || places.length === 0 ?
                        <p>Nenhuma localidade cadastrada</p>
                        :
                        places.map(place => {
                            return (
                                <li key={place.id}>
                                    <p className="name">{place.name}</p>
                                    <p className="distance">{place.distance} Km</p>
                                    <span>{<MdDelete className="icon" />}</span>
                                </li>
                            )
                        })
                }
                <div className="toggle-pages">
                    <p className="toggle" onClick={() => page > 1 ? setPage(page - 1) : null}>Página anterior</p>
                    <p className="toggle" onClick={() => places.length === 10 ? setPage(page + 1) : null}>Próxima página</p>
                </div>
            </ul>
        </PlacesContainer>
    )
}

export default Places