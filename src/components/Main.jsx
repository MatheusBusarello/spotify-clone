import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ( { type }) => {
  return (
    <div className="main">
      {/* ItemList artist */}
      { type === "artists" || type === undefined ? (
        <ItemList 
          title="artist" 
          items={5} 
          itemsArray={artistArray} 
          path='/artists'
          idPath='/artist'
        />
      ) : (
        <></>
      )}
       
      {/* ItemList music */}
      {type === "songs" || type === undefined ? (
        <ItemList 
          title="music" 
          items={10} 
          itemsArray={songsArray} 
          path='/songs'
          idPath='/song'
        />
      ) : (
        <></>
      )}
       
    </div>
  )
};

export default Main;