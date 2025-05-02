import React from 'react'
import Genres from '../Genres'
import Nav2 from '../Nav2'
import CircleButton from '../button/CircleButton'
import Playlist from '../Playlist'
import Artist from '../Artist'
import Song from '../Song'
import Album from '../Album'
import SectionHeader from '../SectionHeader'

const Discover = () => {
  return (
    <div className="flex  flex-col lg:flex-row sm:m-0 m-5 pr-1 sm:px-10">
      <div className='w-full'>


      <SectionHeader title="Music Genre">
        <Genres/>
        <Genres/>
        <Genres/>
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