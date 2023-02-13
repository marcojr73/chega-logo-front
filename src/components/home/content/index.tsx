import { Tcontent } from "@/interfaces"
import React from "react"
import { useTranslation } from "react-i18next"

const Content = ({ content }: Tcontent) => {
    const {t} = useTranslation()
    return (
        <main>
            <p className="title">{t(content.title)}</p>
            <div className="box">
                {content.element}
            </div>
        </main>
    )
}

export default Content