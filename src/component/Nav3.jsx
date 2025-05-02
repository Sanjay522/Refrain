import React from 'react'
import { useState } from 'react'

const Nav3 = () => {
  const [open,setOpen] = useState(false)

  const openClose = ()=>{
    setOpen(!open)
  }

  return (
    <>
    <div className='flex justify-between p-5 items-center '>
        <p className='text-5xl cursor-pointer'>←</p>
        <div className='flex gap-10  text-lg'>
            <p className='cursor-pointer'>Share</p>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer'>Premium</p>
        </div>
    </div>
   
    </>
  )
}

export default Nav3