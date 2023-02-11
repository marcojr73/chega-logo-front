import React, { useContext, useEffect } from "react"

import { NextComponentType } from "next"
import { truckesContext } from "@/providers/truckesProvider"
import showError from "@/utils/showError"
import truckesApi from "@/repositories/truckesApi"

import {MdDelete} from "react-icons/md"

const ListTruckes: NextComponentType = () => {

    const { truckes, setTruckes } = useContext(truckesContext)

    useEffect(() => {
        (async function () {
            try {
                const response = await truckesApi.findTruckesApi()
                setTruckes(response)
            } catch (error) {
                showError(error)
            }
        })()
    }, [])

    console.log(truckes)

    return (
        <ul className="table">
            <li>
                <p>Apelido</p>
                <p>Placa</p>
                <p>Ano</p>
                <p>Cor</p>
                <p>Rendimento</p>
                <span></span>
            </li>
            {
                truckes[0].id === -1 ?
                    <p>Nenhum Caminhão cadastrado</p>
                :
                truckes.map(truck => {
                    return (
                        <li key={truck.createdAt}>
                            <p>{truck.name}</p>
                            <p>{truck.licensePlate}</p>
                            <p>{truck.year}</p>
                            <p>{truck.color}</p>
                            <p>{truck.efficiency}</p>
                            <span>{<MdDelete className="icon"/>}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListTruckes