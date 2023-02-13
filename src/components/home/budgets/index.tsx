import useCalculator from "@/hooks/useCalculator"
import { placesContext } from "@/providers/placesProvider"
import { truckesContext } from "@/providers/truckesProvider"
import revenuesApi from "@/repositories/revenuesApi"
import BudgetContainer from "@/styles/homeStyles/budgetsContainer"
import showError from "@/utils/showError"
import { NextComponentType } from "next"
import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

const Budget: NextComponentType = () => {
    const {t} = useTranslation()

    const { truckes } = useContext(truckesContext)
    const { places } = useContext(placesContext)
    const { view,
        consumption,
        distance,
        driverPrice,
        travelCost,
        finalPrice,
        calculator
    } = useCalculator()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    async function registerTravel(finalPrice: number) {
        try {
            await revenuesApi.postRevenueApi(finalPrice)
            toast("Sucesso")
        } catch (error) {
            showError(error)
        }
    }

    return (
        <BudgetContainer>
            <section className="data">
                <form action="">
                    <select {...register("efficiency", { required: true })}>
                        {
                            truckes.map(truck => {
                                return (
                                    <option key={truck.id} value={truck.efficiency}>{truck.name}</option>
                                )
                            })
                        }
                    </select>
                    <select {...register("distance", { required: true })}>
                        {
                            places.map(place => {
                                return (
                                    <option key={place.id} value={place.distance}>{place.name}</option>
                                )
                            })
                        }
                    </select>

                    <div className="input-box">
                        <input type="number" placeholder="Preço do combustivel" {...register("fuelPrice", { required: true })} />
                        {errors?.fuelPrice?.type === "required" ?
                            <p className="error">Insira o preço do Combustível</p> : null}
                    </div>
                </form>
                <button type="submit" onClick={() => handleSubmit(calculator)()}>{t("calculate")}</button>
            </section>
            {view ?
                <section className="answer">
                    <ul>
                        <p className="stats">{t("expected consumption")}: <span>{consumption.toFixed(2)} L</span></p>
                        <p className="stats">{t("distance")}: <span>{distance} Km</span></p>
                        <p className="stats">{t("driver value")}: <span>{driverPrice.toFixed(2)} R$</span></p>
                        <p className="stats">{t("travel cost")}:<span>{travelCost.toFixed(2)} R$</span></p>
                        <p className="stats">{t("final price")}: <span>{finalPrice.toFixed(2)} R$</span></p>
                    </ul>
                    <button className="register" onClick={() => registerTravel(finalPrice)}>{t("register travel")}</button>
                </section>
                : null}
        </BudgetContainer>
    )
}

export default Budget