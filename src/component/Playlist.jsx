import React from 'react'
import playlist from "../assets/playlist.png"

const Playlist = ({ title }) => {
  return (
    <div className='flex h-28 w-28 justify-center items-start sm:h-50 
    sm:w-50  sm:my-4 py-2 my-5 
    hover:bg-[#2e2d2d] rounded-sm sm:justify-center sm:items-start'>
      <div>
        <img className='h-26 sm:h-32' src={playlist} alt="" />
        <h1 className='py-1 text-sm sm:py-1 sm:text-3xl'>sad songs</h1>
      </div>
    </div>
  )
}

export default Playlist
