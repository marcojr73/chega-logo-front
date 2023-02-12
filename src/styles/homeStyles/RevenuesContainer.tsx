import styled from "styled-components"

const RevenuesContainer = styled.section`
    height: 100%;
    
    ul{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li{
        font-size: 2rem;
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 4fr 2fr;
    }
`

export default RevenuesContainer