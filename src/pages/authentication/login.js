import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_URL } from '../../globalVariables';
import { getUsername, loginUser, userHaveSession } from '../../authentication';
// Funkcja służy do przechowywania ciasteczka/sesji z tokenem

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, changeLoginStatus] = useState(false);

  const logInUser = useDispatch()
  const logUsername = getUsername()

  useEffect(()=>{
    if(userHaveSession()) {
      changeLoginStatus(true)
      logInUser({
        type: "LOGIN_USER",
        payload: logUsername
      })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // Przygotowanie danych do przesłania
    const data = {
      username,
      password,
    };

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(token => {
      loginUser(token, username)
      changeLoginStatus(true); // aby przekierować
    }) // Jeżeli uda się zalogować zapisujemy token
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Login"
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hasło"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      { isLogged ? <Redirect to="/wszystkie-zamowienia" /> : null }
    </div>
  );
}

export default Login;
