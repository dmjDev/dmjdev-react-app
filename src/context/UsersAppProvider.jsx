import { createContext, useState } from "react"
import { UserAppHelper } from "./UserAppHelper"

export const UsersAppContext = createContext()
export const UsersAppProvider = (props) => {
    const [endPoint, setEndPoint] = useState("users")
    const { usersApp, isLoading } = UserAppHelper(endPoint)

    const handleFetch_UsersApp = () => {
        const endPointArray = ["users", "comments", "posts", "todos", "albums", "photos"]
        let next = (endPointArray.indexOf(endPoint) + 1 == endPointArray.length) ? 0 : endPointArray.indexOf(endPoint) + 1
        setEndPoint(endPointArray[next])
    }

    return (
        <>
            <UsersAppContext.Provider value={{ usersApp, isLoading, endPoint, handleFetch_UsersApp }}>
                {props.children}
            </UsersAppContext.Provider>
        </>
    )
}