import useToggleAuth from "@/hooks/useToggleAuth"
import authApi from "@/repositories/authApi"
import showError from "@/utils/showError"
import Router from "next/router"
import React from "react"
import { useForm } from "react-hook-form"

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const {page, textButton, textToggler, togglePages, loading, endLoading} = useToggleAuth(reset)
    
      async function auth(data: any) {
        loading()
        try {
          loading()
          if(page === "sign-in"){
              const response = await authApi.authApi(data, "sign-in")
              localStorage.setItem("token", response)
              endLoading()
              Router.push("/home")
          } else {
            await authApi.authApi(data, "sign-up")
            endLoading()
            togglePages()
          }
        } catch (error: any) {
            showError(error)
            endLoading()
        }
      }
    return(
        <div className="auth">
          <div>
            <h1>Bem-vindo!</h1>
            <h2>Insira suas credenciais para continuar</h2>
          </div>
          <form action="">
            <div className="input">
              <input type="text" placeholder="Nome" {...register("userName", { required: true, pattern: /^[a-záàâãéèêíïóôõöúçñ ]+$/i })} />
              {errors?.userName?.type === "required" || errors?.userName?.type === "pattern" ?
                <p className="error">insira um nome de usuário válido</p> : null}
            </div>
            <div className="input">
              <input type="text" placeholder="Password" {...register("password", { required: true, minLength: 8})} />
              {errors?.password?.type === "required" || errors?.password?.type === "minLength" ?
                <p className="error">Senha precisa ter no mńimo 8 digitos</p> : null}
            </div>
          </form>
          <div className="bottom-action">
            <button type="submit" onClick={() => handleSubmit(auth)()}>{textButton}</button>
            <p onClick={togglePages}>{textToggler}</p>
          </div>
        </div>
    )
}

export default AuthForm