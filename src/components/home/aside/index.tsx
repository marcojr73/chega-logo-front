import React from "react"
import Image from "next/image"

import { FaCashRegister, FaMapMarkerAlt, FaMoneyBillAlt, FaTruck } from "react-icons/fa"
import { IoIosSettings, IoMdExit } from "react-icons/io"
import { useTranslation } from "react-i18next"

import AsideContainer from "@/styles/homeStyles/AsideContainer"
import { TsetContent } from "@/interfaces"
import Truckes from "../truckes"
import Places from "../places"
import Budget from "../budgets"
import Revenues from "../revenues"
import Settings from "../settings"
import Exit from "../exit"

const Aside = ({ setContent }: TsetContent) => {
    const { t } = useTranslation()
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
                <p className="menu">App</p>
                <ul>
                    <li onClick={() => setContent({ title: "truckes", element: <Truckes /> })} ><FaTruck className="icon" /><p>{t("truckes")}</p></li>
                    <li onClick={() => setContent({ title: "places", element: <Places /> })} ><FaMapMarkerAlt className="icon" /><p>{t("places")}</p></li>
                    <li onClick={() => setContent({ title: "budgets", element: <Budget /> })}><FaCashRegister className="icon" /><p>{t("budgets")}</p></li>
                    <li onClick={() => setContent({ title: "revenues", element: <Revenues /> })} ><FaMoneyBillAlt className="icon" /><p>{t("revenues")}</p></li>
                </ul>
            </div>
            <div className="preferences">
                <p className="menu">{t("preferences")}</p>
                <ul>
                    <li onClick={() => setContent({ title: "settings", element: <Settings /> })}><IoIosSettings className="icon" /><p>{t("settings")}</p></li>
                    <li onClick={() => setContent({ title: "exit", element: <Exit /> })}><IoMdExit className="icon" /><p>{t("exit")}</p></li>
                </ul>
            </div>
        </AsideContainer>
    )
}

export default Aside