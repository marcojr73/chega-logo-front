import { ReactNode } from "react"

type Ttheme = {
    theme: {
        title: string;
        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            focusColor: string;
            textColor: string;
        };
    },
    setTheme: (newState: {
        title: string;
        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            focusColor: string;
            textColor: string;
        };
    },) => void
}

type TProps = {
    children: ReactNode
}

export type {
    Ttheme,
    TProps
}