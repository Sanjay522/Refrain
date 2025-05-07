import React from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import example from "../assets/example.png";

const SongLine = ({image,songname,artistname,releasedate,albumname,length,index}) => {
  return (
    <>
    <div>
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:px-5 sm:py-2 ">
        <p className="text-3xl">{index}</p>
        <div className="bg-[#1615151c] rounded-sm flex justify-between items-center pr-10 w-[95%] hover:bg-[#2e2d2d] ">
          <img src={image} alt="" className="h-15 rounded-sm" />
          <div>
            <h1 className="text-lg">{songname}</h1>
            <p className="text-xs">{artistname}</p>
          </div>
          <p className="text-base">{releasedate}</p>
          <p className="text-base">{albumname}</p>
          <img src={like} alt="" className="cursor-pointer h-8"  />
          <p>{length}</p>
        </div>
      </div>
    </div>

    <div>
      <div className=" sm:hidden flex justify-between items-center   py-2 ">
        <p className="text-[30px]">{index}</p>
        <div className="bg-[#1e1d1d78] rounded-sm flex justify-between items-center pr-10 w-[95%] p-1 hover:bg-[#2e2d2d]">
          <img src={image} alt="" className="h-10 rounded-sm" />
          <div>
            <h1 className="text-[15]">{songname}</h1>
            <p className="text-xs">{artistname}</p>
          </div>
          {/* <p className="text-base">Nov 4,2023</p> */}
          {/* <p className="text-base">Hard to Imagine the Neighbourhood Ever Changing</p> */}
          {/* <img src={like} alt="" className="cursor-pointer h-8"  /> */}
          <p>{length}</p>
          <p className="text-red-500 text-4xl">⋮</p>
        </div>
      </div>
    </div>


    </>
  );
};

export default SongLine;
