import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CreateComment from './CreateComment';

function PostDetail() {

    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    
    const postRestEndpoint = 'posts-protected/'

    let { id } = useParams();

    useEffect(() => {
        fetchPost();
        FetchComment();
    }, []);
    
    const fetchPost = ()  => {
        fetch(process.env.REACT_APP_API_URL + postRestEndpoint + id)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setPost(data);
            })
        }
            
    const FetchComment = () => {
        fetch(process.env.REACT_APP_API_URL + 'comments/')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setComment(data)
            })
    }
        
    const MapComment = () => {
        return (comment ? 
            comment.map((com, ind) => {
                return( com.post_id === post.id ? 
                    <>
                    <div>
                    <h3 key={com}>{com.author}</h3>
                    <h4>{com.body}</h4>
                    </div>
                    </>
                : null )
            }) : null
        )   
    }

    return(
        <>
        <h1>Post Detail</h1>
        <div>  
        <h2>{post.title}</h2>
        <h3>{post.description}</h3>
        <img src={`${post.photo}`} alt='animal'></img>

        <Link to={`/posts/edit/${id}`}>Edit</Link>
        <Link to={`/posts/delete/${id}`}>Delete</Link>
        
        <p>Comments:</p>
        {<MapComment/>}



        <h3>create comment</h3>
        <CreateComment/>
        </div>
        </>
    )
}

export default PostDetail;