import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { deleteSession, userHaveSession } from '../../authentication';

const AuthenticationWrapper = ({ children }) => {
    const [isLogged, Login] = useState(true)

    const logout = () => {
        deleteSession()
        Login(false)
    }

    // za każdym razem sprawdzamy czy użytkownik ma sesję
    useEffect(() => {
        if (!userHaveSession()) {
            logout()
        }
    })
    return (
        <>
            { isLogged ? null : <Redirect to="/login" /> }
            { children }
        </>
    )
}

export default AuthenticationWrapper