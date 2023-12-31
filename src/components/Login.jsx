import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { API_URL } from '../constants/Constants';
import "./Login.css";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useData } from '../Context/StoredData';
import StoredData from '../Context/StoredData';

function Login() {
  const {handleHeaders, handleLogin} = useData();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

//   const [user, setUser] = useState(
//     () => JSON.parse(localStorage.getItem("user") || null)
// );


  // useEffect(()=>{
  //   console.log(1, user);
    
  //   if(user){
  //     console.log(2, user);
  //     localStorage.setItem("user", JSON.stringify(user));
  //     navigate('/dashboard');
  //   }
  // }, [user])

  async function handleLoginForm(event){
    event.preventDefault();

    
    if(!email || !password){
        return alert("Invalid credentials (email or password)");
    }
    try {
        const loginCredentials = {
            email,
            password
        }
        const response = await axios.post(`${API_URL}/auth/sign_in`, loginCredentials);
        // const {data, headers} = response;
        // if (data && headers){
        //   const accessToken = headers["access-token"];
        //   const expiry = headers["expiry"];
        //   const client = headers["client"];
        //   const uid = headers["uid"];
        //   setUser({
        //       accessToken,
        //       expiry,
        //       client,
        //       uid,
        //       id: data.data.id
        //   })
        // }
        handleLogin(response.data);
        handleHeaders(response.headers);
        console.log("success")
        navigate("/dashboard")

    } catch (error){
        if(error.response.data.errors){
            return alert("Invalid credentials. Please reenter.");
        }

    }
}

  function handleSignup() {
    navigate('/signup');
  }

return (
  <div className='loginformContainer'>
    <img 
    className="loginLogo" src='./assets/slack_icon.png' alt='Logo here'>
    </img>
    <form onSubmit={handleLoginForm}>
      <div className='loginInput'>
        <div className='emailInput'>
          <EmailIcon></EmailIcon>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
          >
          </input>
        </div>
        <div className='passwordInput'>
          <KeyIcon></KeyIcon>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
          >
          </input>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
    <div onClick={handleSignup} className='createAccount'>
      <span>Create new account</span><TrendingFlatIcon></TrendingFlatIcon>
    </div>
  </div>
)
};

export default Login;