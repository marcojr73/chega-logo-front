import { ThemeProvider } from "styled-components"
import GlobalStyle from "@/styles/themes/globalStyle"

import React, { useContext } from "react"
import { themeContext } from "@/providers/ThemeProvider" 

export default function Theme() {

  const { theme } = useContext(themeContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}