import React from "react";
import artist from "../../assets/artist.png";
import Nav3 from "../Nav3";
import SongLine from "../SongLine";
import Album from "../Album";
import CircleButton from "../button/CircleButton";
import Song from "../Song";
import Playlist from "../Playlist";
import Artist from "../Artist";
import SectionHeader from "../SectionHeader";

const ArtistPage = ({ title }) => {
  return (
    <div className="flex-col lg:flex-row sm:m-0 m-5 pr-1 sm:px-10">
      <div className="rounded-md">
        <div className="bg-black rounded-b-md">
          <div className="ml-1 relative artist-bg bg-cover bg-center w-full rounded-md h-[30vh] sm:h-[50vh] sm:flex sm:flex-col sm:justify-between">
            <h1 className="absolute bottom-3 left-5 text-6xl sm:text-8xl font-semibold sm:px-10 sm:py-15">
              Eminem
            </h1>
          </div>

          <div className="px-3 pb-5">
            <h1 className="py-4 text-4xl font-semibold sm:p-5">Popular</h1>
            <SongLine />
            <SongLine />
            <SongLine />
            <SongLine />
            <SongLine />
            <div className="flex justify-center items-center p-2">
              <button className="text-white bg-red-500 p-2 rounded-md hover:bg-red-800">
                Show more
              </button>
            </div>
          </div>
        </div>

        <div className="px-3">
          <SectionHeader title="Artist Albums">
            <Album />
            <Album />
            <Album />
            <CircleButton />
          </SectionHeader>

          <SectionHeader title="Single Songs">
            <Song />
            <Song />
            <Song />
            <CircleButton />
          </SectionHeader>

          <SectionHeader title="Artist Playlist">
            <Playlist />
            <Playlist />
            <Playlist />
            <CircleButton />
          </SectionHeader>

          <SectionHeader title="Eminem">
            <Artist />
            <Artist />
            <Artist />
            <CircleButton />
          </SectionHeader>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
