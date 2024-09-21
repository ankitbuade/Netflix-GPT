import React from 'react'
import { IMG_CDNURL } from '../utils/constant '


const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="movie card" src={IMG_CDNURL + posterPath}/>
    </div>
  )
}

export default MovieCard
