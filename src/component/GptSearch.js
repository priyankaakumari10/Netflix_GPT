import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
        <div className="">
        <img
        src={BG_URL}
          alt="logo"
          className="absolute bg-slate-500 h-screen object-cover w-full -z-30"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch