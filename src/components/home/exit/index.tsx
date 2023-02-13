import { NextComponentType } from "next"
import Router  from "next/router"
import React from "react"
import { useTranslation } from "react-i18next"

import ExitContainer from "@/styles/homeStyles/exitContainer"

const Exit: NextComponentType = () => {
    const { t } = useTranslation()
    return (
        <ExitContainer>
            <h1>{t("really exit")}</h1>
            <button type="button" onClick={() => Router.push("/")}>{t("exit")}</button>
        </ExitContainer>
    )
}

export default Exit