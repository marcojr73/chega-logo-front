import styled from "styled-components"

const TruckesContainer = styled.section`
    height: 100%;

    form{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
    }

    .top-inputs{
        width: 90%;
        height: 20%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2%;
    }

    .bottom-inputs{
        width: 90%;
        height: 20%;
        display: flex;
        justify-content: space-between;
    }

    .input-top{
        width: 48%;
        height: 100%;
    }

    .input-bot{
        width: 30%;
        height: 100%;
    }

    input{
        width: 100%;
        height: 100%;
    }

    .buttons{
        margin-top: 2%;
        width: 50%;
        height: 20%;
    }

    button{
        width: 40%;
        height: 100%;
        background-color: var(--secondary-color);
        font-weight: bold;
    }
`

export default TruckesContainer