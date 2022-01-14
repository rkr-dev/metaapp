import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { postsReducer } from './posts'

export const reducers = combineReducers({
  user: authReducer,
  posts: postsReducer,
})
