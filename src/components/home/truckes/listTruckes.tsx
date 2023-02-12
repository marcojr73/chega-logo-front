import React, { useContext, useEffect, useState } from "react"

import { NextComponentType } from "next"
import { truckesContext } from "@/providers/truckesProvider"
import showError from "@/utils/showError"
import truckesApi from "@/repositories/truckesApi"

import { MdDelete } from "react-icons/md"
import { toast } from "react-toastify"
import Image from "next/image"

const ListTruckes: NextComponentType = () => {

    const { truckes, setTruckes } = useContext(truckesContext)
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async function () {
            console.log(page)
            try {
                const response = await truckesApi.findTruckesApi(page)
                setTruckes(response)
            } catch (error) {
                showError(error)
            }
        })()
    }, [page])

    async function deleteTruck(licensePlate: string) {
        try {
            await truckesApi.deleteTruckApi(licensePlate)
            const response = await truckesApi.findTruckesApi(page)
            toast("Sucesso")
            setTruckes(response)
        } catch (error) {
            showError(error)
        }
    }

    return (
        <ul className="table">
            <li>
                <p className="item">Apelido</p>
                <p className="item">Placa</p>
                <p className="item">Ano</p>
                <p className="item">Cor</p>
                <p className="item">Rendimento</p>
                <span></span>
            </li>
            {
                truckes[0]?.id === -1 || truckes.length === 0 ?
                    <div className="not-register">
                        <p className="not-text">Nenhum Caminhão cadastrado</p>
                        <Image
                            src="/images/truckers-not-found.gif"
                            alt="truck-image"
                            width={200}
                            height={150}
                            className="logo"
                        />
                    </div>
                    :
                    truckes.map(truck => {
                        return (
                            <li key={truck.createdAt}>
                                <p className="item">{truck.name}</p>
                                <p className="item">{truck.licensePlate}</p>
                                <p className="item">{truck.year}</p>
                                <p className="item">{truck.color}</p>
                                <p className="item">{truck.efficiency} Km/L</p>
                                <span>{<MdDelete className="icon" onClick={() => deleteTruck(truck.licensePlate)} />}</span>
                            </li>
                        )
                    })
            }
            <div className="toggle-pages">
                <p className="toggle" onClick={() => page > 1 ? setPage(page - 1) : null}>Página anterior</p>
                <p className="toggle" onClick={() => truckes.length === 10 ? setPage(page + 1) : null}>Próxima página</p>
            </div>
        </ul>
    )
}

export default ListTruckes