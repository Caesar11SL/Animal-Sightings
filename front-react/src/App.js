import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
 

function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'posts/')
      .then(res => res.json())
      .then(res => {
        console.log('The app is responding fine', res);
      });
  }, []);


  return (
    <>
    <h1>hello world</h1>
    </>
  );
}

export default App;
