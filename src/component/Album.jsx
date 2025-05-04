import React from 'react'
import playlist from "../assets/playlist.png"


const Album = ({image,songname,artistname}) => {
  return (
     <div className='flex h-31 w-31 mt-5 justify-center sm:flex sm:h-52 sm:w-45 sm:m-3
       hover:bg-[#2e2d2d] rounded-sm sm:justify-center sm:pt-2 sm:my-5 my-10'>
             <div className=''>
                 <img className='w-26 sm:w-40' src={image} alt="" />
                 <h1 className='py-1 text-[15px] font-semibold sm:py-1 sm:text-sm sm:font-bold'>{songname}</h1>
                 <p className='text-[12px] sm:text-xs'>{artistname}</p>
             </div>
           
         </div>
      
  )
}

export default Album