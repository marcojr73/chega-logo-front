import React from "react"
import AsideContainer from "@/styles/homeStyles/AsideContainer"

import { NextComponentType } from "next"
import Image from "next/image"

import {FaCashRegister, FaMapMarkerAlt, FaMoneyBillAlt, FaTruck} from "react-icons/fa"

const Aside: NextComponentType = () => {
    return (
        <AsideContainer>
            <div className="business">
                <h1>Chega Logo <br /> Transportadora</h1>
                <div className="profile">
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
                </div>
            </div>
            <div className="dashboard">
                <p className="title">Dashboard</p>
                <ul>
                    <li><FaTruck className="icon"/><p>Caminhões</p></li>
                    <li><FaMapMarkerAlt className="icon"/><p>Localidades</p></li>
                    <li><FaMoneyBillAlt className="icon"/><p>Orçamentos</p></li>
                    <li><FaCashRegister className="icon"/><p>Faturamentos</p></li>
                </ul>
            </div>
            <div className="preferences"></div>
        </AsideContainer>
    )
}

export default Aside