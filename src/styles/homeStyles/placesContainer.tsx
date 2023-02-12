import styled from "styled-components"

const PlacesContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .dropzone{
        width: 50%;
        height: 20%;
        border: 2px dotted var(--off-text-color);
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4%;
    }

    ul{
        padding-top: 5%;
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    .icon{
        color: red;
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

    .name{
        width: 75%;
    }

    .distance{
        width: 24%;
    }

    p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
    }

`

export default PlacesContainer