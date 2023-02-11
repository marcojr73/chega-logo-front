import React from "react"
import { NextComponentType } from "next"

import TruckesContainer from "@/styles/homeStyles/truckesContainer"
import ListTruckes from "./listTruckes"
import UpsertTruckes from "./upsertTruckes"

const Truckes: NextComponentType = () => {
    return (
        <TruckesContainer>
            <UpsertTruckes/>
            <ListTruckes/>
        </TruckesContainer>
    )
}

export default Truckes