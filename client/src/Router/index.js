import { useContext, useMemo } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthContext } from "../Contexts/Auth"
import { authRoutes, protectedRoutes } from "./routes"

export const Router = () => {
    const { isLoggedIn } = useContext(AuthContext)

    const router = useMemo(() => createBrowserRouter(isLoggedIn ? protectedRoutes : authRoutes), [isLoggedIn])

    return (
        <RouterProvider router={router} />
    )
}
