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
import { useData } from "./Context";
import example from "../assets/example.png"
import { Navigate, useNavigate } from "react-router-dom";
import ListDetailPage from "./pages/ListDetailPage";


const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate  = useNavigate()

   const {data,desktop,mobile,setDesktop,setMobile}= useData()
   console.log(desktop)

  //  function haldleOnclick() {
  //   setDesktop(data)
  //   navigate("/listdetailpage",{state:{data}})
    
  //  }

   
   useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //  const desktop = data.slice(0,5)
  //  const moblie = data.slice(0,3)




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
    <div className="flex flex-col lg:flex-row  sm:px-10 overflow-x-hidden">
      <div className="w-full">
        <Hero />

        <SectionHeader title="Weekly Top Songs">
          {/* <ListDetailPage title="Weekly Top Songs"> */}
          {window.innerWidth >=900 ? (desktop && desktop.map((items,index) => (
    <Song key={index} image={example} songname={items.song} artistname={items.artist} />
  ))):(mobile && mobile.map((items,index) => (
    <Song key={index} image={example} songname={items.song} artistname={items.artist} />
  ))) }
  
      <CircleButton  onClick={() => navigate("/listdetailpage", {
    state: {
      title: "song",
      items: desktop, 
      type: "artist"
    }
  })} />
      {/* </ListDetailPage> */}

</SectionHeader>


        {/* <SectionHeader title="New Release Songs">
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
        </SectionHeader> */}
      </div>
    </div>
  );
};

export default Home;
