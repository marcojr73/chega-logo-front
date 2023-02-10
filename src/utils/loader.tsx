import React from "react"

import styled from "styled-components"
import { TailSpin } from "react-loader-spinner"

const Loader: () => JSX.Element = () => {
    return (
        <Container>
            <TailSpin
                width="35"
                color="white"
                ariaLabel="loading"
            />
        </Container>
    )
}

export default Loader

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`