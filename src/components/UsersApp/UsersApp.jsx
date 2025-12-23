import { useContext } from "react"
import { UsersAppContext } from "../../context/UsersAppProvider"      // CONTEXT PROVIDER DE COMPONENTE

export const UsersApp = () => {
    const { usersApp } = useContext(UsersAppContext)                  // IMPORTACION DE DATO DE COMPONENTE
    const { isLoading } = useContext(UsersAppContext)
    const { endPoint} = useContext(UsersAppContext)
    const { handleFetch_UsersApp } = useContext(UsersAppContext)

    console.log(isLoading, usersApp)
    const jsxml =
        <>
            <h2>Lista de usuarios {endPoint}</h2>
            <button onClick={handleFetch_UsersApp}>Cargar datos</button>
            <ul>
                {
                    isLoading
                    ? <p>Cargando...</p>
                    : usersApp.map( user => <li key={user.id}>{endPoint == 'posts' ? user.title : user.name}</li>)
                }
            </ul>
        </>
    return jsxml
}
