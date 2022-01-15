import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { useModal } from 'react-hooks-use-modal'
import { createPost } from '../../store/actions/posts'
import { Menu } from './Menu'
import * as API from '../../api'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: true,
  })
  const [loading, setLoading] = useState(false)
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    tags: [],
    imageUrl: '',
  })
  const [selectedFile, setSelectedFile] = useState('')
  const user = useSelector((state) => state.user)
  const post = null
  const dispatch = useDispatch()

  const handleMenu = () => {
    setShowMenu((show) => !show)
  }

  const handleModal = () => {
    open()
  }

  const handleChange = (e) => {
    setPostData({ ...post, [e.target.name]: e.target.value })
  }

  const handleClear = () => {
    setPostData({
      title: '',
      description: '',
      tags: '',
    })
  }

  const handleImage = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const imageInputRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (post === null) {
      const formData = new FormData()

      formData.append('file', selectedFile)
      formData.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_API_UPLOAD_PRESET
      )
      try {
        const res = await API.uploadImage(
          process.env.REACT_APP_CLOUDINARY_API_BASE_URL,
          formData
        )
        const cloudinaryURL = res.data.secure_url
        console.log('postData', postData)
        dispatch(createPost({ ...postData, imageURL: cloudinaryURL }))
        imageInputRef.current.value = ''
      } catch (e) {
        console.log(e)
      }
    } else {
      // Handle Form Update
    }
    handleClear()
    setSelectedFile('')
    setLoading(false)
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
            disabled
          />
        </div>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost cursor-not-allowed'>
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
        <button className='btn btn-square btn-ghost' onClick={handleModal}>
          <FaPlus />
        </button>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost cursor-not-allowed'>
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
            <img src='https://i.pravatar.cc/500?img=2' alt='avatar' />
          </div>
        </div>
      </div>
      {showMenu && <Menu handleMenu={handleMenu} />}
      <Modal>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center justify-center h-screen bg-transparent z-10'>
            <div className='bg-white py-6 rounded-md px-10 max-w-lg shadow-md'>
              <h1 className='text-center text-lg font-bold text-gray-500'>
                Add a Post[WIP]
              </h1>
              {loading && (
                <div className='text-center w-full p-3 transition-all'>
                  <span>Uploading...</span>
                </div>
              )}
              <div className='space-y-4 mt-6'>
                <div className='w-full'>
                  <input
                    type='text'
                    placeholder='title'
                    className='px-4 py-2 bg-gray-50 w-full rounded'
                    name='title'
                    value={postData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='text'
                    placeholder='description'
                    className='px-4 py-2 bg-gray-50 w-full rounded'
                    name='description'
                    value={postData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='text'
                    placeholder='hashtags seperated by comma'
                    className='px-4 py-2 bg-gray-50 w-full rounded'
                    name='tags'
                    value={postData.tags}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='file'
                    placeholder='Image to upload'
                    className='px-4 py-2 w-full rounded'
                    accept='image/x-png,image/jpeg,image/jpg'
                    name='selectedFile'
                    value={postData.selectedFile}
                    onChange={handleImage}
                    ref={imageInputRef}
                    required
                  />
                </div>
              </div>
              <button
                className='w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight'
                type='submit'
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}
