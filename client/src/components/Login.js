import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";
const Login = () => {
  const { push } = useHistory()
  const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        push('/bubblespage') 
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input type="text" 
          name="username" 
          value={credentials.username} 
          onChange={handleChange} 
          placeholder="Username"/>
        <br/>
        <input type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          placeholder="Password"/>
        <br/>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
