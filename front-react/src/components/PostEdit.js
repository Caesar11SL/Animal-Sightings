import React, { useState, useEffect } from 'react';
import PostDelete from './PostDelete';
import { useParams, Link } from 'react-router-dom';


function PostEdit() {
  const [post, setPost] = useState('');
  const initialState = {
    title: '',
    description: ''
  }

    const postRestEndpoint = 'posts-protected/'
    let { id } = useParams();

    const [postedit, setPostEdit] = useState(initialState);


    useEffect(() => {
      fetchPost();
  }, []);

    const handleSubmit = event => {
        const url = (process.env.REACT_APP_API_URL + postRestEndpoint + id )
        const opts = {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(initialState),
        }
        fetch(url, opts)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      };

      const fetchPost = () => {
        fetch(process.env.REACT_APP_API_URL + postRestEndpoint + id)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setPost(data);
          });
      }

      const onChange = (e) => {
        setPostEdit({...postedit, [e.target.name]: e.target.value})
      }

    return(
        <>
  {/* {console.log(post)} */}
        <form>
          <label onSubmit={handleSubmit}>Title:</label>
            <input id="title" name="title" type="text" value={post.title} onChange={onChange} />
          <label>Description:</label>
            <input id="description" name="description" type="text" value={post.description} onChange={onChange}/>
          <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default PostEdit;