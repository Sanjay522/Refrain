import React from "react";
import PlayAll from "../button/PlayAll";
import trending from "../../assets/trending.png";
import Nav3 from "../Nav3";
import SongLine from "../SongLine";

const AlbumPage = () => {
  return (
    <div className="flex  flex-col lg:flex-row sm:m-0 m-5 pr-1 sm:px-10">
      <div
        className="bg-gradient-to-r from-sky-400 
       via-sky-700  to-gray-800 w-full rounded-lg "
      >
        {/* <Nav3 /> */}
        <div className=" relative flex justify-between items-end p-2 sm:flex sm:justify-between sm:pr-10 sm:items-end">
          <div className=" flex px-6 py-10 sm:flex sm:w-[60%] sm:ustify-between sm:p-10">
            <img src={trending} alt="" className="h-35 sm:h-60" />
            <div className=" flex  flex-col justify-between  px-3 sm:flex sm:flex-col sm:justify-between sm:py-2">
              <h1 className="text-[25px]  sm:text-4xl font-semibold leading-tight">Trending songs mix</h1>
              <p className="py-2 sm:py-10 font-semibold leading-tight">artist name and their 2-3 song name
              </p>
              <div className=" flex items-center font-semibold gap-2 sm:flex  sm:items-center sm:font-semibold sm:gap-5">
                <p>20 songs</p>
                <p>1h 36m</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0">
          <PlayAll />
          </div>
        </div>
        <div className=" p-3 sm:py-5">
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
          <SongLine />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
