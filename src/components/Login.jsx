import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../constants/Constants';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user") || null)
);

useEffect(()=>{
  if(user){
      localStorage.setItem("user", JSON.stringify(user));
  }
}, [user])

  async function handleLoginForm(event){
    event.preventDefault();

    
    if(!email || !password){
        return alert("Invalid credentials (email or password)");
    }
    try {
        const loginCredentials ={
            email,
            password
        }
        const response = await axios.post(`${API_URL}/auth/sign_in`, loginCredentials);
        const {data, headers} = response;

        if (data && headers){
            const accessToken = headers["access-token"];
            const expiry = headers["expiry"];
            const client = headers["client"];
            const uid = headers["uid"];
            setUser({
                accessToken,
                expiry,
                client,
                uid,
                id: data.data.id
            })

            console.log("success");
        }

    } catch (error){
        if(error.response.data.errors){
            return alert("Invalid credentials this is the other");
        }

    }
}

// function handleLogin(){

// }

  return (
    <form onSubmit={handleLoginForm}>
      <h1>Login</h1>
                    <label>Email:</label>
                    <input
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </input>
                    <label>Password:</label>
                    <input
                        type="text"
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </input>
                    <button type="submit">Login</button>
    </form>
  )
};

export default Login;