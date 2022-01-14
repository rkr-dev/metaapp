import { GET_POSTS } from '../../constants/store'

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action?.payload.data
    default:
      return posts
  }
}
