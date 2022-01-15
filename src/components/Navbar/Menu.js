import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/auth'

export const Menu = ({ handleMenu }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleProfile = () => {
    history.push('/username')
    handleMenu((show) => !show)
  }

  const handleLogout = () => {
    dispatch(logout(history))
    handleMenu((show) => !show)
  }

  const closeMenu = () => {
    handleMenu((show) => !show)
  }
  return (
    <div
      className='artboard-demo mt-4  absolute right-1 top-12 -bottom-25 ease-in duration-500'
      onMouseLeave={closeMenu}
    >
      <ul className='menu py-3 shadow-lg bg-base-100 rounded-box'>
        <li onClick={handleProfile}>
          <Link to="#">Profile</Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </div>
  )
}
