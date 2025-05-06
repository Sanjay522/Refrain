import React from 'react';
import { useLocation } from 'react-router-dom';
import Song from '../Song';

const ListDetailPage = () => {
  const location = useLocation();
  const  item = location.state || {};
  console.log(item)
  // console.log("Location state:", location.state);


  const renderData = (item, index) => {
    switch (type) {
      case "song":
        return (
          <Song
            key={index}
            image={item.songImage}
            songname={item.song}
            artistname={item.artist}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6"></h1>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-5">
      {item.length > 0 ? (
          item.map((i, index) => renderData(i, index))
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default ListDetailPage;
