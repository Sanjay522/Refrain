import React from 'react'
import gener from "../assets/genre.png"

const Genres = () => {
  return (
    <div className='h-35 w-35 flex flex-col my-4 p-3   sm:h-55 sm:w-60 sm:flex sm:flex-col sm:my-5 hover:bg-[#1f1f1f] sm:p-5 '>
        <img src={gener} classaName='h-20 w-20 sm"h-40 sm:w-45' alt="" />
        <p className='sm:text-xl '>Rap Songs</p>
    </div>
  )
}

export default Genres