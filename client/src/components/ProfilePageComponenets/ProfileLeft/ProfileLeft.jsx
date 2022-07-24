import React from 'react'
import FollowersCard from '../../HomePageComponenets/followersCard/FollowersCard'
import Search from '../../HomePageComponenets/Search/Search'
import InfoCard from '../InfoCard/InfoCard'
import "./ProfileLeft.css"
const ProfileLeft = () => {
  return (
    <div className='profileCols'>
      <Search />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft