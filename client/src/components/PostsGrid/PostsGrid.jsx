import React from 'react'
import Posts from '../Posts/Posts'
import SharePosts from '../SharePosts/SharePosts'
import "./PostsGrid.css"
const PostsGrid = () => {
  return (
    <div className="postsCols">
      <SharePosts />
      <Posts />
    </div>
  )
}

export default PostsGrid