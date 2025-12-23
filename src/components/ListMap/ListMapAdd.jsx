import { useState, useContext , useRef } from "react"
import { ListMapContext } from "../../context/ListMapProvider"      // CONTEXT PROVIDER DE COMPONENTE

export const ListMapAdd = () => {
    const [inputValue, setInputValue] = useState("")
    const { listMapAdd } = useContext(ListMapContext)               // IMPORTACION DE FUNCION DE COMPONENTE
    const inputRef = useRef(null);

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue != '') {
            listMapAdd(inputValue)
            setInputValue("")
            inputRef.current.focus();
        }
    }

    const html =
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Añade una acción a la lista"
                ref={inputRef}
                value={inputValue}
                onChange={onInputChange}
            />
            <button type="submit">Añadir</button>
        </form>

    return html
}
