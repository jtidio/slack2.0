import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../constants/Constants';
import "./Signup.css";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Key } from '@mui/icons-material';

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
			<div className='signupInput'>
				<div className='signupemailInput'>
					<EmailIcon></EmailIcon>
					<input
							type="email"
							onChange={(event) => setEmail(event.target.value)}
							placeholder='Email'
					>
					</input>
				</div>
				<div className='signuppasswordInput'>
					<KeyIcon></KeyIcon>
					<input
							type="password"
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Password'
					>
					</input>
				</div>
				<div className='retypepasswordInput'>
					<KeyIcon></KeyIcon>
					<input
							type="password"
							onChange={(event) => setConfirmPassword(event.target.value)}
							placeholder='Re-type Password'
					>
					</input>
				</div>
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
)
};

export default Signup;