import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath ,id }) => {
  console.log("Movie idssss"+id)
  console.log("pp path"+posterPath)

  const [isHovered, setIsHovered] = useState(false);

  if(!posterPath) return null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const videotrailer =(e)=>{
    console.log("Movie idss"+e)
    if(!e) return null;
 
    // window.location.href="https://www.youtube.com/watch?v="+trailerid;
 }

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };

  return (
    <div onClick={videotrailer(id)} className=' w-40 pr-5 md:w-52 md:pr-6 movie-card'onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <img
        src={IMG_CDN_URL + posterPath}
        alt='Movie Poster'
        style={imageStyle}
        className=' rounded-lg'
      />
    </div>
  );
};

export default MovieCard;