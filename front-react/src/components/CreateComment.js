import React, { useState } from "react";
import { useParams } from 'react-router-dom';

function CreateComment() {
  let { id } = useParams();
    const initialState = {
        post_id: id,
        author: '',
        body: '',
    }
    const [formState, setFormState] = useState(initialState);
    const postRestEndpoint = 'comments/'

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
      console.log(formState)
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            {/* <label>post:</label>
            <input id="post" name="post" type="text" onChange={handleChange}/> */}
            <label>author:</label>
            <input id="author" name="author" type="text" onChange={handleChange}/>
            <label>body:</label>
            <input id="body" name="body" type="text" onChange={handleChange}/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default CreateComment;