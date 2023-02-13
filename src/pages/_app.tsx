import React from "react"
import type { AppProps } from "next/app"
import Theme from "./_theme"

import "../styles/reset.css"
import dynamic from "next/dynamic"
import "../config/i18n"
import Providers from "@/providers"

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
