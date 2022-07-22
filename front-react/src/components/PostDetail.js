import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CreateComment from './CreateComment';
import '../App.css';

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
        <div className='detail-container'>

        <div className='post-detail'>  
        <h2>{post.title}</h2>
        <h3>{post.description}</h3>
        </div>

        <img className='detail-image' src={`${post.photo}`} alt='animal'></img>

        <div className='detail-btns'>
        <Link className='edit' to={`/posts/edit/${id}`}>Edit</Link>
        <Link className='delete-btn' to={`/posts/delete/${id}`}>Delete</Link>
        </div>
        </div>
        <div className='comments'>
        <p>Comments:</p>
        {<MapComment/>}
        </div>

        <div className='create-comment'>
        <h3>create comment</h3>
        <CreateComment />      
        </div>
        </>
    )
}

export default PostDetail;