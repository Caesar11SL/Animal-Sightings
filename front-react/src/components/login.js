import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin, signup} from '../services/Auth'

function LoginForm({setUserSignedIn, setAccessToken}) {

    const initialState = {
        username: '',
        password: '',
    }

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        if(isSignup){
            dispatch(signup(formData, history))
        } else{
            dispatch(signin(formData,history))
        }

    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});

    }
    return (
        <>
        {isSignup ? (
            <h1>Please Sign up!</h1> 
        
        ) : (

            <div>
      <h3>Login</h3>
        <form onSubmit={handleSubmit}> 
            <label>username:</label>
            <input id="username" name="username" type="text" onChange={handleChange}/>
            <label>password:</label>
            <input id="password" name="username" type="password" onChange={handleChange}/>
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
