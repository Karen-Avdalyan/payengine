import { Navigate } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"

export const protectedRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    }
]

export const authRoutes = [
    {
        path: 'login',
        index: true,
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: '*',
        element: <Navigate to="/login" replace />,
    }
]