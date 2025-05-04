import React, { useState } from 'react'
import Genres from '../Genres'
import Nav2 from '../Nav2'
import CircleButton from '../button/CircleButton'
import Playlist from '../Playlist'
import Artist from '../Artist'
import Song from '../Song'
import Album from '../Album'
import SectionHeader from '../SectionHeader'
import genreImage from "../../assets/genre.png";
import data from "../data.json"; 
import DetailPage from '../DetailPage'
import ListDetailPage from './ListDetailPage'



const Discover = () => {

const [data1,setData1]=useState(data.songs)
console.log(data1)

  return (
    <div className="flex flex-col lg:flex-row  sm:px-10 overflow-x-hidden">
      <div className='w-full'>

{/* <ListDetailPage/> */}

      <SectionHeader title="Music Genre">
        <Genres gener="sad" image={genreImage}  />
        <Genres gener="romantic" image={genreImage} />
        <Genres gener="rap" image={genreImage} />
        <CircleButton/>
        </SectionHeader>





        <SectionHeader title="Mood Playlist">
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <CircleButton/>
        </SectionHeader>



        <SectionHeader title="New Release Songs">
        <Song/>
        <Song/>
        <Song/>
        <CircleButton/>
        </SectionHeader>

        <SectionHeader title="Popular Artist">
        <Artist/>
        <Artist/>
        <Artist/>
        <CircleButton/>
        </SectionHeader>


        </div>
    </div>
  )
}

export default Discover