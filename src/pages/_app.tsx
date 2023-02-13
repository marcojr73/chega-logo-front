import React from "react"
import dynamic from "next/dynamic"

import type { AppProps } from "next/app"
import Theme from "./_theme"
import Providers from "@/providers"

import "../config/i18n"
import "../styles/reset.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Theme />
      <Component {...pageProps} />
    </Providers>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
