import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
:root {
    --primary-color: ${props => props.theme.colors.primary};
    --background-color: ${props => props.theme.colors.backgroundColor};
    --focus-color: ${props => props.theme.colors.focusColor};
    --text-color: ${props => props.theme.colors.textColor};
    font-family: 'Montserrat', sans-serif;
}
body{
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
}
input, select{
    border: none;
    border-radius: 5px;
    font-size: 0.8vw;
    padding: 0px 0px 0px 2%;
    color: var(--primary-color);
}
input:focus{
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: 0 0 0 0;
    outline: 0;
}

.input-error{
    color: #f51313;
    width: 70%;
    font-weight: bold;
    font-size: 0.7rem;
}
`