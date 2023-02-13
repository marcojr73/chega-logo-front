import { NextComponentType } from "next"
import React, { useContext, useEffect, useState } from "react"

import { BiTrip } from "react-icons/bi"
import Chart from "react-google-charts"
import { MdAttachMoney } from "react-icons/md"
import { useTranslation } from "react-i18next"

import { themeContext } from "@/providers/ThemeProvider"
import revenuesApi from "@/repositories/revenuesApi"
import RevenuesContainer from "@/styles/homeStyles/RevenuesContainer"
import showError from "@/utils/showError"
import { Tstats } from "@/interfaces"

const Revenues: NextComponentType = () => {

    const [data, setData] = useState<(string | number)[][]>()
    const [stats, setStats] = useState<Tstats>()
    const { theme } = useContext(themeContext)
    const { t } = useTranslation()

    const options = {
        title: t("title char"),
        curveType: "function",
        colors: [theme.colors.secondary],
        legend: { position: "none" },
        vAxis: { maxValue: 18, textStyle: { color: theme.colors.textColor, fontSize: 18 } },
        animation: { duration: 500, easing: "Linear", startup: true },
        backgroundColor: theme.colors.primary
    }

    useEffect(() => {
        (async function () {
            try {
                const response = await revenuesApi.getStatsRevenues()
                response.balance.unshift(["Element", "Faturamento"])
                setData(response.balance)
                setStats(response.stats)
            } catch (error) {
                showError(error)
            }
        })()
    }, [])

    return (
        <RevenuesContainer>
            {!data || !stats ?
                <p>Carregando</p>
                :
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    width="100%"
                    height="50vh"
                    options={options}
                    legendToggle
                />}
            <ul>
                <li>
                    <BiTrip className="icon" />
                    <p>{t("number sales")}</p>
                    <p>{stats?.sumTravels}</p>
                </li>
                <li>
                    <MdAttachMoney className="icon" />
                    <p>{t("total revenues")}</p>
                    <p>{stats?.sumValues.toFixed(2)} R$</p>
                </li>
                <li>
                    <MdAttachMoney className="icon" />
                    <p>{t("avarage revenues")}</p>
                    <p>{stats?.mediaValues.toFixed(2)} R$</p>
                </li>
            </ul>
        </RevenuesContainer>
    )
}

export default Revenues