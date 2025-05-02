import bgImage from "../assets/bgimage.png";
import Nav2 from "./Nav2";

const Hero = () => {
  return (
    <div className="">

      <div className=" bg-img  h-[40svh]  sm:h-[80svh] rounded-2xl p-5">
        <div className="mt-15 text-2xl sm:text-5xl sm:mt-30">
            <h1>ALL THE <span className="text-red">BEST SONGS</span></h1>
            <h1>IN ONE PLACE</h1>
        </div>
        <div className="sm:mt-20 mt-8 sm:text-lg text-[10px]">
            <p>On our website, you can access an amazing collection of<p/>
            <p>popular and new songs. Stream your favorite tracks in high quality</p>
            <p>and enjoy without interruptions. Whatever your taste in music,</p>
            <p></p>we have it all for you!</p>
        </div>
        <div className=" mt-6 sm:mt-10 space-x-5">
            <button className="text-white bg-red-500  p-2 rounded-sm cursor-pointer hover:bg-red-700">Dscover Now</button>
            <button className="text-white    bg-red-500  p-2 rounded-sm cursor-pointer hover:bg-red-700">Create Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
