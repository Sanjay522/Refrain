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
import example from "../assets/example.png";
import { Navigate, useNavigate } from "react-router-dom";
import ListDetailPage from "./pages/ListDetailPage";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const { data, desktop, mobile, setDesktop, setMobile } = useData();
   console.log(desktop)

  function haldleOnclick() {
    setDesktop(data);
    navigate("/listdetailpage", { state: { data } });
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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

        <SectionHeader title="Weekly Top Songs" 
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "Weekly Top Songs",
                  items: desktop,
                  type: "song",
                },
              })
            }
            >
          {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <Song
                  key={index}
                  image={items.songImage}
                  songname={items.song}
                  artistname={items.artist}
                />
              ))
            : mobile &&
              mobile.map((items, index) => (
                <Song
                  key={index}
                  image={items.songImage}
                  songname={items.song}
                  artistname={items.artist}
                />
              ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "Weekly Top Songs",
                  items: desktop,
                  type: "song",
                },
              })
            }
          />
        </SectionHeader>

        <SectionHeader title="New Release Songs" 
        onClick={() =>
          navigate("/listdetailpage", {
            state: {
              title: "Weekly Top Songs",
              items: desktop,
              type: "new release song",
            },
          })
        }
        >
        {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <Song
                  key={index}
                  image={items.songImage}
                  songname={items.song}
                  artistname={items.artist}
                />
              ))
            : mobile &&
              mobile.map((items, index) => (
                <Song
                  key={index}
                  image={items.songImage}
                  songname={items.song}
                  artistname={items.artist}
                />
              ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "New Release Songs",
                  items: desktop,
                  type: "new release song",
                },
              })
            }
          />
        </SectionHeader>

        <SectionHeader title="Trending Songs" 
        onClick={() =>
          navigate("/listdetailpage", {
            state: {
              title: "Weekly Top Songs",
              items: desktop,
              type: "trending",
            },
          })
        }>

          <div className="w-full">
          {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <SongLine index={index +1 } image={items.songImage} songname={items.song} 
                artistname={items.artist} releasedate={items.releaseDate} 
                albumname={items.playlist} length={items.songLength} />
              ))
            : mobile &&
              mobile.map((items, index) => (
<SongLine index={index +1} image={items.songImage} songname={items.song} 
                artistname={items.artist} releasedate={items.releaseDate} 
                albumname={items.playlist} length={items.songLength} />              ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "New Release Songs",
                  items: desktop,
                  type: "trending",
                },
              })
            }
          />
          </div>
        </SectionHeader>

        <SectionHeader title="Top artist" 
        onClick={() =>
          navigate("/listdetailpage", {
            state: {
              title: "Weekly Top Songs",
              items: desktop,
              type: "Top artist",
            },
          })
        }
        >
          <div className=" flex  space-x-5 justify-between items-center">
          {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <Artist artistname={items.artist} image={items.artistImage}   />
              ))
            : mobile &&
              mobile.map((items, index) => (
                <Artist artistname={items.artist} image={items.artistImage}   />
            ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "Top artist",
                  items: desktop,
                  type: "Top artist",
                },
              })
            }
          />
          </div>
        </SectionHeader>




        <SectionHeader title="Top Albums"
        onClick={() =>
          navigate("/listdetailpage", {
            state: {
              title: "Weekly Top Songs",
              items: desktop,
              type: "Top album",
            },
          })
        }
        >
        {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <Album artistname={items.artist} songname={items.song} image={items.playlistImage}/>
              ))
            : mobile &&
              mobile.map((items, index) => (
                <Album artistname={items.artist} songname={items.song} image={items.playlistImage}/>

              ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "New Release Songs",
                  items: desktop,
                  type: "Top album",
                },
              })
            }
          />
        </SectionHeader>



        <SectionHeader title="Top Playlist" 
        onClick={() =>
          navigate("/listdetailpage", {
            state: {
              title: "Weekly Top Songs",
              items: desktop,
              type: "Top playlist",
            },
          })
        }
        >
        {window.innerWidth >= 900
            ? desktop &&
              desktop.map((items, index) => (
                <Playlist playlistname={items.playlist} image={items.playlistImage} />
              ))
            : mobile &&
              mobile.map((items, index) => (
                <Playlist playlistname={items.playlist} image={items.playlistImage} />

              ))}

          <CircleButton
            onClick={() =>
              navigate("/listdetailpage", {
                state: {
                  title: "New Release Songs",
                  items: desktop,
                  type: "Top playlist",
                },
              })
            }
          />
        </SectionHeader>
      </div>
    </div>
  );
};

export default Home;
