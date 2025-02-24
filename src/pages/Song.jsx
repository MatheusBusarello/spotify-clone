import React from 'react'
import Player from '../components/Player'

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img 
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" 
            alt="Song image" 
          />
        </div>
      </div>
      
      <div className="song__bar">
        <div className="song__artist-image">
          <img 
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" 
            alt="Artist image" 
          />
        </div>

        <Player />    

        <div>
          <p className="song__name">última saudade - Ao vivo</p>
          <p>Henrique&Juliano</p>
        </div>
      </div>
      
    </div>
  )
}

export default Song
