import React from 'react'
import example from "../assets/example.png"

const Song = () => {
  return (
    <div className='w-25 h-30 flex sm:h-52 sm:w-45 m-2 items-center hover:bg-[#414040] rounded-sm sm:justify-center pt-2'>
        <div className='sm:flex flex flex-col justify-center items-center'>
            <img className='w-20 sm:w-35' src={example} alt="" />
            <h1 className=' text-[12px]  sm:text-sm font-bold'>Whatever it Takes</h1>
            <p className='sm:text-xs text-[8px]'>Imagin Dragons</p>
        </div>
      
    </div>
  )
}

export default Song