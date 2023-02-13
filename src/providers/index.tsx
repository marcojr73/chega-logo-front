import { TProps } from "@/interfaces"
import React from "react"
import { PlacesContextProvider } from "./placesProvider"
import { ThemeContextProvider } from "./ThemeProvider"
import { TruckesContextProvider } from "./truckesProvider"

const Providers = ({ children }: TProps) => {
    return (
        <ThemeContextProvider>
            <PlacesContextProvider>
                <TruckesContextProvider>
                    {children}
                </TruckesContextProvider>
            </PlacesContextProvider>
        </ThemeContextProvider>
    )
}

export default Providers