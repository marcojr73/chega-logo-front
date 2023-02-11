import { truckesContext } from "@/providers/truckesProvider"
import truckesApi from "@/repositories/truckesApi"
import Loader from "@/utils/loader"
import showError from "@/utils/showError"
import { NextComponentType } from "next"
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const UpsertTruckes: NextComponentType = () => {
    const [textNewTruck, setTextNewTruck] = useState<"Cadastrar" | JSX.Element>("Cadastrar")
    const [textUpdateTruck, setTextUpdateTruck] = useState<"Atualizar" | JSX.Element>("Atualizar")
    const { setTruckes } = useContext(truckesContext)

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
            const response = await truckesApi.findTruckesApi()
            setTruckes(response)
            toast("Sucesso")
            // reset()
        } catch (error) {
            showError(error)
            setTextNewTruck("Cadastrar")
        }
    }

    async function updateTruck(data: any) {
        try {
            setTextUpdateTruck(<Loader />)
            await truckesApi.updateTruckApi(data)
            setTextUpdateTruck("Atualizar")
            const response = await truckesApi.findTruckesApi()
            setTruckes(response)
            toast("Sucesso")
            // reset()
        } catch (error) {
            setTextUpdateTruck("Atualizar")
            showError(error)
        }
    }

    return (
        <>
            <form action="">
                <div className="top-inputs">
                    <div className="input-top">
                        <input type="text" placeholder="Apelido" {...register("name", { required: true, minLength: 3 })} />
                        {errors?.name?.type === "required" || errors?.name?.type === "minLength" ?
                            <p className="error">Apelido precisa ter no mńimo 3 digitos</p> : null}
                    </div>
                    <div className="input-top">
                        <input type="text" placeholder="Placa" {...register("licensePlate", { required: true, pattern: /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/i })} />
                        {errors?.licensePlate?.type === "required" || errors?.licensePlate?.type === "pattern" ?
                            <p className="error">Insira um formato válido de placa</p> : null}
                    </div>
                </div>
                <div className="bottom-inputs">
                    <div className="input-bot">
                        <input type="number" placeholder="Ano" {...register("year", { required: true })} />
                        {errors?.year?.type === "required" ?
                            <p className="error">Insira o ano do veículo</p> : null}
                    </div>
                    <div className="input-bot">
                        <input type="text" placeholder="Cor" {...register("color", { required: true })} />
                        {errors?.name?.type === "required" ?
                            <p className="error">Insira a cor do veículo</p> : null}
                    </div>
                    <div className="input-bot">
                        <input type="number" placeholder="Rendimento por litro" {...register("efficiency", { required: true })} />
                        {errors?.name?.type === "required" || errors?.name?.type === "minLength" ?
                            <p className="error">Insira o rendimento do veículo</p> : null}
                    </div>
                </div>
            </form>
            <div className="buttons-box">
                <button type="submit" onClick={() => handleSubmit(newTruck)()}>{textNewTruck}</button>
                <button type="submit" onClick={() => handleSubmit(updateTruck)()}>{textUpdateTruck}</button>
            </div>
        </>
    )
}

export default UpsertTruckes