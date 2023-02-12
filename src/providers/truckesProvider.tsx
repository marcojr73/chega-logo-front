/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"
import { TcontexTruck, TProps } from "@/interfaces"

const initialValue = {
    truckes: [
        {
            id: -1,
            name: "",
            licensePlate: "",
            year: "",
            color: "",
            efficiency: "",
            createdAt: ""
        },
    ],
    setTruckes: () => { }
}

export const truckesContext = createContext<TcontexTruck>(initialValue)

export const TruckesContextProvider = ({ children }: TProps) => {
    const [truckes, setTruckes] = useState(initialValue.truckes)
    return (
        <truckesContext.Provider value={{ truckes, setTruckes }}>
            {children}
        </truckesContext.Provider>
    )
}