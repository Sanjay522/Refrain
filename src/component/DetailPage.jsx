import React from 'react'

const DetailPage = ({playlistName,loggedUserName,songCount,children}) => {
  return (
    <div className="flex  flex-col lg:flex-row sm:m-0 m-5 pr-1 sm:px-10">
    <div
      className="bg-gradient-to-r from-red-300 
     via-red-600  to-red-900 w-full rounded-lg "
    >
      <div className="  flex justify-between items-end p-2 sm:flex sm:justify-between sm:pr-10 sm:items-end  ">
        <div className=" flex px-6 py-10 sm:flex  sm:ustify-between sm:p-10">
          {/* <img src="" alt="" className="h-35 sm:h-60" /> */}
          <div
            className=" rounded-md flex items-center justify-center h-25 w-25 sm:h-60 sm:w-60  bg-gradient-to-r from-red-900 
     via-red-600  to-red-300"
          >
            <p className="text-white text-6xl sm:text-9xl">♥</p>
          </div>
          <div className=" px-3 sm:px-7 flex flex-col justify-between">
              <p className="font-semibold  sm:text-2xl">Playlist</p>
              <p className=" text-[20px] sm:text-8xl font-bold">{playlistName}</p>
              <div className="flex items-center sm:gap-5 gap-2">
                  <span className="sm:text-2xl font-bold">{loggedUserName}</span>
                  <span className="sm:text-2xl font-bold">•</span>
                  <span className="sm:text-lg text-[12px] ">{songCount}</span>
              </div>
          </div>
          
        </div>
        {/* <div className="absolute right-0"><PlayAll /></div> */}
      </div>
      <div className=" p-3 sm:py-5">
        {children}
      </div>
    </div>
  </div>
  )
}

export default DetailPage