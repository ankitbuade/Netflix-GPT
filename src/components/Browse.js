import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'

const Browse = () => {

useNowPlayingMovies()
usePopularMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
        main content 
          - video background
          - video Title
        
        Secondary Container
          - movie list
          - cards 


      */}

    </div>
  )
}

export default Browse
