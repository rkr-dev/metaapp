import React, { useState, useEffect } from 'react'
import { Form } from './Form'

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [resetForm, setResetForm] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const switchMode = () => {
    setResetForm(true)
    setIsSignUp((prev) => !prev)
  }

  const setBackground = () => {
    const images = [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1636520529106-568f8c5dc5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1636531370041-2289aefc9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1636773538617-0467acf9226e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1635898004196-7d041668e6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
    ]
    setImageSrc(images[Math.floor(Math.random() * (images.length + 1))])
  }

  useEffect(() => {
    setBackground()
  }, [])

  return (
    <section className='min-h-screen flex items-stretch text-white '>
      <div
        className='lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center'
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
        <div className='w-full px-24 z-10'>
          <h1 className='text-5xl font-bold text-left tracking-wide'>
            Keep it special
          </h1>
          <p className='text-3xl my-4'>
            Capture your personal memory in unique way, anywhere.
          </p>
          <p className='text-3xl mt-10 box-shadow border-gray-600 font-bold text-left tracking-wid'>
            <span className='text-indigo-700'>Meta</span>App
          </p>
        </div>
      </div>
      <div
        className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0'
        style={{ backgroundColor: '#161616' }}
      >
        <div
          className='absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center'
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
        </div>
        <div className='w-full py-4 z-20'>
          <h1 className='sm:w-2/3 w-full rounded-full px-4 py-3 lg:px-0 mx-auto mb-3 bg-black font-bold text-xl'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
          <Form
            isSignUp={isSignUp}
            switchMode={switchMode}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setResetForm={setResetForm}
            resetForm={resetForm}
          />
          <p className='text-gray-100 mb-1'>or</p>

          <button onClick={switchMode}>
            {isSignUp
              ? 'Already have an account? Sign In'
              : 'Dont have an account? Sign Up'}
          </button>
        </div>
      </div>
    </section>
  )
}
