import React from 'react'

export const Input = ({
  name,
  width,
  label,
  type,
  placeholder,
  autoFocus,
  handleChange,
  handleShowPassword,
}) => {
  return (
    <div className='pb-2 pt-2'>
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`block w-full p-3 text-md rounded-md bg-black`}
        onChange={handleChange}
      />
    </div>
  )
}
