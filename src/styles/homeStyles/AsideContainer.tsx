import styled from "styled-components"

const AsideContainer = styled.aside`
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--primary-color);

    h1{
        font-size: 2rem;
    }

    .business{
        height: 30%;
        width: 100%;
        display: flex;  
        flex-direction: column;
        justify-content: space-between;
        padding: 10% 0%;
        align-items: center;
        background-color: red;
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--secondary-color);
        width: 80%;
        border-radius: 10px;
        padding: 2% 8%;
    }

    .circle{
        width: 5vw;
        height: 5vw;
        background-color: var(--primary-color);
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        color: gray;
    }

    .logo{
        border-radius: 50%;
    }

    .dashboard{
        height: 45%;
        background-color: aquamarine;
    }

    .preferences{
        height: 25%;
        background-color: gray;
    }

`

export default AsideContainer