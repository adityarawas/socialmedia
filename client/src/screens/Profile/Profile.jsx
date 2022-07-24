import React from 'react'
import PostsGrid from '../../components/HomePageComponenets/PostsGrid/PostsGrid'
import ProfileCard from '../../components/HomePageComponenets/ProfileCard/ProfileCard'
import RightGrid from '../../components/HomePageComponenets/RightGrid/RightGrid'
import ProfileLeft from '../../components/ProfilePageComponenets/ProfileLeft/ProfileLeft'
import "./Profile.css"
const Profile = () => {
  return (
    <div className='profile'>
       <ProfileLeft />
       <div className='profile-center'>
        <ProfileCard/>
        <PostsGrid />
       </div>
       <RightGrid />
    </div>
  )
}

export default Profile