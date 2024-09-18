import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from "./VideoBG"
import VideoTitle from "./VideoTitlefile"

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log('Movies from store:', movies); // Log the movies array

    if (!movies || movies.length === 0) return <div>Loading...</div>;

    const mainMovie = movies[0];
    console.log('Main Movie:', mainMovie); // Log the first movie in the array

    const { original_title, overview } = mainMovie || {};

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground />
        </div>
    );
}



export default MainContainer
