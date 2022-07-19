import React, { useState } from "react";

function CreatePost() {
    const initialState = {
        author: '',
        title: '',
        description: '',
        photo: '',

    }
    const [formState, setFormState] = useState(initialState);
    const postRestEndpoint = 'posts-protected/'

    const handleChange = event => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      const url = (process.env.REACT_APP_API_URL + postRestEndpoint)
      const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>author:</label>
            <input id="author" name="author" type="text" onChange={handleChange}/>
            <br/>
            <br/>
            <label>title:</label>
            <input id="title" name="title" type="text" onChange={handleChange}/>
            <br/>
            <br/>
            <label>description:</label>
            <input id="description" name="description" type="text" onChange={handleChange}/>
            <br/>
            <br/>
            <label>photo:</label>
            <input id="photo" name="photo" type="text" onChange={handleChange}/>
            <br/>
            <br/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default CreatePost;