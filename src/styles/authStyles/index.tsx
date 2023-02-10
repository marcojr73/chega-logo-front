import styled from "styled-components"

const ContainerAuth = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .auth-square{
        background-color: var(--primary-color);
        width: 50vw;
        height: 65vh;
        border-radius: 2%;
        display: flex;
        align-items: center;
    }

    .slogan{
        border-right: 3px solid var(--background-color);
    }

    .slogan, .auth{
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .auth{
        width: 50%;
        height: 80%;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 30%;
    }

    .bottom-action{
        display: flex;
        flex-direction: column;
    }

    .input{
        width: 75%;
        height: 40%;
    }

    input{
        width: 100%;
        height: 100%;
    }

    .bottom-action{
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        width: 75%;
        height: 50%;
        background-color: var(--secondary-color);
    }

    p{
        cursor: pointer;
    }
`

export default ContainerAuth