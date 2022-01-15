import React from 'react'

export const HomeContainer = ({ children, showForm }) => {
  return (
    <div className='bg-gray-100 w-full min-h-screen p-10 border-orange-600'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 border-orange-600'>
        <>{children}</>
      </div>
    </div>
  )
}
