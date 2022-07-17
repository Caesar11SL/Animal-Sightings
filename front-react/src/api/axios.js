import axios from 'axios';

const API = axios.create({baseURL: process.env.REACT_APP_API_URL})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('posts')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchPosts = () => API.get('/posts-protected');

export const createPost = (newPost) => API.post('/posts-protected', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts-protected/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts-protected/${id}`);

export const fetchComment = () => API.get('/comments');

export const createComment = (newPost) => API.post('/comments', newPost);

export const updateComment = (id, updatedPost) => API.patch(`/comments/${id}`, updatedPost);

export const deleteComment = (id) => API.delete(`/comments/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData);