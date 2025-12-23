import { createContext, useState, useEffect } from "react"

export const UsersAppContext = createContext()
export const UsersAppProvider = (props) => {
    const [usersApp, setUsersApp] = useState([])                      // DECLARACION DE DATO DE COMPONENTE
    const [endPoint, setEndPoint] = useState("users")

    useEffect(() => {
        usersAppFetch()
    }, [endPoint])

    const usersAppFetch = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/'+endPoint)
            const data = await response.json()
            console.log(data)
            setUsersApp(data)
        } catch(error) {
            console.log('error')
        }
    }

    const endPointArray = ["users", "comments", "posts"]
    const handleFetch_UsersApp = () => {
        let next = (endPointArray.indexOf(endPoint) + 1 == endPointArray.length) ? 0 : endPointArray.indexOf(endPoint) + 1
        setEndPoint(endPointArray[next])
        usersAppFetch()
    }

    return (
        <>
            <UsersAppContext.Provider value={{ usersApp, endPoint, handleFetch_UsersApp }}>
                {props.children}
            </UsersAppContext.Provider>
        </>
    )
}