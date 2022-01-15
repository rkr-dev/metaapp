import { GET_POSTS,CREATE_POST } from '../../constants/store'

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action?.payload.data
    case CREATE_POST:
      return [...posts, action.payload]
    default:
      return posts
  }
}
