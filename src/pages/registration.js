import React, { useEffect, useState } from "react";
import { REGISTER_URL } from '../globalVariables';
import { setUserCookie, setTokenCookie } from '../authentication';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isClicked, setClick] = useState(false);
    const data = {
        username,
        password,
      };

    useEffect(() =>{
    fetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((res) => res.json())
        .then((token) => {
            setTokenCookie(token);
            setUserCookie(username);
        })
        .catch((err) => console.log(err));
    }, [isClicked])

    return(
        <div className="registration">
            <div className="registration__box">
            <form action="">
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
            <button type="submit" onClick={(e)=>{e.preventDefault();setClick(true)}}>Zarejerstruj się</button>
          </form>
            </div>
        </div>
    )
}

export default Registration;