import React from 'react'

const CircleButton = () => {
  return (
    <div className='hidden items-center sm:flex flex-col' >
        <button className='m-3 bg-[#1f1f1f] text-2xl  text-white h-15 w-15 rounded-full justify-center items-center hover:bg-[#454545] cursor-pointer'>+</button>
        <p>View All</p>
    </div>
  )
}

export default CircleButton