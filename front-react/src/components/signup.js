import React, { useState } from 'react';
import '../App.css'

function SignUpForm({ setAuthToken, setUserSignedIn }) {

    const initialState = {
        email: '',
        username: '',
        password: '',
    }

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    async function signupUser(credentials) {
        return fetch(process.env.REACT_APP_API_URL + 'api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
        //   .then(response => {
        //     localStorage.setItem('token', response.access)
        //     localStorage.setItem('refresh', response.refresh)
        //   })
       }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        signupUser(formData);
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    return(
        <>
        <div className='signup-container'>
        <h1>Sign up Page!</h1>
        <form onSubmit={handleSubmit}> 
            <label>email:</label>
                <input id="email" name="email" type="text" onChange={handleChange}/>
            <label>username:</label>
                <input id="username" name="username" type="text" onChange={handleChange}/>
            <label>password:</label>
                <input id="password" name="password" type="password" onChange={handleChange}/>
            {/* <label>password:</label>
                <input id="passwordconfirm" name="passwordconfirm" type="password" onChange={handleChange}/> */}
            <button type="submit">Login</button>
        </form>
        </div>
        </>
    )

}

export default SignUpForm;