import "styled-components"
declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            focusColor: string;
            textColor: string;
        }
    }
}