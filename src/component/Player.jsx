import React from 'react'
import example from "../assets/example.png"
import suffle from "../assets/player button/suffle.svg"
import  prev from "../assets/player button/prev.svg" 
import play from "../assets/player button/play.svg"
import next from "../assets/player button/next.svg"
import pause from "../assets/player button/pause.svg"
import lyrics from "../assets/player button/lyrics.svg"
import fullscreen from "../assets/player button/fullscreen.svg"
import sound from "../assets/player button/sound.svg"
import exitfullscreen from "../assets/player button/exitfullscreen.svg"
import dislike from "../assets/dislike.png";




const Player = () => {
  return (
    <>
    <div className=' sm:h-20 flex h-15 bg-black sm:flex p-3 
    justify-between items-center w-full sm:px-5 py-1 '>
      <div className='flex  items-center space-x-7 '>
        <img src={example} className='sm:h-12 h-15' alt="" />
        <div>
          <h1 className='text-sm sm:text-lg font-semibold'>Lo man liya</h1>
          <p className='text-xs sm:text-sm'>singer name</p>
        </div>
        <button><img src={dislike} className='hidden sm:block sm:h-8 sm:w-8' alt="" /></button>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center space-x-5'>
          <img className='hidden sm:block sm:h-4 sm:w-4  ' src={suffle} alt="" />
          <img className='h-6 w-6 sm:h-4 sm:w-4' src={prev} alt="" />
          <div className='  sm:h-8 sm:w-8 sm:bg-red-500 sm:p-2 rounded-full flex justify-center items-center'>
          <img className='h-8 w-8 sm:h-4 sm:w-4 ' src={play} alt="" />
          </div>
          <img className='h-6 w-6 sm:h-4 sm:w-4' src={next} alt="" />
          {/* <img className='h-8 w-8' src={pause} alt="" /> */}
        </div>
        
        <div className='hidden sm:flex justify-between sm:items-center sm:space-x-2'>
          <p className='sm:block hidden'>2:33</p>
          <div className=' sm:w-[500px] bg-red-300 sm:h-1 h-1 rounded-full'>
            <p className='h-1 bg-red-500 w-[100px] rounded-full'></p>
          </div>
          <p className='sm:block hidden'>5:00</p>
        </div>
      </div>
      <p className='text-red-500 text-5xl sm:hidden'>
      ⋮
      </p>
      <div className='hidden sm:block sm:flex  space-x-5'>
        {/* <button>
          <img src="now playing" alt="" />
        </button> */}
        <button>
          <img src={lyrics} className='h-7 w-7 sm:h-5 sm:w-5' alt="" />
        </button>
        {/* <button>
          <img src="queue" alt="" />
        </button> */}
        <button>
          <div className='flex  items-center space-x-1'>
          <img src={sound} className=' h-7 w-7 sm:h-5 sm:w-5' alt="" />
          <div className='bg-red-400 w-20 h-1  rounded-full'>
            <p className='bg-red-500 w-5 h-1    rounded-full'></p>
          </div>
          </div>
        </button>
        <button>
          <img src={fullscreen} className='h-7 w-7 sm:h-5 sm:w-5' alt="" />
        </button>
      </div>
      
    </div>
    <div>
      <div className='sm:hidden w-full sm:w-[500px] bg-red-300 sm:h-1 h-1 rounded-full'>
            <p className='h-1 bg-red-500 w-[100px]'></p>
          </div>
    </div>
    </>
  )
}

export default Player