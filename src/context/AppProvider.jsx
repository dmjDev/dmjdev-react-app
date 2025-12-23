import { createContext, useState, useEffect } from "react"

export const AppContext = createContext()
export const AppProvider = (props) => {
    const [appDato, setAppdato] = useState([])                      // DECLARACION DE DATO DE APP

    useEffect(() => {
        setAppdato(["Start"])
    }, [])

    return (
        <>
            <AppContext.Provider value={{ appDato }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
