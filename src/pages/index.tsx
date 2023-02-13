import { NextPage } from "next"
import Image from "next/image"
import React from "react"

import AuthForm from "@/components/auth/authform"
import ContainerAuth from "@/styles/authStyles"

const AuthPage: NextPage = () => {
  return (
    <ContainerAuth>
      <section className="auth-square">
        <div className="slogan">
          <h1>Chega logo <br /> transportadora</h1>
          <Image
            src="/images/truck-logo.png"
            alt="truck-image"
            width={250}
            height={200}
            className="logo"
          />
          <h2>Felicidade em entregar bem!</h2>
        </div>
        <AuthForm/>
      </section>
    </ContainerAuth>
  )
}

export default AuthPage
