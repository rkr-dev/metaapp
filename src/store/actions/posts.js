import { GET_POSTS, CREATE_POST } from '../../constants/store'
import * as API from '../../api'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.getPosts()
    dispatch({ type: GET_POSTS, payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const createPost = (post) => async (dispatch) => {
  console.log(post)
  try {
    const { data } = await API.createPost(post)
    console.log(data)
    dispatch({ type: CREATE_POST, payload: data })
  } catch (err) {
    console.log(err.message)
  }
}
