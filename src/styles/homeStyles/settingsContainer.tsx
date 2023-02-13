import styled from "styled-components"

const SettingsContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    .theme, .language{
        width: 40%;
        height: 25%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 10px;
        background-color: var(--secondary-color);
    }
    
    .switch{
        display: flex;
    }
    
    .icon-theme{
        font-size: 1.2rem;
        margin-left: 12%;
        margin-top: 10%;
        color: var(--dark-color);
    }
`

export default SettingsContainer