import { useEffect, useState } from "react"
import { usersAppFetch } from "./usersAppFetch"

export const UserAppHelper = (endPoint) => {
    const [usersApp, setUsersApp] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const { data, isLoading } = await usersAppFetch(endPoint)
        setUsersApp(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        setUsersApp([])
        setIsLoading(true)
        getData()
    }, [endPoint])

    return {
        usersApp,
        isLoading
    }
}
