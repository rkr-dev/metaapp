import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeContainer } from '../containers/Home'
import { Post } from '../components'
import { getPosts } from '../store/actions/posts'

export const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])
  
  return (
    <HomeContainer>
      {posts.map(post => (
        <Post key={post._id}/>
    ))}
    </HomeContainer>
  )
}
