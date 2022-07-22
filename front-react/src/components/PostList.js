import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'



function PostList({ setUserSignedIn, setAccessToken }) {


    const [posts, setPosts] = useState('');
    
    const postRestEndpoint = 'posts-protected/'


    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + postRestEndpoint)
          .then(res => res.json())
          .then(data => {
            setPosts(data)
            console.log(data)
          })
    }, [])

   const MapPost = () => {
    return( posts ? 
        posts.map((post, index) => {
            return( 
                <>
                <div>
                <p key={post}>{post.title}</p>
                <Link to={`/posts/${post.id}`}> Detail </Link>
                </div>
                </>
                )
            }) : null
            )
   }
    
    return (
        <>
        <div className='list-container'>
        {<MapPost />}
        </div>
        </>
    );
}

export default PostList;