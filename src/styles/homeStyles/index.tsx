import styled from "styled-components"

const HomeContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;

    .title{
        font-size: 5rem;
        margin-bottom: 3%;
    }

    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box{
        width: 80%;
        height: 80%;
        background-color: var(--primary-color);
        border-radius: 10px;
    }
`

export default HomeContainer