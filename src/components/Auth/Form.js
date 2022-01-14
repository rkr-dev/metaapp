import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login, register } from '../../store/actions/auth'
import { Input } from './Input'

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const Form = ({ isSignUp, resetForm, setResetForm }) => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isSignUp) {
      dispatch(login(formData, history))
    } else {
      let signUpData = {
        firstName: formData.firstName,
        name: `${formData.firstName} ${formData.lastName}`,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }
      dispatch(register(signUpData, history))
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (resetForm) {
      setFormData(initialState)
    }
  }, [resetForm])

  return (
    <form
      onSubmit={handleSubmit}
      className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
    >
      {isSignUp && (
        <>
          <Input
            type='text'
            name='firstName'
            value={formData.firstName}
            placeholder='First Name'
            width='half'
            handleChange={handleChange}
          />
          <Input
            type='text'
            name='lastName'
            value={formData.lastName}
            placeholder='Last Name'
            width='half'
            handleChange={handleChange}
          />
          <Input
            type='text'
            name='username'
            value={formData.username}
            placeholder='Username'
            width='half'
            handleChange={handleChange}
          />
        </>
      )}
      <Input
        type='text'
        name='email'
        value={formData.email}
        placeholder='Email address'
        handleChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        value={formData.password}
        placeholder='Password'
        handleChange={handleChange}
      />
      {isSignUp && (
        <Input
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          placeholder='Confirm Password'
          handleChange={handleChange}
        />
      )}
      <div className='px-4 pb-2 pt-4 mb-2'>
        <button
          className={
            'uppercase block w-full p-3 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none'
          }
          disabled={
            isSignUp
              ? formData.password.length === 0 ||
                formData.password !== formData.confirmPassword
              : formData.password.length === 0 || formData.email.length === 0
          }
        >
          {isSignUp ? 'Sign up' : 'sign in'}
        </button>
      </div>
    </form>
  )
}
