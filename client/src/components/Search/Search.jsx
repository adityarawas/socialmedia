import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./Search.css"

const Search = () => {
  return (
    <div className='searchwrapper'>
      <img src={`${window.location.origin}/img/logo.png`} />
      <div className='search'>
        <input type="text" placeholder='Explore' />
      <div className='s-icon'>
      <FiSearch />
      </div>
      </div>
    </div>
  )
}

export default Search