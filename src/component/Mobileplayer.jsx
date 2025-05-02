import React from "react";
import example from "../assets/example.png";

import suffle from "../assets/player button/suffle.svg";
import prev from "../assets/player button/prev.svg";
import play from "../assets/player button/play.svg";
import next from "../assets/player button/next.svg";
import pause from "../assets/player button/pause.svg";
import lyrics from "../assets/player button/lyrics.svg";
import music from "../assets/player button/music.svg";
import queue from "../assets/player button/queue.svg";

import dislike from "../assets/dislike.png";

const Mobileplayer = () => {
  return (
    <div className="sm:hidden relative h-screen w-full">
      <div className="absolute inset-0 bg-test blur-3xl z-0" />
      <div className="relative z-10 mt-25 flex flex-col items-center w-80 mx-auto">
        <img src={example} className="h-80 w-80" alt="example" />
        <div className="w-80 flex bg-red-400 rounded-xl h-10  p-[3px] mt-5 justify-center items-center">
          <div className="flex space-x-5 justify-center items-center w-38.5 ">
            <img src={music} className="h-6 w-6" alt="" />
            <p className="text-lg">Songs</p>
          </div>
          <div className="flex justify-center items-center space-x-5 w-38.5 bg-red-500 rounded-xl">
            <img src={lyrics} className="h-7 w-7" alt="" />
            <p className="text-lg">Lyrics</p>
          </div>
        </div>
        <div className="flex justify-between w-80 items-center mt-22">
            <div>
                <h1 className="text-2xl">Song Name</h1>
                <p className="text-lg">Artist Name</p>
            </div>
            <img src={dislike} className="h-12 w-12" alt="" />
        </div>
        <div className="h-2 w-80 bg-red-400   rounded-full mt-10">
            <p className="h-2 w-10 bg-red-500 rounded-full"></p>
        </div>
        <div className="flex items-center w-80  justify-between mt-10">
            <img src={suffle} className =" h-7 w-7"alt="" />

            <div className="h-12 w-12 bg-red-400 flex items-center justify-center rounded-full"><img src={prev}   className =" h-4 w-4"alt="" /></div>

        
            <div className="h-20 w-20 bg-red-400 flex justify-center items-center rounded-full"><img src={pause}  className =" h-9 w-9"alt="" /></div>

            <div className="h-12 w-12 bg-red-400 flex items-center justify-center rounded-full"> <img src={next}   className =" h-4 w-4"alt="" /></div>

            <img src={queue}  className =" h-7 w-7"alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mobileplayer;
