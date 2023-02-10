import React from "react"
import { NextPage } from "next"
import HomeContainer from "@/styles/homeStyles"
import Aside from "@/components/home/aside"

const Home: NextPage = () => {
    return (
        <HomeContainer>
            <Aside/>
        </HomeContainer>
    )
}

export default Home