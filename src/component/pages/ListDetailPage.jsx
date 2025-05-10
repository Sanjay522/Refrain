import React from "react";
import { useLocation } from "react-router-dom";
import Song from "../Song";
import SongLine from "../SongLine";
import Artist from "../Artist";
import Album from "../Album";
import Playlist from "../Playlist";

const ListDetailPage = () => {
  const location = useLocation();
  const { items = [], title = "", type = "" } = location.state || {};

  const dataDetail = (item, type, index) => {
    switch (type) {
      case "song":
      case "new release song":
        return (
          <Song
            key={index}
            songname={item.song}
            artistname={item.artist}
            image={item.songImage}
          />
        );

      case "trending":
        return (
          <SongLine
            key={index}
            index={index + 1}
            image={item.songImage}
            songname={item.song}
            artistname={item.artist}
            releasedate={item.releaseDate}
            albumname={item.playlist}
            length={item.songLength}
          />
        );

      case "Top artist":
        return (
          <Artist
            key={index}
            artistname={item.artist}
            image={item.artistImage}
          />
        );

        case "Top album":
        return (
<Album artistname={item.artist} image={item.playlistImage} songname={item.song} />
        );

        case "Top playlist":
          return(
            <Playlist playlistname={item.playlist} image={item.playlistImage}/>
          )

      default:
        return <p key={index}>Unknown type</p>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div
        className={`${
          type !== "trending"
            ? "grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-5"
            : "flex flex-col"
        }`}
      >
        {items.map((item, index) => dataDetail(item, type, index))}
      </div>
    </div>
  );
};

export default ListDetailPage;
