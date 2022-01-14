import { AUTH, LOGOUT, SET_USER } from '../../constants/store'

export const authReducer = (
  user = JSON.parse(localStorage.getItem('user')) || null,
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('user', JSON.stringify({ ...action?.payload.user }))
      if (window.location.hostname === 'localhost') {
        localStorage.setItem(
          'profile',
          JSON.stringify({ token: action.payload.token })
        )
      }
      return action.payload.user
    case SET_USER:
      return { ...user, ...action?.payload }
    case LOGOUT:
      return { user: null }
    default:
      return user
  }
}
