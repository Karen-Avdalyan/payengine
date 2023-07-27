import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('token')
        if (accessToken) setIsLoggedIn(true)
    }, [])

    const login = (token) => {
        localStorage.setItem('token', token)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
