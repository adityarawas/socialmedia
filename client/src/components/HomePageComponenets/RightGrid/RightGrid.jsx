import React from 'react'
import { MdHome, MdNotifications, MdComment, MdSettings } from 'react-icons/md'
import TrendCard from '../TrendCard/TrendCard'
import "./RightGrid.css"
const RightGrid = () => {
  return (
    <div className="RightCols">
        <div className='navigations'>
        <MdHome />
        <MdNotifications />
        <MdComment />
        <MdSettings />
        </div>
        <TrendCard />
        <button className='button shareBtn'>
          Share
        </button>
    </div>

  )
}

export default RightGrid