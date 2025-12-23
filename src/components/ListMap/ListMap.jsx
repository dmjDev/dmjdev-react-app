import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"              // CONTEXT PROVIDER DE APP
import { ListMapContext } from "../../context/ListMapProvider"      // CONTEXT PROVIDER DE COMPONENTE

import { ListMapItem } from "./ListMapItem"                         // IMPORTACION DE COMPONENTE
import { ListMapAdd } from "./ListMapAdd"                           // IMPORTACION DE COMPONENTE


const ListMap = () => {
    const { appDato } = useContext(AppContext)                      // IMPORTACION DE DATO DE APP
    const { listMap } = useContext(ListMapContext)                  // IMPORTACION DE DATO DE COMPONENTE

    const html =
        <>
            <h1>Listado de acciones ({appDato})</h1>
            <ListMapAdd />
            <ol>
                {listMap.map((item, index) => <ListMapItem key={index} nombre={item.nombre} visto={item.visto} />)}
            </ol>
        </>
    return html
}

export default ListMap
