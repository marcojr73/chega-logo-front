import React, { useState } from "react"
import { NextComponentType } from "next"

import TruckesContainer from "@/styles/homeStyles/truckesContainer"
import ListTruckes from "./listTruckes"
import UpsertTruckes from "./upsertTruckes"

const Truckes: NextComponentType = () => {
    const [page, setPage] = useState(1)
    return (
        <TruckesContainer>
            <UpsertTruckes page={page}/>
            <ListTruckes page={page} setPage={setPage}/>
        </TruckesContainer>
    )
}

export default Truckes