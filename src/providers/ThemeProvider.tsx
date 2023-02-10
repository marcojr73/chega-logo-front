/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"
import dark from "@/styles/themes/dark"
import { TProps, Ttheme } from "@/interfaces"
import usePersistedState from "@/hooks/usePersistedState"

const initialValue = {
    theme: dark,
    setTheme: () => { }
}

export const themeContext = createContext<Ttheme>(initialValue)

export const ThemeContextProvider = ({ children }: TProps) => {
    // const [theme, setTheme] = usePersistedState("theme", dark)
    const [theme, setTheme] = useState(dark)
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}