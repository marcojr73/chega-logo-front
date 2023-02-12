/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"
import { TcontexPlaces, TProps } from "@/interfaces"

const initialValue = {
    places: [
        {
            id: -1,
            name: "",
            distance: "",
            createdAt: ""
        },
    ],
    setPlaces: () => { }
}

export const placesContext = createContext<TcontexPlaces>(initialValue)

export const PlacesContextProvider = ({ children }: TProps) => {
    const [places, setPlaces] = useState(initialValue.places)
    return (
        <placesContext.Provider value={{ places, setPlaces }}>
            {children}
        </placesContext.Provider>
    )
}