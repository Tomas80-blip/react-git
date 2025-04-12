import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const UserProfile = () => {
    const { user } = useContext(UserContext)

    return (
        <p>
            {user ? `Prisijunges vartotojas ${user.name}` : 'Vartotojas neprisijunges'}
        </p>
    )
}

export default UserProfile
