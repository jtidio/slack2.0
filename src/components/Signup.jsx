import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../constants/Constants';

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setConfirmPassword] = useState();
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user") || null)
);

// useEffect(()=>{
//   if(user){
//       localStorage.setItem("user", JSON.stringify(user));
//   }
// }, [user])

  async function handleSignup(event){
    event.preventDefault();

    
    if(!email || !password){
        return alert("Incomplete credentials (email or password)");
    }
    try {
        const signupCredentials ={
            email,
            password,
            password_confirmation
        }
        const response = await axios.post(`${API_URL}/auth/`, signupCredentials);
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

return (
	<div className='signupformContainer'>
		<form onSubmit={handleSignup}>
			<h1>Sign Up</h1>
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
				<label>Re-Type Password:</label>
				<input
						type="text"
						onChange={(event) => setConfirmPassword(event.target.value)}
				>
				</input>
				<button type="submit">Sign Up</button>
		</form>
	</div>
)
};

export default Signup;