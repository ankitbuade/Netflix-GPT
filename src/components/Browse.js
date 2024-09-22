import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGPTSearch= useSelector((store)=>store.gpt.showGPTSearch)

useNowPlayingMovies()
usePopularMovies()

  return (
    <div>
      <Header/>
      {
        showGPTSearch?( <GPTSearch/>) :(<>
        <MainContainer/>
        <SecondaryContainer/></>
  )
      }
     
      
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
