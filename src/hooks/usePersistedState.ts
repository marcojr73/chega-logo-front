/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, Dispatch, SetStateAction } from "react"

import NosSSR from "@/config/NosSSR"

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        if (typeof window !== "undefined") {
            const storageValue = localStorage.getItem(key)

            if (storageValue) {
                return JSON.parse(storageValue)
            } else {
                return initialState
            }
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState