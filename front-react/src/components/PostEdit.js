import React, { useState, useEffect } from 'react';
import PostDelete from './PostDelete';
import { useParams} from 'react-router-dom';


function PostEdit() {
  
  const postRestEndpoint = 'posts-protected/'
  let { id } = useParams();
  
  const initialState = {
    title: '',
    description: '',
    photo: ''
}

  const [formData, setFormData] = useState(initialState)
  
  const fetchPost = () => {
    fetch(process.env.REACT_APP_API_URL + postRestEndpoint + id)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setFormData(data);
    });
  }
  
  useEffect(() => {
    fetchPost();
  }, []);
  const url = (process.env.REACT_APP_API_URL + postRestEndpoint + id )
  
  const handleSubmit = event => {
    event.preventDefault();
    const opts = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }
    fetch(url, opts)
    .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        console.log(formData)

      };
      
      const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }


    return(
        <>
  {/* {console.log(post)} */}
        <form onSubmit={handleSubmit} >
          <label>Title:</label>
            <input id="title" name="title" type="text" value={formData.title} onChange={onChange} style={{height: "50px", width: "450px" }}/>
            <br/>
            <br/>
          <label>Description:</label>
            <input id="description" name="description" type="text" value={formData.description} onChange={onChange} style={{height: "50px", width: "400px" }}/>
            <br/>
            <br/>
          <label>Photo:</label>
            <input id="photo" name="photo" type="text" value={formData.photo} onChange={onChange} style={{height: "50px", width: "440px" }}/>
            <br/>
            <br/>
          <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default PostEdit;