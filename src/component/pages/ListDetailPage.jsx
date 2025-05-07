import React from 'react';
import { useLocation } from 'react-router-dom';
import Song from '../Song';
import SongLine from '../SongLine';

const ListDetailPage = () => {
  const location = useLocation();
  const { items = [], title = "", type = "" } = location.state || {};
  console.log(items)
  // console.log("Location state:", location.state);

const dataDetail = (items,type,title)=>{
  switch (type) {
    case type:"song"
    return <Song songname={items.song} artistname={items.artist} image={items.songImage} />
  
    case "new release song":
      return <Song songname={items.song} artistname={items.artist} image={items.songImage} />

      case "trending":
      return <SongLine index={index} image={items.songImage} songname={items.song} 
      artistname={items.artist} releasedate={items.releaseDate} 
      albumname={items.playlist} length={items.songLength} />      


      default:
        return <p key={index}>Unknown type</p>;
}}
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-5">
      {items.map((item,index)=> dataDetail(item,type,title))}
      </div>
    </div>
  );
};

export default ListDetailPage;
