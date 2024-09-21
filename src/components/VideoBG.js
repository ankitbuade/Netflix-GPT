import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {

  const trailerVideo= useSelector(store=>store.movies?.trailerVideo)

 useMovieTrailer(movieId)

  return (
    <div className="w-screen aspect-video">
    <iframe 
    className="w-screen aspect-video"
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
    allowFullScreen
    title="YouTube video player" 
    
    ></iframe>
    </div>
  )
}

export default VideoBackground

