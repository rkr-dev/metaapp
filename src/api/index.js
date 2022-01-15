import axios from 'axios'

let baseURL
let API
if (process.env.REACT_APP_NODE_ENV === 'development') {
  baseURL = process.env.REACT_APP_SERVER_DEVELOPMENT_URL
  API = axios.create({ baseURL })
  API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem('profile')).token
      }`
    }
    return req
  })
}

if (process.env.REACT_APP_NODE_ENV === 'production') {
  baseURL = '/api/v1'
  API = axios.create({ baseURL })
}

// Auth
export const register = (formData) => API.post('/auth/register', formData)
export const login = (formData) => API.post('/auth/login', formData)
export const logout = () => API.post('/auth/logout')

// Posts
export const getPosts = () => API.get('/posts')
export const uploadImage = (url, image) => axios.post(url, image)
export const createPost = (post) => API.post('/posts', post)