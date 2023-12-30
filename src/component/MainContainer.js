import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    function randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    //early return
    if(movies===null) return;
    const mainMovie=movies[randomNumber(0,19)];

    // const mainMovie = movies[0];

    const{original_title,overview,id} = mainMovie; 
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview ={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer