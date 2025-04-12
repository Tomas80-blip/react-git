import React, { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleAuth = () => setIsLoggedIn((prev) => !prev)

    const user = isLoggedIn ? { name: 'Jonas' } : null

    return (
        <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
            { children(user) }
        </AuthContext.Provider>
    )
}