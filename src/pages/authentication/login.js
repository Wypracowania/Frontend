import React, { useState } from 'react'
import { LOGIN_URL } from '../../globalVariables'
import { setUserCookie, setTokenCookie} from '../../authentication.js'
import { Redirect } from "react-router-dom";
// Funkcja służy do przechowywania ciasteczka/sesji z tokenem

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, Login] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Przygotowanie danych do przesłania
        const data = {
            username: username,
            password: password
        }
        fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(token => {
            setTokenCookie(token)
            setUserCookie(username)
            Login(true) //aby przekierować
        }) //Jeżeli uda się zalogować zapisujemy token
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Login"/>
                </label>
                <label htmlFor="">
                    <input type="text" onChange={e => setPassword(e.target.value)} placeholder="Hasło"/>
                </label>
                <button type="submit">Log in</button>
            </form>
            {isLogged ? <Redirect to='/page-one' /> : null}
        </div>
    )
}

export default Login