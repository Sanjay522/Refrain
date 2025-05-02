import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Nav2 from "./component/Nav2";
import Line from "./component/Line";
import Hero from "./component/Hero";
import Discove from "./component/pages/Discover";
import Discover from "./component/pages/Discover";
import AlbumPage from "./component/pages/AlbumPage";
import ArtistPage from "./component/pages/ArtistPage";
import Footer from "./component/Footer";
import Player from "./component/Player";
import Favorite from "./component/pages/Favorite";
import DetailPage from "./component/DetailPage";
import SongLine from "./component/SongLine";
import Mobileplayer from "./component/Mobileplayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full  m-auto sm:mt-7 flex">
      <div className="fixed sm:top-0 left-0 bottom-22 w-full bg-black z-50 h-15">
          <Nav2 />
        </div>
        <Nav />
        <div className="flex-grow sm:mt-10 sm:mb-20 mt-12 mb-38  ">
          <Home />
          <Discover />
          <AlbumPage />
          <ArtistPage />
          <Footer />
          <Favorite/>
          <DetailPage playlistName="peace" loggedUserName="sanjay" songCount="sanjay">
            <SongLine/>
            </DetailPage>
        </div>
        <div className="fixed sm:bottom-0 left-0 bottom-22 w-full bg-black z-50">
          <Player />
        </div>
        <Mobileplayer/>
        
      </div>
    </>
  );
}

export default App;
