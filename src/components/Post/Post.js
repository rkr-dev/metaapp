import React from 'react'

export const Post = ({
  post: {
    _id,
    caption,
    comments,
    createdAt,
    description,
    imageURL,
    likes,
    tags,
    user,
  },
}) => {


  return (
    <div className='card w-96 h-full bg-white card-bordered card-compact lg:card-normal drop-shadow-2xl cursor-pointer'>
      <figure className='h-64'>
        <img className='h-full' src={imageURL} alt={caption} />
      </figure>
      <div className='card-body '>
        <h2 className='card-title'>{caption}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
