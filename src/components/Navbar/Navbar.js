import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)
  const user = useSelector((state) => state.user)
  const handleMenu = () => {
    setShowMenu((show) => !show)
  }

  return (
    <div className='navbar shadow-sm bg-neutral text-neutral-content fixed top-0 w-full z-10'>
      <div className='flex-1 hidden px-2 mx-2 lg:flex'>
        <Link to='/'>
          <span className='text-lg font-bold cursor-pointer'>MetaApp</span>
        </Link>
      </div>
      <div className='text-fuchsia-100'>
        Welcome{' '}
        <span className='ml-3 mr-5'>
          {user.name && user.name.split(' ')[0]}
        </span>
      </div>
      <div className='flex-1 lg:flex-none'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-ghost'
          />
        </div>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            ></path>
          </svg>
        </button>
      </div>
      <div
        className='flex-none cursor-pointer'
        onClick={handleMenu}
        onMouseEnter={handleMenu}
      >
        <div className='avatar'>
          <div className='rounded-full w-10 h-10 m-1'>
            <img src='https://i.pravatar.cc/500?img=2' />
          </div>
        </div>
      </div>
      {showMenu && <Menu handleMenu={handleMenu} />}
    </div>
  )
}
