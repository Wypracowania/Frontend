import React, { useEffect, useState } from 'react';
import { deleteSession, userHaveSession } from '../../authentication';
import { Redirect } from 'react-router-dom';

const AuthenticationWrapper = ({ children }) => {
    const [isLogged, Login] = useState(true)

    const logout = () => {
        deleteSession()
        Login(false)
    }

    // za każdym razem sprawdzamy czy użytkownik ma sesję
    useEffect(() => {
        console.log(userHaveSession())
        if (!userHaveSession()) {
        //Jeżeli nie ma, logout
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