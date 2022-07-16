import React from 'react'
import Followers from './Followers'
import "./FollowersCard.css"
const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      <Followers />
      <Followers />
      <Followers />
      <Followers />
      <Followers />

    </div>
  )
}

export default FollowersCard