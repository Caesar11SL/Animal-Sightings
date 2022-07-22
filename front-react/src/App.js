import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/login'
import PostList from './components/PostList';
import SignUpForm from './components/signup';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import CreateComment from './components/CreateComment';
import PostEdit from './components/PostEdit';
import HomePage from './components/HomePage';
import PostDelete from './components/PostDelete';
 

function App() {

  const storedUser = localStorage.getItem("currentUser")
  const storedAccessToken = localStorage.getItem("accessToken")
  const storedRefreshToken = localStorage.getItem("refreshToken")

  const [userSignedIn, setUserSignedIn] = useState(storedUser)
  const [authToken, setAuthToken] = useState(storedAccessToken)

  return (
    <>
      <div className='wrapper'>
    <Router>

      
    <div className='nav'>

      <Link to="/posts/create" className='make-post'>Make a Post!</Link>

      <Link to="/" className='head'>Animal Sightings</Link>
      
      <div className='links'>
        <Link to="/posts" className='link'>Home | </Link>
        <Link to="/signup" className='link'> Sign Up | </Link>
        <Link to="/login" className='link'>Login  </Link>

      </div>

    </div>
    {/* {userSignedIn ? (
      <nav>
          <span>signed in as: {userSignedIn}</span>
        </nav>  
        ) : null
      } */}

      <Routes>
      <Route path="/" exact element={<HomePage />} />

      <Route path="login" exact element={
           <LoginForm 
            setUserSignedIn={setUserSignedIn} 
            setAuthToken={setAuthToken}
          />
       }/>

      <Route path="/posts" exact element={
          <PostList 
            setUserSignedIn={setUserSignedIn} 
            setAuthToken={setAuthToken}
          />}
         />
      
      <Route path="/signup" exact element={<SignUpForm 
            setUserSignedIn={setUserSignedIn} 
            setAuthToken={setAuthToken}
            />}
            />
      <Route path="/posts/:id" exact element={<PostDetail />
      }/>

      <Route path="posts/create" extact element={<CreatePost/>} />
      <Route path="comment/create" extact element={<CreateComment/>} />

      <Route path="posts/edit/:id" extact element={<PostEdit/>} />
      <Route path="posts/delete/:id" extact element={<PostDelete/>} />


      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
 
