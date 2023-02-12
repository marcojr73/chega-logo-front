import styled from "styled-components"

const TruckesContainer = styled.section`
    height: 100%;

    form{
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-inputs, .bottom-inputs{
        width: 90%;
        height: 25%;
        display: flex;
        justify-content: space-between;
    }

    .top-inputs{        
        margin-bottom: 2%;
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

    .buttons-box{
        width: 100%;
        height: 7%;
        display: flex;
        justify-content: center;
    }

    button{
        width: 15%;
        height: 100%;
        background-color: var(--secondary-color);
        font-weight: bold;
        margin: 0 3%;
    }

    ul{
        padding-top: 5%;
        height: 68%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .icon{
        color: red;
        cursor: pointer;
    }

    li{
        height: 8%;
        display: flex;
        align-items: center;
        width: 90%;
    }

    li:first-child{
        border-bottom: 2px solid var(--background-color);
    }

    .item{
        width: 19.7%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .not-text{
        width: 100%;
        padding: 10% 0%;
    }

    .not-register{
        margin-top: 5%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .toggle-pages{
        display: flex;
        justify-content: space-between;
        width: 21%;
        position: absolute;
        bottom: 4%;
        right: 5%;
    }

    .toggle{
        padding: 0 0 0 5%;
        cursor: pointer;
    }
`

export default TruckesContainer