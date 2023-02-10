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
    --secondary-color: ${props => props.theme.colors.secondary};
    --background-color: ${props => props.theme.colors.backgroundColor};
    --focus-color: ${props => props.theme.colors.focusColor};
    --text-color: ${props => props.theme.colors.textColor};
    --off-text-color: ${props => props.theme.colors.offTextColor};
    font-family: 'Oswald', sans-serif;
    color: var(--text-color);
    cursor: default;
}
body{
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
}
input, select, button{
    border: none;
    border-radius: 3px;
    font-size: 0.8vw;
    padding: 0px 0px 0px 2%;
    color: var(--text-color);
    background-color: var(--background-color);
}

button{
    cursor: pointer;
}

input:focus{
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: 0 0 0 0;
    outline: 0;
}

.error{
    color: #f51313;
    width: 70%;
    font-size: 0.7rem;
}

a{
    text-decoration: none;
    color: var(--text-color);
}

h1{
    font-size: 2.5rem;
    text-align: center;
}
`