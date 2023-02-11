import truckesApi from "@/repositories/truckesApi"
import TruckesContainer from "@/styles/homeStyles/truckesContainer"
import Loader from "@/utils/loader"
import showError from "@/utils/showError"
import { NextComponentType } from "next"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import UpsertTruckes from "./upsertTruckes"

const Truckes: NextComponentType = () => {
    const [textNewTruck, setTextNewTruck] = useState<"Cadastrar" | JSX.Element>("Cadastrar")
    const [textUpdateTruck, setTextUpdateTruck] = useState<"Atualizar" | JSX.Element>("Atualizar")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    async function newTruck(data: any) {
        try {
            setTextNewTruck(<Loader />)
            await truckesApi.newTruckApi(data)
            setTextNewTruck("Cadastrar")
            reset()
        } catch (error) {
            showError(error)
            setTextNewTruck("Cadastrar")
        }
    }

    function updateTruck(data: any) {
        try {
            setTextUpdateTruck(<Loader />)
            // await truckesApi.newTruckApi(data)
            setTextUpdateTruck("Atualizar")
            reset()
        } catch (error) {
            showError(error)
        }
    }

    return (
        <TruckesContainer>
            <UpsertTruckes/>
        </TruckesContainer>
    )
}

export default Truckes