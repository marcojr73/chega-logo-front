import React from "react"
import type { AppProps } from "next/app"
import { ThemeContextProvider } from "@/providers/ThemeProvider"
import Theme from "./_theme"

import "../styles/reset.css"
import dynamic from "next/dynamic"
import { TruckesContextProvider } from "@/providers/truckesProvider"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <TruckesContextProvider>
        <Theme />
        <Component {...pageProps} />
      </TruckesContextProvider>
    </ThemeContextProvider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
