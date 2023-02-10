import { useState } from "react"
import Loader from "@/utils/loader"
import { FieldValues, UseFormReset } from "react-hook-form"

function useToggleAuth(reset: UseFormReset<FieldValues>) {
    const [textButton, setTextButton] = useState<"Entrar" | "Cadastrar" | JSX.Element>("Entrar")
    const [textToggler, setTextToggler] = useState<"Ainda não possui uma conta?" | "Já possui uma conta?">("Ainda não possui uma conta?")
    const [page, setpage] = useState<"sign-in" | "sign-up">("sign-in")

    function togglePages(){
        if(page === "sign-in"){
            setTextButton("Cadastrar")
            setTextToggler("Já possui uma conta?")
            setpage("sign-up")
            reset()
        } else {
            setTextButton("Entrar")
            setTextToggler("Ainda não possui uma conta?")
            setpage("sign-in")
            reset()
        }
    }

    function loading(){
        setTextButton(Loader)
    }

    function endLoading(){
        if(page ==="sign-in"){
            setTextButton("Entrar")
        } else {
            setTextButton("Cadastrar")
        }
    }

    return {
        textButton,
        textToggler,
        page,
        togglePages,
        loading,
        endLoading
    }
}

export default useToggleAuth