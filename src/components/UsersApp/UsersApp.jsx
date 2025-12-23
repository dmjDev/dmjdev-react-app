import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"              // CONTEXT PROVIDER DE APP
import { UsersAppContext } from "../../context/UsersAppProvider"      // CONTEXT PROVIDER DE COMPONENTE

export const UsersApp = () => {
    const { appDato } = useContext(AppContext)                      // IMPORTACION DE DATO DE APP
    const { usersApp } = useContext(UsersAppContext)                  // IMPORTACION DE DATO DE COMPONENTE
    const { handleFetch_UsersApp } = useContext(UsersAppContext)
    const { endPoint} = useContext(UsersAppContext)

    const jsxHtml =
        <>
            <h2>Lista de usuarios {endPoint}</h2>
            <button onClick={handleFetch_UsersApp}>Cargar datos</button>
            <ul>
                { usersApp.map( user => <li key={user.id}>{endPoint == 'posts' ? user.title : user.name}</li>) }
            </ul>
        </>
    return jsxHtml
}
