import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUsername, deleteSession, userHaveSession } from '../../authentication';

const AuthenticationWrapper = ({ children }) => {
    const [isLogged, Login] = useState(true)

    // Sprawdzamy redux
    const logInUser = useDispatch()
    const logUsername = getUsername()

    const logout = () => {
        deleteSession()
        Login(false)
    }

    // za każdym razem sprawdzamy czy użytkownik ma sesję, jeżeli ma odnawiamy redux
    useEffect(() => {
        if (!userHaveSession()) {
            logout()
        } else {
            logInUser({
                type: "LOGIN_USER",
                payload: logUsername
            })
        }
    })
    return (
        <>
            { isLogged ? children : <Redirect to="/login" /> }
        </>
    )
}

export default AuthenticationWrapper