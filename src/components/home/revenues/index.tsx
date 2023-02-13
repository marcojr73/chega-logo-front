import { themeContext } from "@/providers/ThemeProvider"
import revenuesApi from "@/repositories/revenuesApi"
import RevenuesContainer from "@/styles/homeStyles/RevenuesContainer"
import showError from "@/utils/showError"
import { NextComponentType } from "next"
import React, { useContext, useEffect, useState } from "react"
import { BiTrip } from "react-icons/bi"
import Chart from "react-google-charts"
import { Tstats } from "@/interfaces"
import { MdAttachMoney } from "react-icons/md"

const Revenues: NextComponentType = () => {

    const [data, setData] = useState<(string | number)[][]>()
    const [stats, setStats] = useState<Tstats>()
    const { theme } = useContext(themeContext)

    const options = {
        title: "Faturamento de viagens nos ultimos 12 meses",
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
                    <p>Numero de viagens realizadas</p>
                    <p>{stats?.sumTravels}</p>
                </li>
                <li>
                    <MdAttachMoney className="icon" />
                    <p>Faturamento total</p>
                    <p>{stats?.sumValues.toFixed(2)} R$</p>
                </li>
                <li>
                    <MdAttachMoney className="icon" />
                    <p>Media de faturamento mensal</p>
                    <p>{stats?.mediaValues.toFixed(2)} R$</p>
                </li>
            </ul>
        </RevenuesContainer>
    )
}

export default Revenues