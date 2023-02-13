import { NextComponentType } from "next"
import React from "react"
import { useTranslation } from "react-i18next"

const Exit: NextComponentType = () => {
    const {t} = useTranslation()
    return (
        <p>I am the Exit</p>
    )
}

export default Exit