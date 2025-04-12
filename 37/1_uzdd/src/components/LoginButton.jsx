import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const LoginButton = () => {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext)

    return (
        <button onClick={toggleAuth}>
            {isLoggedIn ? 'Atsijungti' : 'Prisijungti'}
        </button>
    )
}

export default LoginButton
