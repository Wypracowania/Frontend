import React, { useEffect, useState } from 'react'
import { deleteSession, userHaveSession } from '../authentication'
import { Redirect } from "react-router-dom";

// należy zawsze pamiętać o użyciu userHaveSession oraz deleteSession

function PageOne() {
    const [isLogged, Login] = useState(true)
    
    const logout = () => {
        deleteSession() 
        Login(false)
    }

    // za każdym razem sprawdzamy czy użytkownik ma sesję
    useEffect(() => {
        if(!userHaveSession()) { //Jeżeli nie ma, logout
            logout()
        }
    })

    return (
        <div>
            <button onClick={() => logout()} >Wyloguj się</button>
            <h2>Strona pierwsza</h2>
            {/* Jeżeli nie ma sesji, przekierować do loginu */}
            {isLogged ? null : <Redirect to="/login"/>} 
        </div>
        
    )
}

export default PageOne