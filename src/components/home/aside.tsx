import React from "react"
import AsideContainer from "@/styles/homeStyles/AsideContainer"

import Image from "next/image"

import { FaCashRegister, FaMapMarkerAlt, FaMoneyBillAlt, FaTruck } from "react-icons/fa"
import { IoIosSettings, IoMdExit } from "react-icons/io"
import { TsetContent } from "@/interfaces"
import Truckes from "./truckes"
import Places from "./places"
import Budget from "./budget"
import Revenues from "./revenues"
import Settings from "./settings"
import Exit from "./exit"

const Aside = ({ setContent }: TsetContent) => {

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
                <p className="menu">Dashboard</p>
                <ul>
                    <li onClick={() => setContent({ title: "Caminhões", element: <Truckes /> })} ><FaTruck className="icon" /><p>Caminhões</p></li>
                    <li onClick={() => setContent({ title: "Localidades", element: <Places /> })} ><FaMapMarkerAlt className="icon" /><p>Localidades</p></li>
                    <li onClick={() => setContent({ title: "Orçamentos", element: <Budget /> })} ><FaMoneyBillAlt className="icon" /><p>Orçamentos</p></li>
                    <li onClick={() => setContent({ title: "Faturamentos", element: <Revenues /> })}><FaCashRegister className="icon" /><p>Faturamentos</p></li>
                </ul>
            </div>
            <div className="preferences">
                <p className="menu">Preferencias</p>
                <ul>
                    <li onClick={() => setContent({ title: "Configurações", element: <Settings /> })}><IoIosSettings className="icon" /><p>Configurações</p></li>
                    <li onClick={() => setContent({ title: "Sair", element: <Exit /> })}><IoMdExit className="icon" /><p>Sair</p></li>
                </ul>
            </div>
        </AsideContainer>
    )
}

export default Aside