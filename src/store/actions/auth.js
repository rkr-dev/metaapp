import { AUTH, LOGOUT, SET_USER } from '../../constants/store'
import * as API from '../../api'

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.login(formData)
    dispatch({ type: AUTH, payload: data })
    history.push('/')
  } catch (err) {
  }
}

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.register(formData)
    dispatch({ type: AUTH, payload: data })
    history.push('/')
  } catch (err) {
  }
}

export const logout = (history) => async (dispatch) => {
  try {
    const { data } = await API.logout()
    dispatch({ type: SET_USER, payload: null })
    dispatch({ type: LOGOUT, payload: data })
    localStorage.clear()
    history.push('/login')
  } catch (err) {
  }
}

export const setUser = () => (dispatch) => {
  try {
    dispatch({
      type: SET_USER,
      payload: JSON.parse(localStorage.getItem('user')),
    })
  } catch (err) {
  }
}
