import React, { useState } from "react"
import { NextPage } from "next"
import HomeContainer from "@/styles/homeStyles"
import Aside from "@/components/home/aside"
import Truckes from "@/components/home/truckes"
import Content from "@/components/home/content"

const Home: NextPage = () => {
    const [content, setContent] = useState({title: "Caminhões", element: <Truckes/>})
    return (
        <HomeContainer>
            <Aside setContent={setContent}/>
            <Content content={content}/>
        </HomeContainer>
    )
}

export default Home