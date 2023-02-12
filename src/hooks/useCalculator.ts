import { useState } from "react"

function useCalculator() {
    const [view, setView] = useState(false)
    const [consumption, setConsumption] = useState(0)
    const driverPrice = 5000
    const [travelCost, setTravelCost] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)
    const [distance, setDistance] = useState(0)

    function calculator(data: any) {
        const consumption = (data.distance * 2) / data.efficiency
        const finalPrice = (consumption) * data.fuelPrice + driverPrice
        setConsumption(consumption)
        setDistance(data.distance)
        setTravelCost(finalPrice)
        setFinalPrice(finalPrice + finalPrice * 0.2)
        setView(true)
    }

    return {
        view,
        consumption,
        distance,
        driverPrice,
        travelCost,
        finalPrice,
        calculator,
    }
}

export default useCalculator