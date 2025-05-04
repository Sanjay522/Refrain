import React from 'react'
import Genres from '../Genres'
import gener from "../../assets/genre.png"

const ListDetailPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Title</h1>
      
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-5">
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>

        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>
        <Genres image={gener} gener="sad"/>


      </div>
    </div>
  )
}

export default ListDetailPage
