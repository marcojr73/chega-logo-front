import { Tcontent } from "@/interfaces"
import React from "react"

const Content = ({ content }: Tcontent) => {
    return (
        <main>
            <p className="title">{content.title}</p>
            <div className="box">
                {content.element}
            </div>
        </main>
    )
}

export default Content