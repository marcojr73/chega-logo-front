import React, { useCallback, useContext, useEffect, useState } from "react"
import { NextComponentType } from "next"

import { useDropzone } from "react-dropzone"
import { toast } from "react-toastify"
import { MdDelete } from "react-icons/md"
import { useTranslation } from "react-i18next"

import PlacesContainer from "@/styles/homeStyles/placesContainer"
import placesApi from "@/repositories/placesApi"
import showError from "@/utils/showError"
import { placesContext } from "@/providers/placesProvider"

const Places: NextComponentType = () => {
    const { places, setPlaces } = useContext(placesContext)
    const [page, setPage] = useState(1)
    const {t} = useTranslation()

    const onDrop = useCallback(async (uploadedFile: any) => {
        const data = new FormData()
        data.append("file", uploadedFile[0])
        try {
            await placesApi.uploadCsvApi(data)
            const response = await placesApi.findPlacesApi(page)
            console.log(response)
            setPlaces(response)
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

    async function deletePlace(id: number) {
        try {
            await placesApi.deletePlacesApi(id)
            const response = await placesApi.findPlacesApi(page)
            setPlaces(response)
            toast("Deletado")
        } catch (error) {
            showError(error)
        }
    }

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
                        <p >{t("invalid type file")}</p> :
                        <p >{t("load file")}</p>
                }
            </section>
            <ul>
                <li>
                    <p className="name">{t("name")}</p>
                    <p className="distance">{t("distance")}</p>
                    <span></span>
                </li>
                {
                    places[0]?.id === -1 || places.length === 0 ?
                        <p>{t("no registered locations")}</p>
                        :
                        places.map(place => {
                            return (
                                <li key={place.id}>
                                    <p className="name">{place.name}</p>
                                    <p className="distance">{place.distance} Km</p>
                                    <span onClick={() => deletePlace(place.id)}>{<MdDelete className="icon" />}</span>
                                </li>
                            )
                        })
                }
                <div className="toggle-pages">
                    <p className="toggle" onClick={() => page > 1 ? setPage(page - 1) : null}>{t("previous page")}</p>
                    <p className="toggle" onClick={() => places.length === 10 ? setPage(page + 1) : null}>{t("next page")}</p>
                </div>
            </ul>
        </PlacesContainer>
    )
}

export default Places