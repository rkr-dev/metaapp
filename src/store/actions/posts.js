import { GET_POSTS } from '../../constants/store'
import * as API from '../../api'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.getPosts()
    dispatch({ type: GET_POSTS, payload: data })
  } catch (err) {
    console.log(err)
  }
}
