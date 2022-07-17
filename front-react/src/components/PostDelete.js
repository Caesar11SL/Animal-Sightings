import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

function PostDelete() {

    const [status, setStatus] = useState('')
    const postRestEndpoint = 'posts-protected/'
    let { id } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + postRestEndpoint + id, {
            method: 'DELETE'
        })
          .then(() => Navigate('/posts-protected'))
    }, [])

    return(
        <>
        </>
    )
}

export default PostDelete;