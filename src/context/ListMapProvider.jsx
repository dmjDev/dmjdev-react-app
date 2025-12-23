import { createContext, useState, useEffect } from "react"

// FUENTE DE DATOS
const listadoSecciones = [
    { nombre: "Instalación", visto: true },
    { nombre: "Configuración", visto: true },
    { nombre: "Ejecución", visto: true },
    { nombre: "Primeras pruebas", visto: false },
    { nombre: "Consolidación", visto: false }
]

export const ListMapContext = createContext()
export const ListMapProvider = (props) => {
    const [listMap, setListMap] = useState([])                      // DECLARACION DE DATO DE COMPONENTE

    useEffect(() => {
        setListMap(listadoSecciones)
    }, [])

    const listMapAdd = (inputValue) => {                            // DECLARACION DE FUNCION DE COMPONENTE
        setListMap([...listMap, { nombre: inputValue, visto: false }])
    }

    return (
        <>
            <ListMapContext.Provider value={{ listMap, listMapAdd }}>
                {props.children}
            </ListMapContext.Provider>
        </>
    )
}
