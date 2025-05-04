import React from 'react'
import gener from "../assets/genre.png"

const Genres = ({gener,image}) => {
  return (
    <div className='h-30 w-30 flex flex-col px-1 mt-2  justify-center     sm:h-45 sm:w-40 sm:flex sm:flex-col sm:my-5 hover:bg-[#1f1f1f] sm:p-5 '>
        <img src={image} className=' sm:h-30 sm:w-30' alt="" />
        <p className='sm:text-xl '>{gener}</p>
    </div>
  )
}

export default Genres