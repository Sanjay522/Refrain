import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Song from "./Song";
import Artist from "./Artist";
import Playlist from "./Playlist";
import SongLine from "./SongLine";
import { useEffect, useState } from "react";
import Album from "./Album";
import CircleButton from "./button/CircleButton";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";

const Home = () => {
  const [tracks, setTracks] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=be30ae2e&format=json&limit=10`)
  //       .then((response) => {
  //         if (response.status === 429) {
  //           // Handle rate limit error
  //           alert('Rate limit reached. Please try again later.');
  //           return;
  //         }
  //         return response.json();
  //       })
  //       .then((data) => setTracks(data.results))
  //       .catch((error) => console.log(error));
  //   }, []);

  // console.log(tracks)

  return (
    <div className="flex  flex-col lg:flex-row sm:m-0 m-5 pr-1  sm:px-10">
      <div className="w-full">
        <Hero />


        <SectionHeader title="Weekly Top Songs">
  <Song />
  <Song />
  <Song />
  <CircleButton />
</SectionHeader>

<SectionHeader title="New Release Songs">
  <Song />
  <Song />
  <Song />
  <CircleButton />
</SectionHeader>

<SectionHeader title="Trending Songs">
  <div className="w-full">
    <SongLine />
    <SongLine />
    <SongLine />
  </div>
</SectionHeader>

<SectionHeader title="Top Artists">
  <Artist />
  <Artist />
  <Artist />
  <CircleButton />
</SectionHeader>

<SectionHeader title="Top Albums">
  <Album />
  <Album />
  <Album />
  <CircleButton />
</SectionHeader>

<SectionHeader title="Top Playlists">
  <Playlist />
  <Playlist />
  <Playlist />
  <CircleButton />
</SectionHeader>


      </div>
    </div>
  );
};

export default Home;
