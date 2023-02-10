import TruckesContainer from "@/styles/homeStyles/truckesContainer"
import { NextComponentType } from "next"
import React from "react"
import { useForm } from "react-hook-form"

const Truckes: NextComponentType = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    return (
        <TruckesContainer>
            <div className="new-truck">
                <form action="">
                    <div className="input">
                        <input type="text" placeholder="Apelido" {...register("name", { required: true, minLength: 3 })} />
                        {errors?.name?.type === "required" || errors?.name?.type === "minLength" ?
                            <p className="error">Apelido precisa ter no mńimo 3 digitos</p> : null}
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Placa" {...register("licensePlate", { required: true, pattern: /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/i })} />
                        {errors?.licensePlate?.type === "required" || errors?.licensePlate?.type === "pattern" ?
                            <p className="error">Insira um formato válido de placa</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Ano" {...register("year", { required: true })} />
                        {errors?.year?.type === "required"?
                            <p className="error">Insira um ano</p> : null}
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Cor" {...register("color", { required: true})} />
                        {errors?.name?.type === "required" ?
                            <p className="error">Insira a cor do veículo</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Rendimento por litro" {...register("efficiency", { required: true})} />
                        {errors?.name?.type === "required" || errors?.name?.type === "minLength" ?
                            <p className="error">Insira o rendimento do veículo</p> : null}
                    </div>
                </form>
            </div>
        </TruckesContainer>
    )
}

export default Truckes