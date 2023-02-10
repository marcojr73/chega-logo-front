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
    }

    .profile{
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

    .dashboard, ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .dashboard{
        height: 45%;
        padding-bottom: 5%;
    }

    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li{
        width: 80%;
        height: 20%;
        display: flex;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
    }

    li:hover{
        background-color: var(--primary-color);
    }

    .icon{
        font-size: 2rem;
        margin: 0 20% 0 5%;
    }

    .title{
        font-size: 0.8rem;
        padding: 4% 0% 3% 4%;
        color: gray;
    }

    .preferences{
        height: 25%;
        background-color: var(--off-text-color);
    }

`

export default AsideContainer