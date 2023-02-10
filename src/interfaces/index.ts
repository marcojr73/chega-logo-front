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

type Tuser = {
    userName: string;
    password: string
}

type TauthProps = { 
    textButton: string | JSX.Element, 
    setTextButton: React.Dispatch<React.SetStateAction<string | JSX.Element>>, 
    textToggler: string, 
    setTextToggler: React.Dispatch<React.SetStateAction<string>>,
    url: string,
    setUrl:  React.Dispatch<React.SetStateAction<"sign-in" | "sign-up">>,
}
export type {
    Ttheme,
    TProps,
    Tuser,
    TauthProps
}