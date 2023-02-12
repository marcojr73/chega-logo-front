import styled from "styled-components"

const BudgetContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .data{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    form{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr ;
        grid-row-gap: 10%;
        grid-column-gap: 5%;
        width: 65%;
        height: 20%;
    }

    button{
        width: 20%;
        height: 15%;
        background-color: var(--secondary-color);
    }

    .input-box, select{
        width: 100%;
        height: 100%;
    }

    input{
        width: 100%;
        height: 100%;
    }

    .answer{
        width: 50%;
        height: 50%;
        background-color: var(--background-color);
        font-size: 1.5rem;
        padding: 2%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 85%;
    }

    .stats{
        display: flex;
        justify-content: space-between;
    }

    .register{
        margin-top: 5%;
        width: 45%;
        height: 25%;
    }
`

export default BudgetContainer