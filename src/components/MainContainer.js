import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBG';
import VideoTitle from './VideoTitlefile';

const MainContainer = () => {
    // Access the movies from the Redux store
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    // Log the movies array for debugging
    console.log('Movies from store:', movies); 

    // Return early if movies is undefined, null, or an empty array
    if (!movies ) {
        console.log('No movies available'); // Add a log for clarity
        return null; // You can return null or a fallback UI
    }

    // Safely access the first movie in the array
    const mainMovie = movies[0];
    
    
    // Destructure with fallback in case properties are missing
    const { original_title , overview  } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} /> 
            <VideoBackground movieId={365177}/>
        </div>
    );
};

export default MainContainer;
