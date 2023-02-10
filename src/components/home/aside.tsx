import React from "react"
import AsideContainer from "@/styles/homeStyles/AsideContainer"

import { NextComponentType } from "next"
import Image from "next/image"

const Aside: NextComponentType = () => {
    return (
        <AsideContainer>
            <div className="business">
                <h1>Chega Logo <br /> Transportadora</h1>
                <li>
                    <div className="circle">
                        <Image
                            src="/images/trucker.png"
                            alt="truck-image"
                            width={100}
                            height={100}
                            className="logo"
                        />
                    </div>
                    <p>Sr joão <br /> <span>Admin</span></p>
                </li>
            </div>
            <div className="dashboard"></div>
            <div className="preferences"></div>
        </AsideContainer>
    )
}

export default Aside