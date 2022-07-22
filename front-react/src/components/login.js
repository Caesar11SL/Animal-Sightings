import React, { useState, useEffect } from 'react';

function LoginForm({setUserSignedIn, setAccessToken}) {

    const initialState = {
        username: '',
        password: '',
    }

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    async function loginUser(credentials) {
        return fetch(process.env.REACT_APP_API_URL + 'api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
          .then(response => {
            localStorage.setItem('token', response.access)
            localStorage.setItem('refresh', response.refresh)
          }
          )
       }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        loginUser(formData)
        
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        <>
        {isSignup ? (
            <h1>Please Sign up!</h1> 
        
        ) : (

            <div className='login-container'>
      <h3>Login</h3>
        <form onSubmit={handleSubmit}> 
            <label>username:</label>
            <input id="username" name="username" type="text" onChange={handleChange}/>
            <label>password:</label>
            <input id="password" name="password" type="password" onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
        <p>Need an Account?</p>
        <a href='signup'>Sign up!</a>
    </div>
    )}
    </>
    );
}

export default LoginForm;
