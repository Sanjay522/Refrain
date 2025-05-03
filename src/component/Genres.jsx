import React from 'react'
import gener from "../assets/genre.png"

const Genres = () => {
  return (
    <div className='h-30 w-30 flex flex-col px-1 mt-2 justify-center     sm:h-55 sm:w-60 sm:flex sm:flex-col sm:my-5 hover:bg-[#1f1f1f] sm:p-5 '>
        <img src={gener} classaName=' sm:h-40 sm:w-45' alt="" />
        <p className='sm:text-xl '>Rap Songs</p>
    </div>
  )
}

export default Genres